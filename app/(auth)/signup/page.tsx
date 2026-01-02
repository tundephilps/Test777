"use client";
import Image from "next/image";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { IMAGES } from "@/lib/assets";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-screen relative overflow-y-auto lg:py-0 py-12">
      {/* Background */}
      <Image
        src={IMAGES.Auth}
        alt="background"
        fill
        priority
        className="object-cover"
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex justify-end text-xs">
        <div className="w-full md:w-1/2 flex items-center justify-center px-4">
          <div className="w-full max-w-2xl bg-black/20 backdrop-blur-xl lg:p-8 p-2 rounded-xl border border-white/10 shadow-2xl">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <Image
                src={IMAGES.Logo}
                alt="Canada777"
                width={180}
                height={60}
                className="h-auto w-auto"
              />
            </div>

            {/* Title */}
            {/* <h2 className="text-red-600 text-2xl font-bold text-center mb-8">
              Join and Try out multiple
              <br />
              Platform
            </h2> */}

            {/* Grid Form */}
            <form className="space-y-4">
              {/* Username + Password */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white">Username *</label>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="w-full bg-white/10 text-white placeholder-gray-300 p-3 rounded-md border border-neutral-700 focus:border-red-500 outline-none"
                  />
                </div>

                <div className="relative">
                  <label className="text-sm text-white">Password *</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full bg-white/10 text-white placeholder-gray-300 p-3 rounded-md border border-neutral-700 focus:border-red-500 outline-none pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-10 text-gray-300"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm text-white">Email *</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full bg-white/10 text-white placeholder-gray-300 p-3 rounded-md border border-neutral-700 focus:border-red-500 outline-none"
                />
              </div>

              {/* First + Last Name */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-white">First Name *</label>
                  <input
                    type="text"
                    placeholder="Md"
                    className="w-full bg-white/10 text-white placeholder-gray-300 p-3 rounded-md border border-neutral-700 focus:border-red-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-white">Last Name *</label>
                  <input
                    type="text"
                    placeholder="Shawon"
                    className="w-full bg-white/10 text-white placeholder-gray-300 p-3 rounded-md border border-neutral-700 focus:border-red-500 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-white">Date of Birth *</label>
                  <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    className="w-full bg-white/10 text-white placeholder-gray-300 p-3 rounded-md border border-neutral-700 focus:border-red-500 outline-none"
                  />
                </div>
              </div>

              {/* DOB + Phone */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-white">Phone Number *</label>
                  <input
                    type="text"
                    placeholder="+8801926299009"
                    className="w-full bg-white/10 text-white placeholder-gray-300 p-3 rounded-md border border-neutral-700 focus:border-red-500 outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-white">
                    Referred By (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="w-full bg-white/10 text-white placeholder-gray-300 p-3 rounded-md border border-neutral-700 focus:border-red-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-white">Gender *</label>
                  <select className="w-full bg-white/10 text-white p-3 rounded-md border border-neutral-700 focus:border-red-500 outline-none">
                    <option className="text-black">Select</option>
                    <option className="text-black">Male</option>
                    <option className="text-black">Female</option>
                    <option className="text-black">Other</option>
                  </select>
                </div>
              </div>

              {/* Referred + Gender */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4"></div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-3 text-gray-300 text-sm">
                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    By continuing, you agree to the{" "}
                    <a href="#" className="text-red-500 underline">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-red-500 underline">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                <label className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    You confirm you are 18+ (or of legal age in your
                    jurisdiction).
                  </span>
                </label>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-b from-red-600 to-red-900 hover:opacity-90 cursor-pointer transition text-white font-semibold py-3 rounded-lg mt-2"
              >
                Signup
              </button>

              {/* Footer link */}
              <p className="text-center text-gray-300 text-sm mt-4">
                Already have an account?{" "}
                <Link href="/login" className="text-red-500 underline">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
