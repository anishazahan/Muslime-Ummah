import React from 'react'
import './banner.css'
import img from '../../../../img/bannerArbi.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='banner-background mb-48'>
        <div className="mx-width mx-auto flex flex-col items-center justify-center ">
            <img className='w-44 h-auto banner-img' src={img} alt="" />
            <h1 className='font-bold text-4xl lg:text-6xl text-gray-100 mt-10'>"Keep Your Tongue wet With The <br/> </h1>
            <h1  className='font-bold text-4xl lg:text-6xl text-gray-100 mt-3 '>Remember of Allah"</h1>
            <h1 className='font-bold text-gray-100 mt-8'>(AL_TIRMIDHI)</h1>
            <div className="baner-btn space-x-4 mt-20">
                <Link to='/' className='py-4 px-8 outline-none bg-primary text-white'>Learn More</Link>
                <Link to='/' className='py-4 px-8 outline-none bg-secondary text-white'>Learn More</Link>
            </div>
        </div>

    </div>
  )
}

export default Banner