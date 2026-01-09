"use client";
import React, { useState } from "react";
import { FaUser, FaPencilAlt, FaChevronDown, FaCalendar } from "react-icons/fa";
import { useTranslations } from "next-intl";

const PersonalDetails = () => {
  const t = useTranslations("PersonalDetailsPage");

  const [selectedCountry, setSelectedCountry] = useState("Canada");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("01/01/1990");

  const countries = [
    { name: "Canada", flag: "🇨🇦" },
    { name: "United States", flag: "🇺🇸" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "France", flag: "🇫🇷" },
    { name: "Japan", flag: "🇯🇵" },
    { name: "Brazil", flag: "🇧🇷" },
  ];

  const selectedCountryData = countries.find((c) => c.name === selectedCountry);

  return (
    <div
      className="bg-[#0a1f2d] lg:p-6 p-2 mt-6"
      style={{ fontFamily: "var(--font-bounded)" }}
    >
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 mt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <FaUser className="text-white text-xl" />
            </div>
            <h1 className="text-white lg:text-2xl text-base font-bold">
              {t("title")}
            </h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-red-500 hover:text-red-400 transition-colors">
            <FaPencilAlt className="text-sm" />
            <span className="font-medium">{t("edit_button")}</span>
          </button>
        </div>

        {/* Form Fields */}
        <div className="">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-slate-400 text-sm mb-2">
                {t("first_name")}
              </label>
              <div className="bg-slate-900/50 rounded-lg px-4 py-3">
                <input
                  type="text"
                  className="w-full bg-transparent text-white outline-none"
                  placeholder={t("first_name_placeholder")}
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-slate-400 text-sm mb-2">
                {t("last_name")}
              </label>
              <div className="bg-slate-900/50 rounded-lg px-4 py-3">
                <input
                  type="text"
                  className="w-full bg-transparent text-white outline-none"
                  placeholder={t("last_name_placeholder")}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-slate-400 text-sm mb-2">
                {t("email")}
              </label>
              <div className="bg-slate-900/50 rounded-lg px-4 py-3">
                <input
                  type="email"
                  className="w-full bg-transparent text-white outline-none"
                  placeholder={t("email_placeholder")}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-slate-400 text-sm mb-2">
                {t("phone")}
              </label>
              <div className="bg-slate-900/50 rounded-lg px-4 py-3">
                <input
                  type="tel"
                  className="w-full bg-transparent text-white outline-none"
                  placeholder={t("phone_placeholder")}
                />
              </div>
            </div>

            {/* Country */}
            <div className="relative">
              <label className="block text-slate-400 text-sm mb-2">
                {t("country")}
              </label>
              <div
                className="bg-slate-900/50 rounded-lg px-4 py-2 flex items-center justify-between cursor-pointer hover:border-slate-600/50 transition-colors"
                onClick={() => setIsCountryOpen(!isCountryOpen)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedCountryData?.flag}</span>
                  <span className="text-white">{selectedCountry}</span>
                </div>
                <FaChevronDown
                  className={`text-slate-400 transition-transform ${
                    isCountryOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Dropdown Menu */}
              {isCountryOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 rounded-lg shadow-xl z-10 max-h-60 overflow-y-auto">
                  {countries.map((country) => (
                    <div
                      key={country.name}
                      className="px-4 py-3 hover:bg-slate-800 cursor-pointer transition-colors flex items-center gap-3"
                      onClick={() => {
                        setSelectedCountry(country.name);
                        setIsCountryOpen(false);
                      }}
                    >
                      <span className="text-2xl">{country.flag}</span>
                      <span className="text-white">{country.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-slate-400 text-sm mb-2">
                {t("date_of_birth")}
              </label>
              <div className="bg-slate-900/50 rounded-lg px-4 py-3 flex items-center justify-between">
                <input
                  type="date"
                  value=""
                  onChange={(e) => {
                    const date = new Date(e.target.value);
                    const formatted = date.toLocaleDateString("en-US", {
                      month: "2-digit",
                      day: "2-digit",
                      year: "numeric",
                    });
                    setDateOfBirth(formatted);
                  }}
                  className="w-full bg-transparent text-white outline-none cursor-pointer [color-scheme:dark]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
