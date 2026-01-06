"use client";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("AboutPage");

  return (
    <div className="min-h-screen bg-[#081A26]">
      <div className="mx-auto lg:px-6 px-2 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">{t("title")}</h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-slate-300 leading-relaxed">
          <p className="text-2xl font-bold">{t("welcome")}</p>

          <p className="text-lg">{t("paragraph1")}</p>

          <p className="text-lg">{t("paragraph2")}</p>

          <p className="text-lg">{t("paragraph3")}</p>

          <p className="text-lg">{t("paragraph4")}</p>

          <p className="text-lg">{t("paragraph5")}</p>

          <p className="text-lg">{t("paragraph6")}</p>

          <p className="text-lg">{t("paragraph7")}</p>

          <p className="text-lg">{t("paragraph8")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
