import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IMAGES } from "@/lib/assets";

const NotFound = () => {
  return (
    <div className="bg-[#061621] flex items-center justify-center">
      <Link href="/">
        <Image
          src={IMAGES.Error}
          alt=""
          width={1000}
          height={1000}
          className="h-auto w-auto"
        />{" "}
      </Link>
    </div>
  );
};

export default NotFound;
