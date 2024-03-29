import React from "react";
import BannerSlider from "../Home/Component/Banner/BannerSlider";
import AboutIslam from "./Component/AboutIslam/AboutIslam";
// import NewsLetter from '../Footer/NewsLetter'

import AdviseSection from "./Component/Advise/AdviseSection";
import Banner from "./Component/Banner/Banner";
import BannerBottomSection from "./Component/Banner/BannerBottomSection";
import Donation from "./Component/Donation/Donation";
import Gallary from "./Component/Gallary/Gallary";
import HomeBlogEvent from "./Component/HomeBlogEvent/HomeBlogEvent";
import HomeTopVedioSection from "./Component/HomeTopVedioSection/HomeTopVedioSection";
import PillerOfIslam from "./Component/PillerOfIslam/PillerOfIslam";
import PrayerRules from "./Component/PrayerRules/PrayerRules";
import Remember from "./Component/Remember/Remember";
import Scholars from "./Component/Schoolars/Scholars";
import Services from "./Component/Services/Services";
import WelcomeSection from "./Component/WelcomSection/WelcomeSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <BannerBottomSection />
      <HomeTopVedioSection />
      <WelcomeSection />
      <AboutIslam />
      <Gallary />
      <Services />
      <PillerOfIslam />
      <AdviseSection />
      <Scholars />
      <HomeBlogEvent />
      <Donation />
      <PrayerRules />
      <Remember />
    </div>
  );
};

export default Home;
