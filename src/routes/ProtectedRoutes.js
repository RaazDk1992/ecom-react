import React from "react";
import { Navigate } from "react-router-dom";
import { useEcomContext } from "../provider/ContextApi";

const ProtectedRoutes = ({ children, adminPage }) => {
  // Access the token and isAdmin state by using the useMyContext hook from the ContextProvider
  const { token, isAdmin } = useEcomContext();

  //navigate to login page to an unauthenticated
  if (!token) {
    return <Navigate to="/login" />;
  }

  //navigate to access-denied page if a user try to access the admin page
  if (token && adminPage && !isAdmin) {
    return <Navigate to="/access-denied" />;
  }

  return children;
};

export default ProtectedRoutes;

