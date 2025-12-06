import Image from "next/image";

export default function PromotionsPage() {
  const topPromos = [
    {
      img: "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Promo1.png",
      title: "Welcome Pack 620% + 400 FS.",
    },
    {
      img: "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Promo2.png",
      title: "Daily Cashback up to 30%!",
    },
    {
      img: "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Promo3.png",
      title: "Claim Free Spins & Bonus Cash",
    },
    {
      img: "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Promo4.png",
      title: "Win a Brand-New Audi A3 2026!",
    },
  ];

  const depositBonuses = [
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus11.png",
      title: "1st bonus - 200% up to 1,000.00 and 100 Free Spins",
      description:
        "Start strong with a 200% welcome match + 100 FREE SPINS on your first deposit. Wager x35",
    },
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus22.png",
      title: "2nd bonus - 100% up to 1,500.00 and 100 Free Spins",
      description:
        "Take your next step with a 100% match bonus + 100 FREE SPINS on your second deposit. Wager x35",
    },
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus33.png",
      title: "3rd bonus - 100% up to 1,500.00 and 100 Free Spins",
      description:
        "Boost your play with a 100% match bonus + 100 FREE SPINS on your 3rd deposit. Wager x35",
    },
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus44.png",
      title: "4th bonus - 150% up to 2,000.00 and 200 Free Spins",
      description:
        "Finish strong with a huge 150% bonus + 200 FREE SPINS. Wager x35",
    },
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus55.png",
      title: "4th bonus - 150% up to 2,000.00 and 200 Free Spins",
      description:
        "Finish strong with a huge 150% bonus + 200 FREE SPINS. Wager x35",
    },
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus66.png",
      title: "4th bonus - 150% up to 2,000.00 and 200 Free Spins",
      description:
        "Finish strong with a huge 150% bonus + 200 FREE SPINS. Wager x35",
    },
    {
      image:
        "https://raw.githubusercontent.com/affiliateslots/frontend-cdn/main/images/Bonus77.png",
      title: "4th bonus - 150% up to 2,000.00 and 200 Free Spins",
      description:
        "Finish strong with a huge 150% bonus + 200 FREE SPINS. Wager x35",
    },
  ];

  return (
    <div className="w-full text-white p-6 space-y-10">
      <span className="text-[16px]  bg-gradient-to-b from-[#f80507] to-[#860001] hover:opacity-90 items-center justify-center cursor-pointer rounded-md flex mt-6 mx-auto text-base font-bold text-[#ffffff] px-8 py-3  text-center">
        Promotions
      </span>

      {/* Top Promotions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {topPromos.map((promo, i) => (
          <div key={i}>
            <Image
              src={promo.img}
              alt={promo.title}
              width={1000}
              height={1000}
              className="h-auto w-full object-contain cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/50"
            />
          </div>
        ))}
      </div>

      {/* Deposit Bonuses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {depositBonuses.map((bonus, i) => (
          <div
            key={i}
            className="bg-[#081A26] rounded-2xl shadow-lg overflow-hidden"
          >
            <Image
              src={bonus.image}
              height={1000}
              width={1000}
              className="h-auto w-full object-cover"
              alt={bonus.title}
              priority={i === 0}
            />

            <div
              className="p-4 space-y-2.5"
              style={{ fontFamily: "var(--font-bounded)" }}
            >
              <p className="text-xl">{bonus.title}</p>

              <p className="text-xs font-bold text-[#58656E]">
                {bonus.description}
              </p>

              <div className="inline-flex gap-2 w-full">
                <button className="w-full text-xs bg-[#0C2738] hover:bg-slate-500 text-white py-2 rounded-lg">
                  Read More
                </button>
                <button className="w-full text-xs bg-red-600 hover:bg-red-500 py-2 rounded-lg">
                  Claim Bonus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
