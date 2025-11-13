import Image from "next/image";
import Comp1 from "../../public/Comp1.png";
import Comp2 from "../../public/Comp2.png";
import Comp3 from "../../public/Comp3.png";
import Comp4 from "../../public/Comp4.png";

const logos = [
  {
    src: Comp1,
    alt: "Online Casinos",
  },
  {
    src: Comp2,
    alt: "Casinolandia",
  },
  {
    src: Comp3,
    alt: "Casinos In Canada",
  },
  {
    src: Comp4,
    alt: "Bonus Casino",
  },
];

export default function Sponsors() {
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
            className="object-contain h-12"
            priority
          />
        </div>
      ))}
    </div>
  );
}
