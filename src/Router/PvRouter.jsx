import React from "react";
import useAuth from "../HOOKS/useAuth";
import { Navigate, useLocation } from "react-router";

const PvRouter = ({ children }) => {
const { user, loading } = useAuth();
const location=useLocation();
  if (loading) {
    <div>
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span>
      <span className="loading loading-ball loading-xl"></span>
    </div>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to='/login'></Navigate>;
  }


  return children;
};

export default PvRouter;
