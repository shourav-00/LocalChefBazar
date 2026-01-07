import React from "react";
import Navbar from "../COMPONENTS/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../COMPONENTS/Footer";

const HomeLayout = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      {location.pathname !== "/" && <Navbar />}

      <main className="flex-1">
        <div>
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomeLayout;
