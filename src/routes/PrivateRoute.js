// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  return children; // If the user is logged in, render the children (protected route)
};

export default PrivateRoute;