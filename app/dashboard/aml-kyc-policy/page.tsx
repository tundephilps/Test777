"use client";

import { useTranslations } from "next-intl";

const AMLKYCPolicy = () => {
  const t = useTranslations("AMLKYC");

  return (
    <div className="bg-[#081A26] mx-auto px-4 py-12 text-gray-500">
      <h1 className="text-3xl font-bold text-gray-100 mb-6">{t("title")}</h1>

      {/* 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          {t("section1.title")}
        </h2>
        <p className="mb-3">{t("section1.p1")}</p>
        <p className="mb-3">{t("section1.p2")}</p>
        <ul className="list-disc list-inside space-y-1">
          <li>{t("section1.list.item1")}</li>
          <li>{t("section1.list.item2")}</li>
          <li>{t("section1.list.item3")}</li>
        </ul>
      </section>

      {/* 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          {t("section2.title")}
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>{t("section2.list.item1")}</li>
          <li>{t("section2.list.item2")}</li>
          <li>{t("section2.list.item3")}</li>
          <li>{t("section2.list.item4")}</li>
          <li>{t("section2.list.item5")}</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          {t("section3.title")}
        </h2>

        <h3 className="font-semibold mb-2">{t("section3.sub1.title")}</h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>{t("section3.sub1.list.item1")}</li>
          <li>{t("section3.sub1.list.item2")}</li>
          <li>{t("section3.sub1.list.item3")}</li>
        </ul>

        <h3 className="font-semibold mb-2">{t("section3.sub2.title")}</h3>
        <ul className="list-disc list-inside mb-3 space-y-1">
          <li>{t("section3.sub2.list.item1")}</li>
          <li>{t("section3.sub2.list.item2")}</li>
          <li>{t("section3.sub2.list.item3")}</li>
        </ul>
        <p>{t("section3.sub2.note")}</p>
      </section>

      {/* 4–11 */}
      {Array.from({ length: 8 }, (_, i) => i + 4).map((n) => (
        <section key={n} className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">
            {t(`section${n}.title`)}
          </h2>
          <p>{t(`section${n}.content`)}</p>
        </section>
      ))}

      {/* 12 */}
      <section className="border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-3">
          {t("section12.title")}
        </h2>
        <p>
          <strong>{t("section12.approvedBy")}</strong>
        </p>
        <p>
          <strong>{t("section12.effectiveDate")}</strong>
        </p>
        <p>
          <strong>{t("section12.reviewDate")}</strong>
        </p>
      </section>
    </div>
  );
};

export default AMLKYCPolicy;
