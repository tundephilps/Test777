"use client";
import React from "react";
import { useTranslations } from "next-intl";
import {
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaCookie,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  const t = useTranslations("PrivacyPage");

  const sections = [
    { icon: <FaUserSecret className="text-2xl" />, key: "section1" },
    { icon: <FaShieldAlt className="text-2xl" />, key: "section2" },
    { icon: <FaCheckCircle className="text-2xl" />, key: "section3" },
    { icon: <FaCookie className="text-2xl" />, key: "section4" },
    { icon: <FaEnvelope className="text-2xl" />, key: "section5" },
    { icon: <FaLock className="text-2xl" />, key: "section6" },
  ];

  return (
    <div className="min-h-screen bg-[#081A26] lg:p-6 p-2">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <h1 className="text-white text-4xl font-bold">{t("title")}</h1>
          </div>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            {t("intro")}
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0 text-red-500">
                  {section.icon}
                </div>
                <h2 className="text-white text-2xl font-bold pt-2">
                  {t(`${section.key}.title`)}
                </h2>
              </div>
              <div className="pl-0 lg:pl-16">
                {t(`${section.key}.content`)
                  .split("\n\n")
                  .map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-slate-300 leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
