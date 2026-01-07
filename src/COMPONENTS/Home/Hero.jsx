import React from 'react';
import { motion } from "framer-motion";

const Hero = () => {
    return (
         <div className="min-h-screen relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://i.ibb.co.com/Kxw0ML5f/high-angle-delicious-pakistan-meal-arrangement-basket.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
        </div>

        <div className="relative z-1 min-h-screen flex items-start lg:items-center px-5 pt-10 md:pt-50 lg:py-30">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-5 lg:px-4 overflow-hidden">
            <motion.div
            //initial={false}
              initial={{ x: 3000, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.9,
                ease:'easeOut'
               }}
              
            >
              <div className="my-2 max-w-xl">
                <h1 className="text-2xl  md:text-4xl lg:text-4xl text-white font-bold mb-4 md:mb-6  merienda">
                  Fast & Hot Sugar HomeCook
                </h1>

                <p className="text-2xl md:text-5xl lg:text-7xl text-[#ffcc00] font-bold mb-4 md:mb-6  merienda">
                  Get Healthy & Fresh Food Any Time
                </p>

                <div className="space-y-4">
                  <p className="text-white">
                    At our home kitchen, every meal begins with fresh
                    ingredients and honest cooking. We prepare food the same way
                    we serve our own families—warm, clean, and full of love. No
                    shortcuts, no artificial colors, just real food made with
                    care.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-2 gap-6 ">
                  <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">
                      30<span className="text-yellow-400">min</span>
                    </div>
                    <div className="text-gray-400 text-sm">Avg Delivery</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm ">
                    <div className="text-2xl font-bold text-white">
                      300<span className="text-yellow-400">+</span>
                    </div>
                    <div className="text-yellow-400 text-center">chefs</div>
                  </div>
                  <div className="mt-10">
                    <button
                      className="bg-[#ffcc00] px-5 active:scale-95 py-3 text-black merienda hover:text hover:text-white hover:bg-black  transition-all ease-in-out duration-300 scale-105 focus:outline-none 
  focus:ring-2"
                    >
                      Explore More!
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
};

export default Hero;