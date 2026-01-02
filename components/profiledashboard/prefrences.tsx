import React from "react";
import { FaLanguage } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import Image from "next/image";
import { IMAGES } from "@/lib/assets";

const Preferences = () => {
  return (
    <div className="w-full mx-auto py-6 bg-[#0A1F2D] px-2 rounded-md mt-6  text-white">
      <div className="inline-flex items-center gap-2 mb-6">
        <Image
          src={IMAGES.Pref}
          alt=""
          width={1000}
          height={1000}
          className="h-auto w-auto"
        />
        <h2 className="text-lg font-semibold ">Preferences</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Language */}
        {/* <div className="flex items-center justify-between bg-[#06111D] p-4 rounded-xl shadow-md">
          <div className="flex items-center gap-3">
            <FaLanguage className="text-xl" />
            <span>Language</span>
          </div>
          <select className="bg-transparent outline-none">
            <option className="text-black">English</option>
            <option className="text-black">French</option>
          </select>
        </div> */}

        {/* Currency */}
        <div className="flex items-center justify-between bg-[#081A26] p-4 rounded-xl shadow-md">
          <div className="flex items-center gap-3">
            <FaDollarSign className="text-xl" />
            <span>Currency</span>
          </div>
          <select className="bg-transparent outline-none">
            <option className="text-black">USD</option>
            <option className="text-black">EUR</option>
          </select>
        </div>

        {/* Dark Mode */}
        {/* <ToggleItem icon={<FaMoon />} label="Dark Mode" defaultOn={true} /> */}

        {/* Push Notifications */}
        <ToggleItem
          icon={<FaBell />}
          label="Push Notifications"
          defaultOn={true}
        />

        {/* Email Notifications */}
        <ToggleItem
          icon={<FaEnvelope />}
          label="Email Notifications"
          defaultOn={true}
        />

        {/* Sound Effects */}
        <ToggleItem
          icon={<FaVolumeUp />}
          label="Sound Effects"
          defaultOn={false}
        />
      </div>
    </div>
  );
};

export default Preferences;

function ToggleItem({ icon, label, defaultOn }) {
  return (
    <div className="flex items-center justify-between bg-[#081A26] p-4 rounded-xl shadow-md">
      <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>
        <span>{label}</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          defaultChecked={defaultOn}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-red-700 transition"></div>
        <div className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
      </label>
    </div>
  );
}
