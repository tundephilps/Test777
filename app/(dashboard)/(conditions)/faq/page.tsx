"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQPage = () => {
  const t = useTranslations("FAQPage");
  const [openIndex, setOpenIndex] = useState(null);

  // Array representing the 11 FAQ items
  const faqIndices = Array.from({ length: 11 }, (_, i) => i + 1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#081826] lg:px-6 px-2 py-16">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/20">
              <FaQuestionCircle className="text-white text-3xl" />
            </div>
            <h1 className="text-white text-5xl font-bold">{t("title")}</h1>
          </div>
          <p className="text-slate-400 text-xl">{t("subtitle")}</p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqIndices.map((num, index) => (
            <div
              key={num}
              className="bg-slate-800/40 backdrop-blur-md rounded-xl border border-slate-700/50 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-700/30 transition-colors group"
              >
                <h3 className="text-white text-lg font-semibold text-left pr-4 group-hover:text-red-400 transition-colors">
                  {t(`q${num}`)}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FaChevronUp className="text-red-500 text-xl" />
                  ) : (
                    <FaChevronDown className="text-slate-400 text-xl" />
                  )}
                </div>
              </button>

              {/* Animated Answer Panel */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2">
                    <div className="border-t border-slate-700/50 pt-4">
                      <p className="text-slate-300 leading-relaxed text-lg">
                        {t(`a${num}`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Contact Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-500">support@Canada777.com</p>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
