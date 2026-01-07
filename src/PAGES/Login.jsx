import React from "react";

import loginImg from "../../public/AuthImg/Login.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../HOOKS/useAuth";
import toast from "react-hot-toast";
import logo from '../../public/CompanyLogo/Logo.png'

const Login = () => {
  const navigate=useNavigate();
  const location=useLocation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();
  const handleLogin = (data) => {
    signInUser(data.Email, data.password)
      .then(() => {
        toast.success('Logged In Successfully');
        navigate(location?.state || '/')

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-[#fffce8] p-5 overflow-x-hidden flex flex-col">
      <div className="max-w-7xl mx-auto min-h-screen">
        <div className="flex justify-center items-center gap-2 p-3 sm:p-5">
          <div className="flex-1">
            <form onSubmit={handleSubmit(handleLogin)} class="max-w-sm mx-auto">
              <div class="mb-5">
                <label
                  for="email-alternative"
                  class="block mb-2.5 text-sm font-medium text-heading"
                >
                  Your email
                </label>
                <input
                  type="email"
                  {...register("Email", {
                    required: true,
                  })}
                  class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-0 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 block w-full px-3 py-2.5 shadow placeholder:text-body text-black font-bold"
                  placeholder="Enter Your Email"
                />
                {errors.Email?.type === "required" && (
                  <p className="text-red-600 text-xs font-semibold text-right">
                    Invalid Field
                  </p>
                )}
              </div>
              <div class="mb-5">
                <label
                  for="password-alternative"
                  class="block mb-2.5 text-sm font-medium text-heading"
                >
                  Your password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password must contain 6 characters",
                    },
                  })}
                  class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-0 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 block w-full px-3 py-2.5 shadow placeholder:text-body text-black font-bold"
                  placeholder="Enter Your Password"
                />
                {errors?.password && (
                  <p className="text-red-600 text-xs font-semibold text-right">
                    Invalid Password
                  </p>
                )}
                {errors.password?.type === "required" && (
                  <p className="text-red-600 text-xs font-semibold text-right">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="pt-2 md:pt-0">
                <p className="text-sm font-medium text-heading">
                  Don't have an account?
                  <Link
                  state={location.state} 
                  to="/register">
                    <span className="border-b-2 hover:border-b-yellow-500">
                      Register
                    </span>
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                class="text-yellow-300 flex items-center mt-8 font-bold bg-black rounded-sm  box-border border border-transparent hover:bg-brand-strong focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-xs leading-5 rounded-base text-sm px-4 py-2  "
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex-1 items-center justify-center min-h-screen">
           <NavLink to='/'>
            <img className="" src={loginImg} alt="" />
            </NavLink> 
          </div>
        </div>
      </div>
      <div className="mt-5">
              <div className="border border-[#ffcc00] "></div>
            </div>
           <div className="max-w-7xl mx-auto mt-7">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <NavLink to='/'>
                        <img className="w-10 h-10 rounded-full" src={logo} alt="Logo" />
                  </NavLink>
                  
                </div>
                <div className="flex justify-center items-center gap-4">
                  <NavLink>Conditions of Use |</NavLink>
                  <NavLink>Privacy Notice |</NavLink>
                  <NavLink>Help |</NavLink>

                </div>
                <div className="text-center md:text-right">
                  <h2>© 2026, Localchef Bazar, Inc. or its affiliates</h2>
                </div>
              </div>
            </div>
    </div>
  );
};

export default Login;
