import React from "react";
import regImg from "../../public/AuthImg/Registration.webp";
import { Link, NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../HOOKS/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import logo from "../../public/CompanyLogo/Logo.png";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { signUpUser, getRegisterUserInfo, loading, setUser } = useAuth();

  const handleReg = (data) => {
    console.log(data);
    const profileImg = data.image[0];
    //console.log("Image file:", profileImg);
    const toastId = toast.loading("Creating your account...", {
      style: {
        background: "#ffcc00",
        border: "1px solid white",
      },
    });

    signUpUser(data.Email, data.password).then(() => {
      const formData = new FormData();
      formData.append("image", profileImg);
      const img_Api_Url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_photo_host
      }`;
      axios.post(img_Api_Url, formData).then((res) => {
        //console.log('after img upload',res.data.data.url);
        //UPDATA USER PROFILE
        const userProfile = {
          displayName: data.Name,
          photoURL: res.data.data.url,
        };
        getRegisterUserInfo(userProfile)
          .then(() => {
            toast.dismiss(toastId);
            toast.success("Welcome to LocalChef Bazar!");
            navigate("/");
           
          })
          .catch((err)=>{
            toast.error('Ohhh,owwwww!The issue is-',err.message)
          });
      });
    });
  };
  return (
    <div className="bg-[#82ab9f] p-3 sm:p-5 md:p-5 lg:p-5 overflow-x-hidden  flex flex-col">
      <div className="max-w-7xl mx-auto min-h-screen">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 lg:gap-2 p-3 sm:p-5">
          {/* Form Section */}
          <div className="w-full lg:flex-1 order-2 lg:order-1 flex items-center justify-center">
            <div className="w-full max-w-sm mx-auto">
              <form
                onSubmit={handleSubmit(handleReg)}
                className="max-w-sm mx-auto"
              >
                {/* Name Field */}
                <div className="mb-5">
                  <label
                    name="name"
                    className="block mb-2.5 text-sm font-medium text-heading"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("Name", {
                      required: true,
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "Name cannot be more than 30 characters",
                      },
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name can contain only letters and spaces",
                      },
                    })}
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-0 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 block w-full px-3 py-2.5 shadow placeholder:text-body text-black font-bold"
                    placeholder="Enter Your Full Name"
                  />
                  {errors.Name?.type === "required" && (
                    <p className="text-red-600 text-xs font-semibold text-right">
                      Invalid Field
                    </p>
                  )}
                  {errors.Name && (
                    <p className="text-red-600 text-xs text-right font-semibold">
                      {errors.Name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-5">
                  <label
                    name="email"
                    className="block mb-2.5 text-sm font-medium text-heading"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    {...register("Email", {
                      required: true,
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-0 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 block w-full px-3 py-2.5 shadow placeholder:text-body text-black font-bold"
                    placeholder="Enter Your Email"
                  />

                  {errors.Email?.type === "required" && (
                    <p className="text-red-600 text-xs text-right font-semibold">
                      {errors.Email.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="mb-5">
                  <label
                    name="phone"
                    className="block mb-2.5 text-sm font-medium text-heading"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNumber", {
                      required: true,
                      minLength: {
                        value: 11,
                        message: "Phone number must be contain 11 digits",
                      },
                      maxLength: {
                        value: 11,
                        message: "Phone number must be contain 11 digits",
                      },
                    })}
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-0 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 block w-full px-3 py-2.5 shadow placeholder:text-body text-black font-bold"
                    placeholder="Enter Your Phone Number"
                  />

                  {errors?.phoneNumber && (
                    <p className="text-red-600 text-xs text-right font-semibold">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="mb-5">
                  <label
                    name="password"
                    className="block mb-2.5 text-xs font-medium text-heading"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d).+$/,
                        message:
                          "Must Imacontain 1 uppercase letter and 1 number",
                      },
                    })}
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-0 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-300 block w-full px-3 py-2.5 shadow placeholder:text-body text-black font-bold"
                    placeholder="Enter Your Password"
                  />
                  {errors.password && (
                    <p className="text-red-600 text-xs text-right">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/*  Image Field */}
                <div className="mb-5 w-full">
                  <label className="block mb-2.5 text-sm font-medium text-heading">
                    Image
                  </label>
                  <input
                    {...register("image", {
                      required: true,
                    })}
                    type="file"
                    className="file-input file-input-warning"
                    placeholder="Enter Your Image"
                  />
                  {errors.image && (
                    <p className="text-red-600 text-xs text-right">
                      'Invalid file'
                    </p>
                  )}
                </div>

                {/* Terms & Conditions */}
                <div className="flex items-start mb-5">
                  <label htmlFor="terms" className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border-2 border-yellow-300 rounded-xs bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      required
                    />
                    <p className="ms-2 text-sm font-medium text-heading select-none">
                      I agree with the{" "}
                      <a href="#" className="text-fg-brand hover:underline">
                        terms and conditions
                      </a>
                      .
                    </p>
                  </label>
                </div>

                {/* Login Link */}
                <div className="pt-2 md:pt-0 mb-5">
                  <p className="text-sm font-medium text-heading">
                    Already have an account?{" "}
                    <Link to="/login" className="inline-block">
                      <span className="border-b-2 border-b-gray-600 hover:border-b-yellow-300 transition-colors">
                        Login here
                      </span>
                    </Link>
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="text-yellow-300 flex items-center justify-center mt-2 font-bold bg-black rounded-sm box-border border border-transparent hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 shadow-xs leading-5 rounded-base text-sm w-full px-4 py-2.5 transition-colors"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:flex-1 order-1 lg:order-2 flex items-center justify-center lg:justify-end lg:items-start">
            <div className="text-center ">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2">
                Start Your Journey
              </h2>
              <p className="mb-2">
                Everything begins with a single step. Sign up today and take
                control of your progress.
              </p>

              <div className="w-full flex justify-center lg:justify-end">
                <img
                  className="max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] w-auto object-contain"
                  src={regImg}
                  alt="Registration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="border border-[#ffcc00] "></div>
      </div>
      <div className="max-w-7xl mx-auto mt-7">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <NavLink to="/">
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
export default Register;
