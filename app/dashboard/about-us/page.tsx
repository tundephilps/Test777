import React from "react";
import {
  FaDice,
  FaGamepad,
  FaGlobe,
  FaComments,
  FaAccusoft,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#081A26]">
      <div className=" mx-auto lg:px-6 px-2 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-slate-300 leading-relaxed">
          <p className="text-2xl font-bold">
            Welcome to the luckiest casino north of America!
          </p>
          <p className="text-lg">
            Canada777 is your best bet at getting an all-round game experience
            where luck is the name of the game.
          </p>

          <p className="text-lg">
            As one of the best online casinos, we have made it our mission to
            create a gaming site that offers you the perfect platform to try
            your luck at.
          </p>

          <p className="text-lg">
            Our bag of lucky charms is stacked with the best online games, in
            fact there is an incredible number of over 8000 games that have the
            potential of leading you on a lucky winning streak. What's more is
            that there are over 75 gaming providers who provide these games for
            your entertainment.
          </p>

          <p className="text-lg">
            So get lucky and explore the enormous variety of games that cater to
            a wide range of gaming tastes. Roll the lucky dice and more on table
            games, spin your way to the pot of gold on slots, and turn the
            tables into cash in live dealer games.
          </p>

          <p className="text-lg">
            Not only are we the best online casino for Canadian players,
            Canada777 allows players from around the world to try their luck
            here too and is available in 10 different languages.
          </p>

          <p className="text-lg">
            To cater to a world of players, we have made multiple payments
            methods available so that you can turn your luck into a buck in no
            time.
          </p>

          <p className="text-lg">
            We are lucky enough to have the best support team that is there for
            you 24/7 via Live Chat or email.
          </p>

          <p className="text-lg">
            So go ahead and browse the site for more information. Visit the FAQ
            section to get you started and then get a lucky break and register
            in a few quick steps and become a player at not only the luckiest,
            but best online casino around!
          </p>
        </div>

        {/* CTA Section */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-900 to-red-950 rounded-xl p-8 border border-red-800/50">
            <FaAccusoft className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h2 className="text-white text-3xl font-bold mb-4">
              Ready to Get Lucky?
            </h2>
            <p className="text-red-200 mb-6 max-w-2xl mx-auto">
              Join Canada777 today and experience the luckiest casino north of
              America. Register in just a few quick steps!
            </p>
            <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
              Register Now
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
