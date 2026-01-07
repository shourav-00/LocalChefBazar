import React from "react";
import Navbar from "../COMPONENTS/Navbar";
import { motion } from "framer-motion";
import Hero from "../COMPONENTS/Home/Hero";

const Home = () => {
  return (
    <div className="relative">
      <div className=" sticky top-0 left-0 w-full z-10 ">
        <Navbar />
      </div>
      <div>
        <Hero/>
      </div>
      



      <div>
        <h2>Hello</h2>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import Navbar from "../COMPONENTS/Navbar";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <div className="relative">

//       <div className="sticky top-0 w-full z-50 bg-transparent">
//         <Navbar />
//       </div>

//       <div className="min-h-screen relative">

//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('https://i.ibb.co.com/Kxw0ML5f/high-angle-delicious-pakistan-meal-arrangement-basket.jpg')`,
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
//         </div>

//         <div className="relative z-1 min-h-screen flex items-center px-5">
//           <div className="max-w-7xl mx-auto w-full px-4 sm:px-5 lg:px-4">
//             <motion.div
//               initial={{ x: -100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="my-28 max-w-xl">
//                 <h1 className="text-2xl mt-50 md:text-4xl lg:text-4xl text-white font-bold mb-4 md:mb-6 merienda">
//                   Fast & Hot Sugar HomeCook
//                 </h1>

//                 <p className="text-2xl md:text-5xl lg:text-7xl text-[#ffcc00] font-bold mb-4 md:mb-6 merienda">
//                   Get Healthy & Fresh Food Any Time
//                 </p>

//                 <div className="space-y-4">
//                   <p className="text-white">
//                     At our home kitchen, every meal begins with fresh
//                     ingredients and honest cooking. We prepare food the same way
//                     we serve our own families—warm, clean, and full of love. No
//                     shortcuts, no artificial colors, just real food made with
//                     care.
//                   </p>
//                 </div>

//                 {/* Stats */}
//                 <div className="mt-12 grid grid-cols-2 gap-6">
//                   <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
//                     <div className="text-2xl font-bold text-white">
//                       30<span className="text-yellow-400">min</span>
//                     </div>
//                     <div className="text-gray-400 text-sm">Avg Delivery</div>
//                   </div>
//                   <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
//                     <div className="text-2xl font-bold text-white">
//                       300<span className="text-yellow-400">+</span>
//                     </div>
//                     <div className="text-yellow-400 text-center">chefs</div>
//                   </div>
//                   <div className="mt-10">
//                     <button
//                       className="bg-[#ffcc00] px-5 active:scale-95 py-3 text-black merienda hover:text hover:text-white hover:bg-black transition-all ease-in-out duration-300 scale-105 focus:outline-none focus:ring-2"
//                     >
//                       Explore More!
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* OTHER SECTIONS with different backgrounds */}
//       <div className="bg-white">
//         {/* Example: Featured Dishes Section */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold text-center mb-8">Our Special Dishes</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="bg-gray-100 p-6 rounded-lg text-center">
//                 <h3 className="text-xl font-bold mb-2">Biryani</h3>
//                 <p>Authentic Pakistani biryani with aromatic spices</p>
//               </div>
//               <div className="bg-gray-100 p-6 rounded-lg text-center">
//                 <h3 className="text-xl font-bold mb-2">Karahi</h3>
//                 <p>Spicy and flavorful chicken karahi</p>
//               </div>
//               <div className="bg-gray-100 p-6 rounded-lg text-center">
//                 <h3 className="text-xl font-bold mb-2">Nihari</h3>
//                 <p>Slow-cooked beef stew with traditional spices</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Example: About Section */}
//         <section className="py-20 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
//             <p className="text-center max-w-3xl mx-auto">
//               We use only the freshest ingredients sourced locally. Our chefs have years of experience in traditional Pakistani cooking methods, ensuring authentic flavors in every bite.
//             </p>
//           </div>
//         </section>

//         {/* Add more sections as needed */}
//       </div>
//     </div>
//   );
// };

// export default Home;
