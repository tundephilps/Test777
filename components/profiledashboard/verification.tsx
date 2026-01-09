"use client";
import React from "react";
import { useTranslations } from "next-intl";
import {
  FaShieldAlt,
  FaEnvelope,
  FaPhone,
  FaIdCard,
  FaCheckCircle,
  FaUpload,
} from "react-icons/fa";

const Verification = () => {
  const t = useTranslations("Verification");

  const verifications = [
    {
      icon: <FaEnvelope className="text-red-500 text-xl" />,
      title: t("emailTitle"),
      subtitle: "mdshawon6217@gmail.com",
      status: "verified",
    },
    {
      icon: <FaPhone className="text-red-500 text-xl" />,
      title: t("phoneTitle"),
      subtitle: "+8801962199009",
      status: "verified",
    },
    {
      icon: <FaIdCard className="text-red-500 text-xl" />,
      title: t("idTitle"),
      subtitle: "+8801962199009",
      status: "pending",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1f2d] mt-6 lg:p-6 p-2">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 lg:pt-0 pt-4">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <FaShieldAlt className="text-white text-xl" />
          </div>
          <h1 className="text-white lg:text-2xl text-base font-bold ">
            {t("mainTitle")}
          </h1>
        </div>

        {/* Verification Cards */}
        <div className="space-y-4">
          {verifications.map((item, index) => (
            <div key={index}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl lg:p-6 p-2 border border-slate-700/50 hover:border-slate-600/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="lg:w-12 lg:h-12 h-6 w-6 bg-slate-900/50 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white lg:text-lg text-base font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 lg:text-sm text-[10px]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {item.status === "verified" ? (
                    <div className="flex items-center gap-2 lg:px-4 px-2 py-2 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                      <FaCheckCircle className="text-sm" />
                      <span className="font-medium lg:text-sm text-[10px]">
                        {t("statusVerified")}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 lg:px-4 px-2 py-2 bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                      <span className="font-medium lg:text-sm text-[10px]">
                        {t("statusPending")}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Upload Document Button */}
              {item.status === "pending" && (
                <div className="mt-4">
                  <button className="w-full bg-[#f8c630] hover:bg-yellow-600 text-slate-900 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                    <FaUpload />
                    <span>{t("uploadBtn")}</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Verification;
