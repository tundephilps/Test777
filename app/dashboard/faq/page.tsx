"use client";
import React, { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Canada777?",
      answer:
        "We are a online casino where gambling activities are hosted by numerous renowned gaming providers in the industry with over 3100 games to play. Click here to learn more about us",
    },
    {
      question: "What currencies does Canada777 accept?",
      answer:
        "We accept CAD, USD, GBP, and EUR. However, you can deposit in certain cryptocurrencies that will be converted to your choice of the aforementioned currencies to play in. See the Payment Page",
    },
    {
      question: "Who can play at Canada777?",
      answer:
        "Canada777 is available to most players from around the world, unfortunately however, players from the following the following countries are restricted from registering: Afghanistan, Aruba, Bonaire, Burma, Congo, Curacao, Eritrea, Ethiopia, France, Iran, Iraq, Libya, Malaysia, Myanmar, Russia, Russian Federation, North Korea, Palestine, Saba, Singapore, Somalia, Statia, St. Maarten, Sudan, Syria, Singapore, United Kingdom, Yemen, and Zimbabwe.",
    },
    {
      question: "Are there any bonus restrictions?",
      answer:
        "Our amazing bonuses will have different terms and conditions, so read them carefully before accepting. If you have any further questions, please contact our brilliant Support Team.",
    },
    {
      question: "How do I claim a bonus?",
      answer:
        "All bonuses will have a coupon code for you to redeem, once you have chosen the bonus you will like to use: 1) Go to the Dashboard section in the from left side menu, 2) Select the Deposit Tab, 3) Choose Bonus Package, 4) Make your deposit and the bonus will be added automatically",
    },
    {
      question: "What are wagering requirements?",
      answer:
        "All our bonuses have their own terms and conditions and the wagering requirement specifies how many times the bonus funds have to be wagered before making a withdrawal. You will however see the bonus requirements below each bonus on the Promotions as well as the Bonus Terms pages.",
    },
    {
      question: "What is a welcome bonus?",
      answer:
        "Welcome bonuses provide new players with bonus monies equal to a percentage of their initial deposit to welcome them to the casino and give them a taste of whats on offer.",
    },
    {
      question: "What if I have a problem or complaint?",
      answer:
        "That is why our excellent Support Team are there for you 24/7 to assist you with anything you may need via our live chat function or email at support@Canada777.com",
    },
    {
      question: "Is there a minimum or maximum deposit or withdrawal limit?",
      answer:
        "There is a minimum accepted deposit of US$ 15 or currency equivalent to make your way to winning. The minimum withdrawal is US$ 50 or currency equivalent with a maximum daily (24 hour period) withdrawal limit of $4,000.",
    },
    {
      question: "Can I win real money?",
      answer:
        "Absolutely, all games allow you to play for real cash prizes and luck jackpots along the way. If you feel the need to practice a bit first, you can play the games in Demo.",
    },
    {
      question: "How can I deposit or withdraw?",
      answer:
        "The following deposit and withdrawal methods are available at Canada777: Interac, Visa, MasterCard, Crypto Wallet: BTC, LTC, ETH, TRX (Tron), BNB (Binance coin), BUSB (Binance USD). Learn more on our Payments page.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#081826] lg:p-6 p-2">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <FaQuestionCircle className="text-white text-2xl" />
            </div>
            <h1 className="text-white text-4xl font-bold">FAQ</h1>
          </div>
          <p className="text-slate-400 text-lg">Frequently Asked Questions</p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-700/30 transition-colors"
              >
                <h3 className="text-white text-lg font-semibold text-left pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FaChevronUp className="text-red-500 text-xl" />
                  ) : (
                    <FaChevronDown className="text-slate-400 text-xl" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <div className="border-t border-slate-700/50 pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support Section */}
        {/* <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-900 to-red-950 rounded-xl p-8 border border-red-800/50">
            <h2 className="text-white text-2xl font-bold mb-3">
              Still have questions?
            </h2>
            <p className="text-red-200 mb-6">
              Our support team is available 24/7 to help you with any questions
              or concerns.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                Live Chat
              </button>
              <button className="px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                Email Support
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
