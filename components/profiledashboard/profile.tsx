"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaChevronDown } from "react-icons/fa";

export default function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Enver",
    lastName: "Esguerra",
    email: "enverjesdc88@gmail.com",
    phone: "6396642511",
    dateOfBirth: "10-25-1990",
    gender: "Female",
    streetAddress1: "Canada",
    streetAddress2: "Canada",
    streetAddress3: "Canada",
    city: "Canada",
    postalCode: "1207",
    password: "••••••••••",
    selfExclusion: "",
    depositDuration: "-- Select Duration Limit --",
    depositAmount: "Total Deposit Amount",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (section: string) => {
    console.log(`Updating ${section}`, formData);
  };

  return (
    <div className="min-h-screen ">
      <div className="mx-auto space-y-6">
        {/* Personal Information Section */}
        <div className="bg-[#081a26] rounded-lg p-6 ">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-slate-400 text-xs mb-2">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-xs mb-2">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-slate-400 text-xs mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-400 text-xs mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-400 text-xs mb-2">
              Date of birth
            </label>
            <input
              type="text"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          <div className="mb-6">
            <label className="block text-slate-400 text-xs mb-2">Gender</label>
            <div className="relative">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
              >
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="bg-[#081a26] rounded-lg p-6 ">
          <div className="mb-4">
            <label className="block text-slate-400 text-xs mb-2">
              Street Address 1
            </label>
            <input
              type="text"
              name="streetAddress1"
              value={formData.streetAddress1}
              onChange={handleInputChange}
              className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-400 text-xs mb-2">
              Street Address 2
            </label>
            <input
              type="text"
              name="streetAddress2"
              value={formData.streetAddress2}
              onChange={handleInputChange}
              className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-400 text-xs mb-2">
              Street Address 3
            </label>
            <input
              type="text"
              name="streetAddress3"
              value={formData.streetAddress3}
              onChange={handleInputChange}
              className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-400 text-xs mb-2">City</label>
            <div className="relative">
              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
              >
                <option>Canada</option>
                <option>United States</option>
                <option>Mexico</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-slate-400 text-xs mb-2">
              Postal Code
            </label>
            <div className="relative">
              <select
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
              >
                <option>1207</option>
                <option>1208</option>
                <option>1209</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <button
            onClick={() => handleUpdate("address")}
            className="w-full  bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 cursor-pointer text-white font-medium py-3 rounded transition-colors"
          >
            Update
          </button>
        </div>

        {/* Password Section */}
        <div className="bg-[#081a26] backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
          <div className="mb-6">
            <label className="block text-slate-400 text-xs mb-2">
              Password (leave empty not to change)
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-90 cursor-pointer text-slate-400 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          <button
            onClick={() => handleUpdate("password")}
            className="w-full  bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 cursor-pointer text-white font-medium py-3 rounded transition-colors"
          >
            Update
          </button>
        </div>

        {/* Self Exclusion Section */}
        <div className="bg-[#081a26] backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
          <div className="mb-6">
            <label className="block text-slate-400 text-xs mb-2">
              Self Exclusion (Deactivate Account)
            </label>
            <div className="relative">
              <select
                name="selfExclusion"
                value={formData.selfExclusion}
                onChange={handleInputChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select option</option>
                <option>30 days</option>
                <option>90 days</option>
                <option>6 months</option>
                <option>1 year</option>
                <option>Permanent</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <button
            onClick={() => handleUpdate("selfExclusion")}
            className="w-full bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 cursor-pointer text-white font-medium py-3 rounded transition-colors"
          >
            Update
          </button>
        </div>

        {/* Deposit Limit Section */}
        <div className="bg-[#081a26] backdrop-blur-sm rounded-lg p-6 border border-slate-700/50">
          <div className="mb-4">
            <label className="block text-slate-400 text-xs mb-2">
              Deposit Limit
            </label>
            <div className="relative">
              <select
                name="depositDuration"
                value={formData.depositDuration}
                onChange={handleInputChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
              >
                <option>-- Select Duration Limit --</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-slate-400 text-xs mb-2">
              Deposit Limit
            </label>
            <div className="relative">
              <select
                name="depositAmount"
                value={formData.depositAmount}
                onChange={handleInputChange}
                className="w-full bg-slate-900/50 border border-slate-700 rounded px-3 py-2.5 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
              >
                <option>Total Deposit Amount</option>
                <option>$100</option>
                <option>$500</option>
                <option>$1,000</option>
                <option>$5,000</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <button
            onClick={() => handleUpdate("depositLimit")}
            className="w-full bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 cursor-pointer text-white font-medium py-3 rounded transition-colors"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
