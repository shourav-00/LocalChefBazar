import React, { useState, useRef, useEffect } from "react";
import logo from "../../public/CompanyLogo/Logo2.png";
import { Link, NavLink, useLocation } from "react-router";
import { HiBars3 } from "react-icons/hi2";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaUser,
  FaUserLarge,
} from "react-icons/fa6";
import useAuth from "../HOOKS/useAuth";
import toast from "react-hot-toast";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { TiCancelOutline } from "react-icons/ti";
import { LiaJediOrder } from "react-icons/lia";
import { FaExclamationTriangle } from "react-icons/fa";
import { img } from "framer-motion/client";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const location = useLocation();

  // Add these for popup
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [logOutPopUp, setLogOutPopUp] = useState(false);
  const popupRef = useRef(null);
  const profilePicRef = useRef(null);
  const logoutPopupRef = useRef(null);

  //LogOut popUp Close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        logOutPopUp &&
        logoutPopupRef.current &&
        !logoutPopupRef.current.contains(event.target)
      ) {
        setLogOutPopUp(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [logOutPopUp]);

  // Close popup on Profile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showProfilePopup &&
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        profilePicRef.current &&
        !profilePicRef.current.contains(event.target)
      ) {
        setShowProfilePopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfilePopup]);

  const handleLogPopUp = () => {
    setLogOutPopUp(!logOutPopUp);
  };

  const isHomePage = location.pathname === "/";
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successfully");

        // 🔑 RESET ALL POPUPS
        setShowProfilePopup(false);
        setLogOutPopUp(false);
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };

  console.log("Navbar user data:", user);
  console.log("User photoURL:", user?.photoURL);
  console.log("User displayName:", user?.displayName);

  return (
    <nav className={"z-50 shadow-xl h-20  bg-white"}>
      <div className="flex justify-between items-center gap-2 max-w-7xl mx-auto px-4 sm:px-5 lg:px-4">
        {/* Logo */}
        <div className="flex items-center ">
          <Link to="/">
            <img
              className={`${
                isHomePage ? "w-20 h-20  bg-black" : "h-20 w-20"
              } rounded-full`}
              src={logo}
              alt="Coming Soon"
            />
          </Link>

          <div className="font-bold ">
            <h2>LocalChef</h2>
            <h2 className="mt-[-3px]" text-center>
              Bazar
            </h2>
          </div>
        </div>
        {/* Middle */}
        <div className="hidden lg:flex  items-center gap-5 text-black font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#ffcc00] px-4 py-2 rounded-2xl"
                : "text-black font-semibold text-sm scale-105 mt-[2px] hover:bg-gray-300 transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-2xl"
            }
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            to="/meals"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#ffcc00] px-4 py-2 rounded-2xl"
                : "text-black font-semibold text-sm scale-105 mt-[2px] hover:bg-gray-300 transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-2xl"
            }
          >
            {" "}
            Meals
          </NavLink>

          <NavLink
            to="/ventors"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#ffcc00] px-4 py-2 rounded-2xl"
                : "text-black font-semibold text-sm scale-105 mt-[2px] hover:bg-gray-300 transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-2xl"
            }
          >
            {" "}
            Ventors
          </NavLink>

          <NavLink to=""></NavLink>
        </div>
        {/* Right */}
        <div className="hidden lg:block relative">
          <div className="flex items-center gap-2">
            {/* Profile picture - clickable */}
            <div
              ref={profilePicRef}
              className="cursor-pointer hover:scale-105 transition-transform relative"
              onClick={() => setShowProfilePopup(!showProfilePopup)}
            >
              {user ? (
                <img
                  className="border-2 border-yellow-300 rounded-full h-11 w-11 p-0 hover:border-yellow-500 transition-colors"
                  src={user?.photoURL}
                  alt="Profile"
                />
              ) : (
                <FaUser className="border-2 border-yellow-300 rounded-full h-8 w-8 p-1" />
              )}
            </div>

            {/* Profile Popup */}
            {showProfilePopup && user && (
              <div
                ref={popupRef}
                className="absolute top-14 right-0 mt-2 w-64 bg-[#ffcc00] border-4 border-gray-400 shadow-xl rounded-lg  z-50"
                style={{
                  animation: "fadeIn 0.2s ease-in-out",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
              >
                {/* User Info Section */}
                <div className="p-4 border-b">
                  <div className="flex items-center gap-3">
                    <img
                      className="border-2 border-yellow-300 rounded-full h-10 w-10"
                      src={user?.photoURL}
                      alt="Profile"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 truncate">
                        {user?.displayName || "User"}
                      </h3>
                      <p className="text-sm text-gray-500 truncate">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu Card for profile btn click*/}
                <div className="py-2 ">
                  <Link
                    to="/profile"
                    className="group relative flex items-center gap-3 px-4 py-3 text-gray-700 transition-all duration-300 hover:text-white overflow-hidden rounded-lg"
                  >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-lg transition-all duration-500"></div>

                    {/* Content */}
                    <FaUserLarge className="group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium relative z-10">
                      My Profile
                    </span>

                    {/* Animated Icon Effect */}
                    <div className="absolute -right-8 group-hover:right-4 transition-all duration-500 opacity-0 group-hover:opacity-100">
                      <FaArrowRight className="text-white" />
                    </div>
                  </Link>

                  <Link
                    to="/orders"
                    className="group relative flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg transition-all duration-300 hover:pl-5 hover:pr-3 overflow-hidden"
                    onClick={() => setShowProfilePopup(false)}
                  >
                    {/* Animated Progress Bar */}
                    <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                    {/* Subtle Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/0 via-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/30 group-hover:via-emerald-50/50 group-hover:to-emerald-50/30 transition-all duration-500 -z-10"></div>

                    {/* Rotating Icon */}
                    <LiaJediOrder className="text-gray-500 group-hover:text-emerald-600 transition-colors duration-300 group-hover:rotate-180" />

                    {/* Text Shift */}
                    <span className="font-medium text-gray-700 group-hover:text-emerald-800 group-hover:translate-x-1 transition-all duration-300">
                      My Orders
                    </span>

                    {/* Hidden Checkmark */}
                    <FaCheck className="ml-auto text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>

                  <div className="border-t my-2"></div>

                  <button
                    onClick={() => {
                      handleLogout();
                      setShowProfilePopup(false);
                    }}
                    className="group relative flex items-center gap-3 w-full px-4 py-3 text-left overflow-hidden rounded-lg  hover:border-red-500 transition-all duration-300"
                  >
                    {/* Pulsing Alert Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-50/0 via-red-50/0 to-red-50/0 group-hover:from-red-50/50 group-hover:via-red-100/30 group-hover:to-red-50/50 transition-all duration-500 -z-10"></div>

                    {/* Animated Warning Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-red-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>

                    {/* Pulsing Icon */}
                    <div className="relative">
                      <RiLogoutCircleRLine className="text-red-500 group-hover:text-red-600 group-hover:animate-pulse" />
                      <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-0 group-hover:opacity-30 -z-10"></div>
                    </div>

                    {/* Text with Glitch Effect */}
                    <span className="font-medium text-red-600 group-hover:text-red-700 relative">
                      <span className="relative z-10">Logout</span>
                      <span className="absolute inset-0 text-red-400 opacity-0 group-hover:opacity-100 group-hover:animate-glitch">
                        Logout
                      </span>
                    </span>

                    {/* Warning Symbol on Hover */}
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaExclamationTriangle className="text-red-500 animate-bounce" />
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Regular Logout Button (hidden when popup is shown) */}
            {user && !showProfilePopup ? (
              <button
                onClick={handleLogPopUp}
                className="bg-[#ffcc00] px-3 py-2 rounded-sm text-black font-semibold hover:bg-yellow-500 transition-colors cursor-pointer relative"
              >
                Logout
              </button>
            ) : (
              !user && (
                <Link to="/login">
                  <button className="bg-[#ffcc00] px-3 py-2 rounded-sm text-black font-semibold hover:bg-yellow-500 transition-colors cursor-pointer">
                    Login/Register
                  </button>
                </Link>
              )
            )}

            {user && logOutPopUp && (
              <div
                ref={logoutPopupRef}
                className="absolute top-14 right-0 mt-2 w-54 bg-[#ffcc00] shadow-xl rounded-lg border border-gray-200 z-50 py-2"
                style={{
                  animation: "fadeIn 0.2s ease-in-out",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
              >
                <h2 className="text-center my-2 text-black font-semibold">
                  Are you sure <span className="text-red-600 font-bold">?</span>{" "}
                </h2>
                <div className="border-t border-t-red-600 w-full"></div>
                <div
                  onClick={() => {
                    handleLogout();
                    setLogOutPopUp(false);
                  }}
                  className="group relative flex items-center justify-center gap-2 mt-2 py-2 rounded-lg cursor-pointer hover:bg-red-300 transition-all duration-300"
                >
                  {/* Left Accent Line */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-red-400 to-rose-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon with Smooth Transition */}
                  <RiLogoutCircleRLine className="text-red-600 group-hover:text-red-700 group-hover:scale-110 transition-all duration-300" />

                  {/* Text with Color Shift */}
                  <h2 className="font-bold text-red-700 group-hover:text-red-800 transition-colors duration-300">
                    Log Out
                  </h2>

                  {/* Subtle Arrow */}
                  <FaArrowRight className="text-red-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ml-1" />
                </div>
                <div className="border-t border-t-red-600 w-full mt-1"></div>
                <div
                  onClick={() => setLogOutPopUp(false)}
                  className="group relative flex items-center justify-center gap-2 py-2 rounded-lg cursor-pointer hover:bg-emerald-50 transition-all duration-300"
                >
                  {/* Left Accent Line */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-emerald-400 to-green-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Smooth Icon */}
                  <TiCancelOutline className="text-gray-600 group-hover:text-emerald-700 group-hover:scale-110 transition-all duration-300" />

                  {/* Text Transition */}
                  <h2 className="font-bold text-gray-700 group-hover:text-emerald-800 transition-colors duration-300 ">
                    Cancel
                  </h2>

                  {/* Subtle Arrow */}
                  <FaArrowLeft className="text-emerald-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 mr-1" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Responsive for Small Screen */}
        <div className="lg:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-5">
                <HiBars3 className="w-8 h-8 mt-[7px] text-[#ffcc00] font-bold" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-5"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="bg-gray-100 min-h-full w-70 p-3 flex flex-col">
                {/* Top section */}
                <div>
                  <div className="flex flex-col justify-center items-center pb-2 border-b-2 border-b-[#ffcc00]">
                    <Link to="/">
                      <img
                        className="w-20 h-20 rounded-full bg-[#ffcc00]"
                        src={logo}
                        alt="Coming Soon"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-3 mt-5 ml-5">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#ffcc00] px-4 py-2 rounded-2xl"
                          : "text-black font-semibold text-sm scale-105 mt-[2px] hover:bg-gray-300 transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-2xl"
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/meals"
                      className={({ isActive }) =>
                        isActive
                          ? "text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#ffcc00] px-4 py-2 rounded-2xl"
                          : "text-black font-semibold text-sm scale-105 mt-[2px] hover:bg-gray-300 transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-2xl"
                      }
                    >
                      Meals
                    </NavLink>
                    <NavLink
                      to="/ventors"
                      className={({ isActive }) =>
                        isActive
                          ? "text-black font-semibold text-sm scale-105 mt-[2px] transition-all ease-in-out duration-300 bg-[#ffcc00] px-4 py-2 rounded-2xl"
                          : "text-black font-semibold text-sm scale-105 mt-[2px] hover:bg-gray-300 transition-all ease-in-out duration-300 bg-gray-200 px-4 py-2 hover:bg-gray-300 rounded-2xl"
                      }
                    >
                      Ventors
                    </NavLink>
                  </div>
                </div>

                {/* Bottom section - pushes to end */}
                <div className="mt-auto">
                  <div className="flex flex-col justify-center items-end gap-3 p-3">
                    {user ? (
                      <div className="w-full">
                        <div className="cursor-pointer hover:scale-105 transition-transform flex justify-center mb-2">
                          <img
                            className="border-2 border-yellow-300 rounded-full h-12 w-12"
                            src={user?.photoURL}
                            alt="Profile"
                          />
                        </div>
                        <button
                          onClick={handleLogout}
                          className="btn bg-[#ffcc00] rounded-[12px] w-full mt-2"
                        >
                          Sign Out
                        </button>
                      </div>
                    ) : (
                      <div className="w-full">
                        <div className="cursor-pointer hover:scale-105 transition-transform flex justify-center mb-2">
                          <FaUser className="border-2 border-yellow-300 rounded-full h-10 w-10 p-1" />
                        </div>
                        <Link to="/login">
                          <button className="btn bg-[#ffcc00] rounded-[12px] w-full mt-2">
                            Sign In
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add this CSS for smooth animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
