import React from "react";
import Navbar from "../COMPONENTS/Navbar";
import { motion } from "framer-motion";
import Hero from "../COMPONENTS/Home/Hero";
import SuperDeliciousSecOne from "../COMPONENTS/Home/SuperDeliciousSecOne";

const Home = () => {
  return (
    <div className="relative">
      <div className=" sticky top-0 left-0 w-full z-10 ">
        <Navbar />
      </div>

     {/* Hero Section */}
      <section className="relative z-0">
        <Hero/>
      </section>

     {/* Super Delicious Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="relative -mt-20 z-1">
        <SuperDeliciousSecOne/>
        </div>
      </section>


      



      
    </div>
  );
};

export default Home;

