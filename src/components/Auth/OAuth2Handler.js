import { useLocation, useNavigate } from "react-router-dom";
import { useEcomContext } from "../../provider/ContextApi";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const OAuth2Handler =()=>{
    const{setToken,setIsAdmin} = useEcomContext();
    const location = useLocation();
    const navigate  = useNavigate();

    useEffect(()=>{
        const params = new URLSearchParams(location.search);
        const token = params.get("token");
        if(token){
            const decodedToken = jwtDecode(token);
            localStorage.setItem('JWT_TOKEN',decodedToken);
            const user = {
                username: decodedToken.sub,
                role:decodedToken.roles,
            };

            

        }
    });

    return<p>Hello</p>
};
export default OAuth2Handler;