"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{ fontFamily: "var(--font-bounded)" }}
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Auth.png"
        alt="background"
        fill
        className="object-cover"
        priority
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full h-full flex justify-end">
        <div className="w-full md:w-1/2 flex items-center justify-center lg:p-4 p-2">
          <div className="w-full lg:max-w-md bg-black/20 backdrop-blur-xl  p-2 lg:p-8 rounded-xl border border-white/10 shadow-xl">
            {/* Logo */}
            <div className="flex items-center justify-center mb-6">
              <Image
                src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Logo.png"
                alt="Canada777"
                width={200}
                height={200}
                className="h-auto w-auto"
              />
            </div>

            {/* Header */}
            <h2 className="text-[#F80507] text-2xl text-center font-bold mb-6">
              Enter your verification code.
            </h2>

            {/* OTP Boxes */}
            <div className="flex justify-between gap-1 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  maxLength={1}
                  type="text"
                  className="w-12 h-12  rounded-md bg-white/10 text-white text-center text-xl border border-neutral-700 focus:border-red-500 outline-none"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleBackspace(e, index)}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                />
              ))}
            </div>

            {/* Verify Button */}
            <Link href="/changepassword">
              <button className="w-full cursor-pointer bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 transition text-white py-3 rounded-md font-semibold shadow-md">
                Verify
              </button>
            </Link>

            {/* Footer Links */}
            <div className="text-center text-gray-300 text-xs mt-4">
              <p>
                If you didn't receive a code{" "}
                <a href="#" className="text-red-500 hover:underline">
                  Resend code (60s)
                </a>
              </p>

              <div className="flex justify-between mt-3">
                <Link href="/login" className="text-red-500 hover:underline">
                  Use a different email
                </Link>
                <Link href="/login" className="text-red-500 hover:underline">
                  Back to log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
