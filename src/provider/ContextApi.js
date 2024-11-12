import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import api from"./api";

const contextApi= createContext();
export const ContextProvider = ({children}) =>{


    const jwtToken = localStorage.getItem("JWT_TOKEN")
     ? JSON.stringify(localStorage.getItem("JWT_TOKEN")):null;
     const isAdmin = localStorage.getItem("IS_ADMIN")
     ?JSON.stringify(localStorage.getItem("IS_ADMIN")): false;

     const[token, setToken] = useState(jwtToken);
     const[currentUser, setCurrentUser] = useState(null);
     const[isADmin,setIsAdmin]  = useState = useState(isADmin);
     const fetchUser = async()=>{
        const user = JSON.parse(localStorage.getItem("USER"));

        if(user?.username){
            try{

               
                const{data} =  await api.get(`${process.env.REACT_APP_API_ENDPOINT}/auth/getUser`);
                const roles = data.roles;

                if(roles.includes("ROLE_ADMIN")){

                    localStorage.setItem("IS_ADMIN").JSON.stringify(true);
                    setIsAdmin(true);
                } else {
                    localStorage.removeItem("IS_ADMIN");
                    setIsAdmin(false);

                }

                setCurrentUser(data);
            }catch(e){

                console.log(e);
            }
        }
     };

     useEffect(()=>{
        if(token){
            fetchUser();
        }
     },[token]);


     return(<contextApi.Provider
        value={{
            token,
            setToken,
            currentUser,
            setCurrentUser,
            isAdmin,
            setIsAdmin,
          }}>

                {children}
     </contextApi.Provider>);

};

export const GlobalContext = ()=>{

    const context = useContext(contextApi);
    return context;
}; 