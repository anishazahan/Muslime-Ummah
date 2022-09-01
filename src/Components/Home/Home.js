import React from 'react'
// import BannerSlider from './BannerSlider'
// import NewsLetter from '../Footer/NewsLetter'

import AdviseSection from './Component/Advise/AdviseSection'
import Banner from './Component/Banner/Banner'
import BannerBottomSection from './Component/Banner/BannerBottomSection'
import Donation from './Component/Donation/Donation'
import Gallary from './Component/Gallary/Gallary'
import PillerOfIslam from './Component/PillerOfIslam/PillerOfIslam'
import DonationCard from './Component/PrayerRules/Donate/DonationCard'
import PrayerRules from './Component/PrayerRules/PrayerRules'
import Scholars from './Component/Schoolars/Scholars'
import WelcomeSection from './Component/WelcomSection/WelcomeSection'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerBottomSection></BannerBottomSection>
        {/* <BannerSlider></BannerSlider> */}
         <WelcomeSection></WelcomeSection>
         <Gallary></Gallary>
        <PillerOfIslam></PillerOfIslam>
       <AdviseSection></AdviseSection>
        <Scholars></Scholars>
        <Donation></Donation>
        <DonationCard></DonationCard>
        <PrayerRules></PrayerRules> 
    
      

    </div>
  )
}

export default Home