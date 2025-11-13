import Image from "next/image";
import React from "react";
import Mask from "../../public/Mask.png";
import Visa from "../../public/Visa.png";

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
    </div>
  );
};

export default PaymentMethod;
