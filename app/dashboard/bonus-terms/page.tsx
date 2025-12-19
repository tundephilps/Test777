import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function BonusTerms() {
  const welcomeBonusDeposits = [
    {
      deposit: "1st Deposit",
      bonus: "200% Bonus up to $1,000 + 100 Free spins",
      code: "SPINME 1",
    },
    {
      deposit: "2nd Deposit",
      bonus: "100% Bonus up to $1,000 + 100 Free spins",
      code: "SPINME 2",
    },
    {
      deposit: "3rd Deposit",
      bonus: "100% Bonus up to $2,000 + 100 Free spins",
      code: "SPINME 3",
    },
    {
      deposit: "4th Deposit",
      bonus: "25% Bonus up to $4,000 + 100 Free spins",
      code: "SPINME 4",
    },
  ];

  const gameContributions = [
    {
      percentage: "100%",
      games: "All Slots, Keno, Scratch Cards (Re spins contribute 10%)",
    },
    { percentage: "60%", games: "NetEnt & Red Tiger slots" },
    {
      percentage: "10%",
      games: "Roulette, Poker Tables, Video/Power Poker, Blackjack, Casino War",
    },
    {
      percentage: "2%",
      games: "Classic Blackjack, All Aces, Jacks or Better Video Poker",
    },
    {
      percentage: "0%",
      games: "Baccarat, Craps, Sic Bot, Red Dog, Progressive Jackpots",
    },
  ];

  const excludedGames = [
    "Saucify",
    "Blueprint",
    "Betsoft",
    "Boongo",
    "Endorphina",
    "Fazi",
    "Gada",
    "Habanero",
    "Yggdrasil +",
    "Multimi",
    "Pragmatic Play",
    "pragmatic8",
    "Quickspin",
    "Spinomenal",
    "TamasSoft",
    "intouch games",
    "Thunderkick",
    "Yandain",
    "Fire",
    "Evolution",
    "Newport Gaming",
    "Yggdrasil",
    "Wazdan",
    "Nsoft",
    "Amatic",
    "Merkur",
    "Microgaming Slots",
    "Netent",
    "PlayNgo",
    "playngoameric",
    "7777",
    "Apollo",
    "intouch games",
    "Thunderkick",
    "Habanero",
    "Betsoft",
    "Spinomenal",
    "blue-lion",
    "onlyplay",
    "pushgaming",
    "reelplay",
    "netdbet",
    "netdgplay",
    "holybet",
    "DreamTech",
    "metecsot",
    "Polar and Some",
    "rollspaly",
    "linkGaming",
    "ConceptGaming",
    "BgamestotSides",
    "PixielGames",
    "TechGaming",
    "Boomine Games",
    "Pigsott",
    "NextGame",
    "RPG SLOTS",
    "Popkslot",
    "Red Tiger",
    "No Limit City",
    "One Time Gaming",
    "viGames",
    "Nountaboy",
    "Reipstt",
    "Salimek",
    "Saucify",
    "Blueprint",
    "Boongo",
    "Endorphina",
    "Fazi",
    "Gada",
    "Yggdrasil +",
    "Multimi",
    "Pragmatic Play",
    "pragmatic8",
    "Quickspin",
    "TamasSoft",
    "Yandain",
    "Fire",
    "Evolution",
    "Newport Gaming",
    "Yggdrasil",
    "Wazdan",
    "Nsoft",
    "Amatic",
    "Merkur",
    "Microgaming Slots",
    "Netent",
    "Reel Steal",
    "Vikings",
    "Jack Hammer 2: Fishy Business",
    "Lucky Angler",
    "Dead or Alive 2",
    "Dead or Alive",
    "Victorious",
    "Victorious MAX",
    "Lost Relics",
    "Serengeti Kings",
    "Secret of the Stones MAX",
    "Dead or Alive 2 Feature Buy",
    "French Roulette",
    "The Reel Steal",
    "Victorious Max",
    "Jack Hammer 2",
    "Wilderland",
    "Reel Rush 2",
    "Street Fighter II: The World Warrior Slot",
    "Secret of the Stones",
    "Robin Hood: Shifting Riches",
    "The Wish Master",
    "Rome: The Golden Age",
    "Dead or Alive Mobile",
    "Dead or Alive 2 Mobile",
    "Dead or Alive 2 Feature Buy Mobile",
    "Rome: The Golden Age Mobile",
    "Serengeti Kings Mobile",
    "Street Fighter II: The World Warrior Slot Mobile",
    "Victorious Mobile",
    "French Roulette Mobile",
    "Wilderland Mobile",
    "Vikings Video Slot Mobile",
    "Secret of the Stones Mobile",
    "Reel Rush 2 Mobile",
    "Lost Relics Mobile",
    "Jack Hammer 2: Fishy Business Mobile",
    "Vikings Video Slot",
    "The Reel Steal Mobile",
    "The Wish Master Mobile",
    "Robin Hood: Shifting Riches Mobile",
    "Lost Relics 2",
    "Lost Relics 2 Mobile",
    "Lucky Angler: A Snowy Catch Mobile",
    "Lucky Angler: A Snowy Catch",
    "Black Jack 3 hands",
  ];

  const excludedGamesList = [
    "Fishin Frenzy Megaways",
    "Hammer 2: Fishy Business",
    "Lucky angler Dead or Alive 3",
    "Dead or Alive, Victorious",
    "MotorHead MAX",
    "Lost Relics",
    "Swingers Royal",
    "Secrets of the Stones MAX",
    "Dead or Alive 2",
    "Feature Buy Midas",
    "Dead or Alive 2: Feature Buy",
    "Midas Golden Touch: Feature Buy",
    "Dead or Alive Mobile",
    "Dead or Alive 2 Mobile",
    "Dead or Alive 2 Feature Buy Mobile",
    "Spin It: The Golden Barrel",
    "Viking Runecraft",
    "Da Vincis Treasure",
    "Lucha Legends",
    "Archangels: Salvation",
    "Coins of Fortune",
  ];

  return (
    <div
      className="min-h-screen  p-6"
      style={{ fontFamily: "var(--font-bounded)" }}
    >
      <div className=" mx-auto space-y-8">
        {/* 1. Welcome Bonus Rules */}
        <section className="bg-[#081A26] backdrop-blur-sm rounded-lg border border-slate-800/50 p-6">
          <h2 className="text-white text-xl font-bold mb-4">
            1. Welcome Bonus Rules
          </h2>

          <p className="text-slate-400 text-sm mb-4">
            • The Welcome Package is worth up to $8,000 + 400 Free Spins.
          </p>

          <div className="space-y-2 mb-4">
            {welcomeBonusDeposits.map((item, index) => (
              <div key={index} className="text-sm">
                <span className="text-slate-400">• {item.deposit}: </span>
                <span className="text-slate-300">{item.bonus} </span>
                <span className="text-red-500 font-semibold">{item.code}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-400 text-sm mb-2">
            • Bonus must be wagered 35x before withdrawal is allowed, the
            relevant promo code must be used upon making a deposit.
          </p>
          <p className="text-slate-400 text-sm mb-2">
            • All bonuses are limited to one per player / household / IP /
            device.
          </p>
          <p className="text-slate-400 text-sm">
            • Withdrawing from your account before you reach your desired, any
            remaining balance is forfeited at management's discretion.
          </p>
        </section>

        {/* 2. Wagering Requirements */}
        <section className="bg-[#081A26] backdrop-blur-sm rounded-lg border border-slate-800/50 p-6">
          <h2 className="text-white text-xl font-bold mb-4">
            2. Wagering Requirements
          </h2>

          <p className="text-slate-400 text-sm mb-2">
            • All bonuses carry a 30x wagering requirement on deposit + bonus.
          </p>
          <p className="text-slate-400 text-sm mb-2">
            • Example: If you deposit $100 and receive a $100 bonus, you must
            wager $200 x 35 = $7,000 before withdrawal.
          </p>
          <p className="text-slate-400 text-sm mb-2">
            • Bets over $5 per spin / hand while playing with a bonus are not
            allowed. Exceeding may void winnings.
          </p>
          <p className="text-slate-400 text-sm">
            • Wagering must be completed on eligible games. See Game
            Contribution and Excluded Games.
          </p>
        </section>

        {/* 3. Withdrawal Limits */}
        <section className="bg-[#081A26] backdrop-blur-sm rounded-lg border border-slate-800/50 p-6">
          <h2 className="text-white text-xl font-bold mb-4">
            3. Withdrawal Limits
          </h2>

          <div className="space-y-2 mb-4">
            <p className="text-white text-sm font-semibold">Daily: $4,000</p>
            <p className="text-white text-sm font-semibold">Weekly: $8,000</p>
            <p className="text-white text-sm font-semibold">Monthly: $30,000</p>
          </div>

          <p className="text-slate-400 text-sm mb-2">
            • Winnings over $30,000 may be paid in monthly installments of up to
            $30,000
          </p>
          <p className="text-slate-400 text-sm mb-2">
            • VIP players may receive higher limits at the casino's discretion.
          </p>
          <p className="text-slate-400 text-sm">
            • Free Spins and No Deposit Bonuses are capped at a $50 maximum
            withdrawal.
          </p>
        </section>

        {/* 4. Game Contribution to Wagering */}
        <section className="bg-[#081A26] backdrop-blur-sm rounded-lg border border-slate-800/50 p-6">
          <h2 className="text-white text-xl font-bold mb-4">
            4. Game Contribution to Wagering
          </h2>

          <div className="space-y-3">
            {gameContributions.map((item, index) => (
              <div key={index}>
                <div className="inline-flex">
                  <p className="text-white text-sm font-semibold mb-1">
                    • {item.percentage}:{" "}
                  </p>
                  <p className="text-slate-400 text-sm ml-4">{item.games}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Excluded Games */}
        <section className="bg-[#081A26] backdrop-blur-sm rounded-lg border border-slate-800/50 p-6">
          <h2 className="text-white text-xl font-bold mb-4">
            5. Excluded Games
          </h2>

          <p className="text-slate-400 text-sm mb-4">
            Bonuses cannot be used on 'Jackpot or Bonus Buy' games. The
            following titles are excluded from bonus play:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
            {excludedGames.map((game, index) => (
              <div key={index} className="flex items-center space-x-2">
                <FaCheckCircle className="text-slate-500 text-xs flex-shrink-0" />
                <span className="text-slate-300 text-sm">{game}</span>
              </div>
            ))}
          </div>

          {/* <p className="text-slate-400 text-xs leading-relaxed">
            {excludedGamesList.join(", ")}
          </p> */}
        </section>
        {/* 6. No Deposit Bonuses */}
        <section className="bg-[#081A26] backdrop-blur-sm rounded-lg border border-slate-800/50 p-6">
          <h2 className="text-white text-xl font-bold mb-4">
            6. No Deposit Bonuses
          </h2>

          <p className="text-slate-400 text-sm mb-2">
            • One free bonus is available before your first deposit.
          </p>
          <p className="text-slate-400 text-sm mb-2">
            • Maximum cashout from no deposit offers: $50.
          </p>
          <p className="text-slate-400 text-sm mb-2">
            • Wagering requirement: 70x.
          </p>
          <p className="text-slate-400 text-sm mb-2">
            • Expires after 30 days if requirements are not met.
          </p>
          <p className="text-slate-400 text-sm">
            • You cannot claim consecutive no deposit bonuses without a
            real-money deposit.
          </p>
        </section>

        {/* 7. Cashback & Other Promotions */}
        <section className="bg-[#081A26] backdrop-blur-sm rounded-lg border border-slate-800/50 p-6">
          <h2 className="text-white text-xl font-bold mb-4">
            7. Cashback & Other Promotions
          </h2>

          <p className="text-slate-400 text-sm mb-2">
            • Cashback is based on your last approved deposit (within the
            previous 24 hours).
          </p>
          <p className="text-slate-400 text-sm mb-2">
            • Cashback bonuses have a 5x maximum cashout.
          </p>
          <p className="text-slate-400 text-sm">
            • Not available if 3 or more no-deposit bonuses have been credited
            since your last deposit, or if a withdrawal is pending.
          </p>
        </section>

        {/* 8. General Rules */}
        <section className="bg-[#081A26] backdrop-blur-sm rounded-lg border border-slate-800/50 p-6">
          <h2 className="text-white text-xl font-bold mb-4">
            8. General Rules
          </h2>

          <p className="text-slate-400 text-sm mb-2">
            • Irregular play such as excessive bet play, systematic abuse may
            result in bonus removal and winnings being voided.
          </p>
          <p className="text-slate-400 text-sm mb-2">
            • Use a withdrawal pending, new free chip or comp bonuses cannot be
            applied.
          </p>
          <p className="text-slate-400 text-sm mb-2">
            • Bonuses and free spins cannot be purchased or later use.
          </p>
          <p className="text-slate-400 text-sm mb-2">
            • All promotions may be amended or discontinued at any time without
            prior notice.
          </p>
          <p className="text-slate-400 text-sm">
            • By claiming a bonus you agree to these Terms and the casino's
            general Terms & Conditions.
          </p>
        </section>
      </div>
    </div>
  );
}
