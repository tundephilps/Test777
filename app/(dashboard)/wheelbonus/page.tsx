import Sponsors from "@/components/home/sponsors";
import WhyChooseUs from "@/components/home/why-choose";
import { IMAGES } from "@/lib/assets";
import Image from "next/image";

const WheelBonus = () => {
  return (
    <div>
      <Image
        src={IMAGES.Wheel}
        height={1000}
        width={1000}
        className="w-full"
        alt=""
      />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default WheelBonus;
