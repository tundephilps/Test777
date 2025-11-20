import Image from "next/image";
import React from "react";
import WhyChooseUs from "../../../components/homepage/why-choose";
import Sponsors from "../../../components/homepage/sponsors";
import FavHero from "../../../public/FavHero.png";
import FavGames from "../../../components/myfavorites/favgames";

const MyFavorite = () => {
  return (
    <div>
      <Image
        src={FavHero}
        height={1000}
        width={1000}
        className="w-full"
        alt=""
      />
      <FavGames />
      <WhyChooseUs />
      <Sponsors />
    </div>
  );
};

export default MyFavorite;
