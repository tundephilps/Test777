import Image from "next/image";
import WhyChooseUs from "@/components/homepage/why-choose";
import Sponsors from "@/components/homepage/sponsors";
import Wheel from "@/public/Wheel.png";

const WheelBonus = () => {
  return (
    <div>
      <Image src={Wheel} height={1000} width={1000} className="w-full" alt="" />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default WheelBonus;
