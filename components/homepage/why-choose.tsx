import Image from "next/image";
import US1 from "../../public/US1.png";
import US2 from "../../public/US2.png";
import US3 from "../../public/US3.png";

export default function WhyChooseUs() {
  return (
    <section className="text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-xl md:text-4xl font-semibold mb-2">
          Why Choose Us?
        </h2>
        <p className="text-[#58656e] mb-12">
          Great service, huge bonuses and a broad choice of games
        </p>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden bg-[#071a26] p-8 transition duration-300 hover:shadow-lg group">
            {/* Subtle top gradient */}
            <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex justify-center mb-6 relative z-10">
              <Image src={US1} alt="" />
            </div>
            <h3 className="text-base font-semibold mb-3 relative z-10">
              Multiple Currencies
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              Choose 1 of the 4 available currencies to play in and good news
              for crypto players, your cryptocurrency will be converted to play.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden bg-[#071a26] p-8 transition duration-300 hover:shadow-lg group">
            <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex justify-center mb-6 relative z-10">
              <Image src={US2} alt="" />
            </div>
            <h3 className="text-base font-semibold mb-3 relative z-10">
              Supporting you along the way
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              We pride ourselves to offer you the best customer support no
              matter what time, all year round. Our Support Team are
              professional and knowledgeable about all things casino.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl overflow-hidden bg-[#071a26] p-8 transition duration-300 hover:shadow-lg group">
            <div className="absolute top-0 left-0 w-full h-[20%]  bg-gradient-to-b from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="flex justify-center mb-6 relative z-10">
              <Image src={US3} alt="" />
            </div>
            <h3 className="text-base font-semibold mb-3 relative z-10">
              Trusted by all
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              We have put all measures in place to operate fairly and correctly
              when it comes to your winnings and the outcome of the games on
              offer so that you always get results that you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
