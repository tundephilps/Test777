import { useTranslations } from "next-intl";
import Image from "next/image";
import { IMAGES } from "@/lib/assets";

const WhyChooseUs = () => {
  const t = useTranslations("HomePage");
  return (
    <section className="text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-xl md:text-4xl font-semibold mb-2">{t("why")}</h2>
        <p className="text-[#58656e] mb-12">{t("whysub")}</p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden bg-[#071a26] p-8 transition duration-300 hover:shadow-lg group">
            {/* Subtle top gradient */}
            <div className="absolute top-0 left-0 w-full h-[20%] bg-linear-to-b from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex justify-center mb-6 relative z-10">
              <Image
                src={IMAGES.US1}
                width={1000}
                height={300}
                className="h-auto w-auto"
                alt=""
              />
            </div>
            <h3 className="text-base font-semibold mb-3 relative z-10">
              {t("whytitle1")}{" "}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              {t("why1")}{" "}
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden bg-[#071a26] p-8 transition duration-300 hover:shadow-lg group">
            <div className="absolute top-0 left-0 w-full h-[20%] bg-linear-to-b from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex justify-center mb-6 relative z-10">
              <Image
                src={IMAGES.US2}
                width={1000}
                height={300}
                className="h-auto w-auto"
                alt=""
              />
            </div>
            <h3 className="text-base font-semibold mb-3 relative z-10">
              {t("whytitle2")}{" "}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              {t("why2")}{" "}
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl overflow-hidden bg-[#071a26] p-8 transition duration-300 hover:shadow-lg group">
            <div className="absolute top-0 left-0 w-full h-[20%]  bg-linear-to-b from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex justify-center mb-6 relative z-10">
              <Image
                src={IMAGES.US3}
                width={1000}
                height={300}
                className="h-auto w-auto"
                alt=""
              />
            </div>
            <h3 className="text-base font-semibold mb-3 relative z-10">
              {t("whytitle3")}{" "}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              {t("why3")}{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
