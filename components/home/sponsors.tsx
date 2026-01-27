import { IMAGES } from "@/lib/assets";
import Image from "next/image";

const logos = [
  {
    src: IMAGES.Comp1,
    alt: "Online Casinos",
  },
  {
    src: IMAGES.Comp2,
    alt: "Casinolandia",
  },
  {
    src: IMAGES.Comp3,
    alt: "Casinos In Canada",
  },
  {
    src: IMAGES.Comp4,
    alt: "Bonus Casino",
  },
];

const Sponsors = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6  pb-6 overflow-clip">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center bg-[#081a26] border border-[#112938] rounded-xl py-2 px-4 transition-transform hover:scale-105 shadow-md"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            height={5000}
            width={1000}
            className="object-contain w-auto h-12"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
