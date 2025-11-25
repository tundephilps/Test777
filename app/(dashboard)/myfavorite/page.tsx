import Image from "next/image";
import React from "react";
import WhyChooseUs from "../../../components/homepage/why-choose";
import Sponsors from "../../../components/homepage/sponsors";
import FavGames from "../../../components/myfavorites/favgames";

const MyFavorite = () => {
  return (
    <div>
      <Image
        src="https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/FavHero.png"
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
