import React from 'react'
import img1 from '../../../../img/welcomeImg.jpg'
import img2 from '../../../../img/welcomeImg2.jpg'
import img3 from '../../../../img/welcomeImg3.jpg'
import img4 from '../../../../img/welcomeImg4.jpg'
import './WelcomeSection.css'

const WelcomeSection = () => {
  return (
    <div class=" min-h-screen px-8 lg:px-20 mx-auto">
  <div class=" hero-content flex-col w-full lg:flex-row">

   <div className="w-full h-auto basis-6/12">
   <img src={img3} class=" rounded-lg shadow-2xl  w-full" />
   </div>


    <div className=' space-y-6 basis-6/12'>
     <div className="">
     <h1 class="text-4xl font-bold text-gray-700">Welcome to Muslime Ummah</h1>
      <p class="text-[18px] text-primary font-semibold mt-4 welcome-heading"> to Achieve Spiritual Goals
      </p>
     </div>
      <hr className='welcomeHr'></hr>
      <div className="text-gray-700 text-[15px] text-gray-600 space-y-3">
        <p className="">
        Namaz is broadcast the jaguar far darn dukooka burra before thus and before ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor ncid parrot withdrew less a darn overheard foolish ran forwards.
        </p>
        <p className="">
        Labore et dolore magna aliqua enim ad minim veniam quis nostrud exerc eitation nisi ut aliquip ex ea consequat duis aute irure doly reprehenderit.
        </p>
        <p className="">
        Consectetur adipisicing elit sed eiusmod tempor ncid parrot withdrew less a darn overheard foolish ran forwards. Labore et dolore magna aliqua enim ad minim veniam quis nostrud exerc eitation nisi ut aliquip ex ea consequat duis aute irure doly reprehenderit.
        </p>
      </div>
      <button class="py-4 px-6 outline-0 bg-primary text-white text-xl rounded-sm hover:outline-primary,bg-white">Ask About Islam</button>
    </div>
  </div>
</div>
  )
}

export default WelcomeSection