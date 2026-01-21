import { IMAGES } from "@/lib/assets";
import Image from "next/image";

export const HeaderLogo = () => {
  return (
    <div className="flex items-center space-x-3 sm:space-x-6 md:space-x-[100px] lg:space-x-[200px]">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src={IMAGES.Logo}
          alt="Logo"
          width={100}
          height={25}
          className="object-contain h-8 sm:h-10 md:h-12 w-auto"
        />
      </div>

      {/* Rewards - Hidden on mobile */}
      <div className="hidden md:block">
        <Image
          src={IMAGES.Rewards}
          width={1000}
          height={1000}
          className="h-6 md:h-8 w-auto"
          alt="Rewards"
        />
      </div>
    </div>
  );
};
