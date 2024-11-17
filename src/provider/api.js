import axios from "axios";

const api = axios.create({
    baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    withCredentials: true,
});

api.interceptors.request.use(
    async (config) => {
        const jwtToken = localStorage.getItem("jwtToken");
        if (jwtToken) {
            config.headers.Authorization = `Bearer ${jwtToken}`;
        }

        let csrfToken = localStorage.getItem("CSRF_TOKEN");
       
        if (!csrfToken) {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_ENDPOINT}/getcsrf`,
                    { withCredentials: true }
                );
                csrfToken = response.data.token;
                localStorage.setItem("CSRF_TOKEN", csrfToken);
            } catch (ex) {
                console.error("Failed to fetch CSRF token", ex);
            }
        }

        if (csrfToken) {
            config.headers["X-XSRF-TOKEN"] = csrfToken;
        }

        return config; // Ensure config is returned
    },
    (error) => {
        console.log("Error: " + error);
        return Promise.reject(error); // Return a rejected promise for errors
    }
);

export default api;
