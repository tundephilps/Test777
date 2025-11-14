import Image from "next/image";
import React from "react";

import Mask3 from "../../public/Mask3.png";

import Mask from "../../public/Mask.png";
import PayMobile from "../../public/PayMobile.png";
import Visa from "../../public/Visa.png";

import Visa2 from "../../public/Visa2.png";

import Give from "../../public/Give.png";

const PaymentMethod = () => {
  return (
    <div className="my-6">
      <div className="relative lg:flex hidden  items-center">
        <div className="absolute inline-flex gap-4 left-4">
          <Image src={Give} alt="" />
          <div className="space-y-3">
            <p className="text-xl text-white"> Preferred Payment Methods </p>
            <p className="w-[60%] text-gray-500 text-[10px]">
              Enjoy fast and secure payments with multiple options. Choose
              crypto, cards, or bank transfers — whatever suits you best.
            </p>
          </div>
        </div>
        <Image src={Mask} className="w-full" alt="" />

        <Image src={Visa} className="absolute right-4 top" alt="" />
      </div>
      <div className="relative lg:hidden flex justify-center items-center">
        <Image src={Mask3} className="w-full  " alt="" />

        <div className="p-6 gap-8  space-y-6 absolute">
          <Image src={Give} className="mx-auto items h-28 w-34" alt="" />
          {/* Text */}
          <h2 className="text-xl text-white font-semibold mb-2 text-center">
            Preferred Payment Methods
          </h2>
          <p className="text-[12px] text-[#58656e] mb-5 text-center">
            Enjoy fast and secure payments with multiple options. Choose crypto,
            cards, or bank transfers — whatever suits you best.
          </p>

          <Image src={Visa2} className="mx-auto  h-20 w-3/4" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
