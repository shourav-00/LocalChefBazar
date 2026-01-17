import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import all Bengali food images
import sorsheIlish from "../../../public/Delicious Items Img/sorshe-ilish.jpg";
import mutton from "../../../public/Delicious Items Img/mutton.jpg";
import prawn from "../../../public/Delicious Items Img/Prawn.jpg";
import shukto from "../../../public/Delicious Items Img/Shukto.jpg";
import koshaMangsho from "../../../public/Delicious Items Img/Patha.webp";
import bananaCurry from "../../../public/Delicious Items Img/banana Curry.jpg";
import aluBhorta from "../../../public/Delicious Items Img/AluBhorta.jpg";
import bananaLeaf from "../../../public/Delicious Items Img/Banana Leaf.png";
import dhokarDalna from "../../../public/Delicious Items Img/dhokarDalna.jpg";
import mishtiDoi from "../../../public/Delicious Items Img/Misti.avif";
import begunBhaja from "../../../public/Delicious Items Img/BegunBhaja.jpg";
import payesh from "../../../public/Delicious Items Img/Payesh.jpg";
import pithe from "../../../public/Delicious Items Img/pithe.jpg";
import YR from "../../../public/Delicious Items Img/yellow Rice.jpg";
import R from "../../../public/Delicious Items Img/Rasgulla.jpg";
import P from "../../../public/Delicious Items Img/P.jpg";
import Musur from "../../../public/Delicious Items Img/MusurDal.jpg";
import Luchi from "../../../public/Delicious Items Img/LuchiAlu.jpg";
import MB from "../../../public/Delicious Items Img/Mach-Bhat.jpg";
import fish from "../../../public/Delicious Items Img/Fish.jpg";
import katla from "../../../public/Delicious Items Img/katla.jpg";
import Sandesh from "../../../public/Delicious Items Img/Sandesh.jpg";
import ER from "../../../public/Delicious Items Img/EggRoll.avif";
import Df from "../../../public/Delicious Items Img/DoiFuchka.jpg";
import VR from "../../../public/Delicious Items Img/VR.jpg";

// Import Banner Marketing
import SeaFood from "../../../public/Delicious Items Img/ImgOne.png";
import SpiceVerse from "../../../public/Delicious Items Img/spiceverse.png";

const SuperDeliciousSecOne = () => {
  const foodItems = [
    {
      id: 1,
      name: "Mustard Hilsa Fish (Sorse Ilish)",
      image: sorsheIlish,
      count: "12 products",
    },
    {
      id: 2,
      name: "Bengali Mutton Curry",
      image: mutton,
      count: "10 products",
    },
    {
      id: 3,
      name: "Prawn Malai Curry",
      image: prawn,
      count: "15 products",
    },
    {
      id: 4,
      name: "Shukto (Traditional Mixed Veg)",
      image: shukto,
      count: "8 products",
    },
    {
      id: 5,
      name: "Kosha Mangsho",
      image: koshaMangsho,
      count: "20 products",
    },
    {
      id: 6,
      name: "Barramundi in Banana Leaf",
      image: bananaCurry,
      count: "14 products",
    },
    {
      id: 7,
      name: "Alu Bhorta",
      image: aluBhorta,
      count: "25 products",
    },
    {
      id: 8,
      name: "Banana Blossom Curry",
      image: bananaLeaf,
      count: "9 products",
    },
    {
      id: 9,
      name: "Dhokar Dalna",
      image: dhokarDalna,
      count: "11 products",
    },
    {
      id: 10,
      name: "Mishti Doi",
      image: mishtiDoi,
      count: "30 products",
    },
    {
      id: 11,
      name: "Begun Bhaja",
      image: begunBhaja,
      count: "22 products",
    },
    {
      id: 12,
      name: "Payesh",
      image: payesh,
      count: "12 products",
    },
    {
      id: 13,
      name: "Pithe",
      image: pithe,
      count: "7 products",
    },
    {
      id: 14,
      name: "Fragrant Yellow Pilaf",
      image: YR,
      count: "18 products",
    },
    {
      id: 15,
      name: "Rasgulla",
      image: R,
      count: "40 products",
    },
    {
      id: 16,
      name: "Potatoes with Poppy Seeds",
      image: P,
      count: "16 products",
    },
    {
      id: 17,
      name: "Maach & Bhat",
      image: MB,
      count: "14 products",
    },
    {
      id: 18,
      name: "Luchui & Alur-Dom",
      image: Luchi,
      count: "10 products",
    },
    {
      id: 19,
      name: "Fish Curry",
      image: fish,
      count: "9 products",
    },
    {
      id: 20,
      name: "Katla Kalia",
      image: katla,
      count: "13 products",
    },
    {
      id: 21,
      name: "Sandesh",
      image: Sandesh,
      count: "28 products",
    },
    {
      id: 22,
      name: "Egg Roll",
      image: ER,
      count: "50 products",
    },
    {
      id: 23,
      name: "Doi Fuchka",
      image: Df,
      count: "60 products",
    },
    {
      id: 24,
      name: "Mixed Vegetable",
      image: VR,
      count: "15 products",
    },
  ];

  return (
    <div className="px-4 sm:px-5 lg:px-4 py-8">
      <div className="bg-[#f5ecdd] rounded-lg p-6 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-black font-semibold p-2 merienda text-2xl sm:text-3xl">
            Super Delicious
          </h2>

          <div className="flex items-center gap-3">
            <button className="swiper-button-prev-custom group bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-[#ffcc00] hover:shadow-lg transition-all duration-300">
              <svg
                className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </button>

            <button className="swiper-button-next-custom group bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-[#ffcc00] hover:shadow-lg transition-all duration-300">
              <svg
                className="w-5 h-5 text-gray-700 group-hover:text-black transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          slidesPerGroup={2}
          loop={true}
          speed={600}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
            disabledClass: "opacity-30 cursor-not-allowed",
          }}
          breakpoints={{
            480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 16 },
            640: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 18 },
            768: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
            1024: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 22 },
            1280: { slidesPerView: 6, slidesPerGroup: 6, spaceBetween: 24 },
          }}
          className="!pb-2"
        >
          {foodItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#ffcc00]/50">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#ffcc00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative overflow-hidden h-36 md:h-40">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                <div className="p-4">
                  <h2 className="text-center text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                    {item.name}
                  </h2>
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-0.5 bg-[#ffcc00]"></div>
                  </div>
                  <div className="text-center">
                    <button className="relative bg-[#ffcc00] text-gray-900 font-bold py-2 px-6 rounded-lg text-sm shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group/btn">
                      <span className="relative z-10">{item.count}</span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 ">
            <div className=" flex-1 w-full h-auto object-cover group overflow-hidden rounded-xl md:rounded-2xl ">
              <img className="rounded-2xl group-hover:scale-102 duration-300 transition-all ease-in-out" src={SeaFood} alt="" />
            </div>
            <div className=" flex-1 w-full h-auto object-cover group overflow-hidden rounded-xl md:rounded-2xl ">
              <img className="rounded-2xl group-hover:scale-102 duration-300 transition-all ease-in-out" src={SpiceVerse} alt="" />
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperDeliciousSecOne;
