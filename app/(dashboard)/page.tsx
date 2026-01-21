import { Home } from "@/components/home";

const HomePage = () => {
  // const [showAds, setShowAds] = useState<boolean>(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowAds(true);
  //   }, 50000000);

  //   return () => clearTimeout(timer); // cleanup
  // }, []);

  return (
    // <div className="overflow-x-clip">
    //   <Hero />
    //   <BigWins />
    //   <CasinoNavigation />
    //   <WelcomeBonus />
    //   <Jackpot />
    //   <NewGames />
    //   <TopGames />
    //   <LiveCasino />
    //   <PaymentMethod />
    //   <BonusPromotion />
    //   <HotGames />
    //   <WhyChooseUs />
    //   <Sponsors />

    //   {showAds && <AdsModal onClose={() => setShowAds(false)} />}
    // </div>

    <>
      <Home />
    </>
  );
};

export default HomePage;
