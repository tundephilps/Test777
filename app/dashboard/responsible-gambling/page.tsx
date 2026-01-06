"use client";
import React from "react";
import { useTranslations } from "next-intl";

const ResponsibleGamingPage = () => {
  const t = useTranslations("ResponsibleGaming");

  return (
    <main className="bg-[#081A26] mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-100 mb-6">{t("title")}</h1>

        <div className="space-y-4 mb-10 text-gray-100 leading-relaxed">
          <p>{t("intro1")}</p>
          <p>{t("intro2")}</p>
          <p>{t("intro3")}</p>
        </div>

        <h2 className="text-xl font-semibold text-red-500 mb-4">
          {t("guidelinesTitle")}
        </h2>

        <ul className="list-decimal list-inside space-y-3 text-gray-100 mb-8 ml-2">
          <li>{t("guidelines.item1")}</li>
          <li>{t("guidelines.item2")}</li>
          <li>{t("guidelines.item3")}</li>
          <li>{t("guidelines.item4")}</li>
          <li>{t("guidelines.item5")}</li>
        </ul>

        <p className="text-gray-100 leading-relaxed mb-6 italic border-l-4 border-red-600 pl-4">
          {t("assistanceIntro")}
        </p>

        <div className="grid gap-6">
          {["a", "b", "c"].map((key) => (
            <div
              key={key}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-xl"
            >
              <h3 className="font-semibold text-red-500 text-lg mb-2">
                {t(`options.${key}.title`)}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t(`options.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ResponsibleGamingPage;
