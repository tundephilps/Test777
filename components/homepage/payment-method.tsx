import Image from "next/image";
const PaymentMethod = () => {
  return (
    <div className="my-6">
      <div className="relative lg:flex hidden  items-center">
        <div className="absolute inline-flex gap-4 left-4">
          <Image
            src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Give.png"
            width={1000}
            height={300}
            className="h-auto w-auto"
            alt=""
          />
          <div className="space-y-3">
            <p className="text-xl text-white"> Preferred Payment Methods </p>
            <p className="w-[60%] text-gray-500 text-[10px]">
              Enjoy fast and secure payments with multiple options. Choose
              crypto, cards, or bank transfers — whatever suits you best.
            </p>
          </div>
        </div>
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Mask.png"
          width={3000}
          height={300}
          className="h-auto w-full"
          alt=""
        />

        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Visa.png"
          width={3000}
          height={300}
          className="absolute h-auto w-auto right-4 top"
          alt=""
        />
      </div>
      <div className="relative lg:hidden flex justify-center items-center">
        <Image
          src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Mask3.png"
          width={3000}
          height={300}
          className="h-auto w-full"
          alt=""
        />

        <div className="p-6 gap-8  space-y-6 absolute">
          <Image
            src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Give.png"
            width={3000}
            height={300}
            className="mx-auto items h-28 w-34"
            alt=""
          />
          {/* Text */}
          <h2 className="text-xl text-white font-semibold mb-2 text-center">
            Preferred Payment Methods
          </h2>
          <p className="text-[12px] text-[#58656e] mb-5 text-center">
            Enjoy fast and secure payments with multiple options. Choose crypto,
            cards, or bank transfers — whatever suits you best.
          </p>

          <Image
            src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Visa2.png"
            width={3000}
            height={300}
            className="mx-auto  h-20 w-3/4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
