import Image from "next/image";
import ContactForm from "@/components/contact/contact-form";
import { getTranslations } from "next-intl/server";
import { IMAGES } from "@/lib/assets";

const ContactPage = async () => {
  const t = await getTranslations("ContactPage");

  return (
    <div>
      {/* Desktop Hero */}
      <div className="relative lg:flex hidden items-center">
        <Image
          src={IMAGES.Mask10}
          width={1000}
          height={500}
          alt="Hero"
          className="w-full h-[40vh]"
        />

        <div className="absolute text-white items-center left-7">
          <div className="flex flex-col flex-start justify-between h-full">
            <div className="">
              <p
                className="text-[3vh] font-semibold tracking-wider opacity-90"
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                {t("hero_brand")}
              </p>
              <p
                className="text-[7vh] font-semibold opacity-90 max-w-xl"
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                {t("hero_title")}
              </p>
              <div className="mb-2">
                <p className="text-base opacity-80 font-bounded font-bebas max-w-md">
                  {t("hero_subtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="relative flex lg:hidden items-center">
        <Image
          src={IMAGES.Mask11}
          width={1000}
          height={500}
          alt="Hero"
          className="w-full h-auto"
        />

        <div className="absolute top-12 text-white items-center inset-0 w-full">
          <div className="flex flex-col text-center h-full">
            <div className="">
              <p
                className="text-[3vh] font-semibold tracking-wider opacity-90"
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                {t("hero_brand")}
              </p>
              <p
                className="text-[7vh] font-semibold opacity-90 max-w-xl"
                style={{ fontFamily: "var(--font-bounded)" }}
              >
                {t("hero_title")}
              </p>
              <div className="mb-2">
                <p className="text-xs opacity-80 font-bounded font-bebas text-center mx-auto max-w-sm">
                  {t("hero_subtitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
