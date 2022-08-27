import React from 'react'
import NewsLetter from '../Footer/NewsLetter'
import Banner from './Banner'
import AdviseSection from './Component/AdviseSection'
import Donation from './Component/Donation'
import PillerOfIslam from './Component/PillerOfIslam'
import PrayerRules from './Component/PrayerRules/PrayerRules'

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <PillerOfIslam></PillerOfIslam>
        <AdviseSection></AdviseSection>
        <Donation></Donation>
        <PrayerRules></PrayerRules>
      

    </div>
  )
}

export default Home