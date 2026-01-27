import { IMAGES } from "@/lib/assets";
import Image from "next/image";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignupModal() {
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <>
      {/* Left Side - Bonus Info */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#081A26] p-4 flex-col justify-center items-center relative overflow-hidden">
        <div className="text-center mb-8">
          <p className="text-white/80 text-sm font-semibold mb-2">
            WELCOME BONUS
          </p>
          <h2 className="text-red-700 text-5xl font-bold mb-4">UP TO $8,000</h2>
          <p className="text-green-700 text-2xl font-bold">+ 600 Free Spins</p>
        </div>

        {/* Mascot Image Placeholder */}
        <div className="my-1 flex items-center justify-center">
          <Image
            src={IMAGES.Calf}
            alt=""
            className="h-auto w-full"
            width={1000}
            height={1000}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 w-full max-w-md mt-8">
          <div className="text-center">
            <div className="text-white/60 mb-1">🎮</div>
            <p className="text-white font-bold text-sm">10,000+</p>
            <p className="text-white/60 text-xs">games</p>
          </div>
          <div className="text-center">
            <div className="text-white/60 mb-1">🎁</div>
            <p className="text-white font-bold text-sm">Daily</p>
            <p className="text-white/60 text-xs">exclusive offers</p>
          </div>
          <div className="text-center">
            <div className="text-white/60 mb-1">⚡</div>
            <p className="text-white font-bold text-sm">Fast</p>
            <p className="text-white/60 text-xs">withdrawals</p>
          </div>
          <div className="text-center">
            <div className="text-white/60 mb-1">🎧</div>
            <p className="text-white font-bold text-sm">24/7</p>
            <p className="text-white/60 text-xs">Customer care</p>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 bg-slate-800/50 p-8 lg:p-12 flex flex-col justify-center overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-white text-3xl text-center font-bold mb-8">
            JOIN NOW
          </h2>

          {/* Form */}
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-slate-700/50 border  border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-100 focus:outline-none focus:border-red-700"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-100 focus:outline-none focus:border-red-700"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-700 hover:text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <select className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-700">
                <option>Singapore</option>
                <option>Malaysia</option>
                <option>Thailand</option>
              </select>

              <select className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-700">
                <option>$ USD</option>
                <option>€ EUR</option>
                <option>£ GBP</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <select className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-700">
                <option>SG +65</option>
                <option>MY +60</option>
                <option>TH +66</option>
              </select>

              <input
                type="tel"
                placeholder="Phone"
                className="bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-100 focus:outline-none focus:border-red-700"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 w-5 h-5 rounded accent-red-700"
              />
              <p className="text-white/80 text-sm">
                I am 18 years old and I accept the{" "}
                <a
                  href="#"
                  className="text-red-700 hover:text-red-300 underline"
                >
                  Privacy Policy
                </a>{" "}
                and and *
              </p>
            </div>

            {/* Join Button */}
            <button className="w-full bg-red-700 hover:bg-red-700 text-slate-100 font-bold text-lg py-4 rounded-xl transition-colors">
              JOIN NOW
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-slate-800/50 text-slate-100">
                  or use
                </span>
              </div>
            </div>

            {/* Google Sign In */}
            <button className="w-full bg-slate-700/50 hover:bg-slate-700 border border-slate-600 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-3">
              <FcGoogle className="text-2xl" />
              <span>Continue with Google</span>
            </button>

            {/* Sign In Link */}
            <p className="text-center text-white/60 text-sm mt-6">
              Already have an account?{" "}
              <button className="text-red-700 hover:text-red-300 font-semibold">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
