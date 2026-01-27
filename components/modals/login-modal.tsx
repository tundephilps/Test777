"use client";
import { login as loginAction } from "@/actions/auth/login";
import { useAuth } from "@/contexts/auth-context";
import { useFingerprint } from "@/contexts/FingerprintProvider";
import { useAction } from "@/hooks/use-action";
import { useToast } from "@/hooks/use-toast";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaTelegramPlane,
} from "react-icons/fa";
import { ErrorText } from "../ui/error-text";

interface LoginModalProps {
  onClose?: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const toast = useToast();
  const { fingerprint } = useFingerprint();

  console.log("fingerprint", fingerprint);

  const {
    execute: executeLogin,
    isLoading: loading,
    fieldErrors,
  } = useAction(loginAction, {
    onSuccess: (data) => {
      login(data.user);

      if (typeof window !== "undefined") {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("user_data", JSON.stringify(data.user));
      }

      toast.success("Login successful!");
      // Reset form
      setEmail("");
      setPassword("");

      // Close modal
      if (onClose) {
        onClose();
      }
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.dismiss();

    executeLogin({
      email,
      password,
      fingerprint: fingerprint || "asdfaadsfaffasdf",
    });
  };

  return (
    <div className="flex items-center justify-center w-full  bg-[#081A26] lg:px-4 px-0 py-8 ">
      <div className=" bg-transparent text-white min-w-[80vw] lg:min-w-xl ">
        {/* Title */}
        <Image
          src={IMAGES.Logo}
          alt="Logo"
          width={100}
          height={25}
          className="object-contain mx-auto h-8 sm:h-10 md:h-12 w-auto"
        />
        <h1 className="text-center text-xl font-bold text-red-500 mb-8">
          Welcome, Captain. Let’s <br /> start the Spin!
        </h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className={`w-full px-4 py-3 rounded-lg bg-[#0b1f2b] placeholder-gray-500 border ${
              fieldErrors?.email ? "border-red-500" : "border-transparent"
            } focus:border-red-600 outline-none transition`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <ErrorText message={fieldErrors?.email?.[0]} />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`w-full px-4 py-3 rounded-lg bg-[#0b1f2b] placeholder-gray-500 border ${
                fieldErrors?.password ? "border-red-500" : "border-transparent"
              } focus:border-red-600 outline-none transition`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>
          <ErrorText message={fieldErrors?.password?.[0]} />
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-linear-to-b from-[#f80507] to-[#860001] py-3 rounded-lg font-semibold text-white mt-2 hover:opacity-90 transition disabled:opacity-60"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Links */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Forget password
          <span className="text-red-500 cursor-pointer ml-1 hover:underline">
            Click Here.
          </span>
        </p>

        <p className="text-center text-gray-400 text-sm mt-1">
          New here?
          <span className="text-red-500 cursor-pointer ml-1 hover:underline">
            Create an account
          </span>
        </p>

        {/* Social Buttons */}
        <div className="flex justify-center items-center gap-6 mt-6">
          <FaTelegramPlane className="text-[#2ca3e1] hover:scale-110 cursor-pointer text-2xl" />
          <FaGoogle className="text-white hover:scale-110 cursor-pointer text-2xl" />
          <FaFacebookF className="text-[#1877f2] hover:scale-110 cursor-pointer text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
