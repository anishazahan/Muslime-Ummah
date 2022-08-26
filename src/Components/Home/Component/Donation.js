import React from 'react'
import './Donation.css'
import img1 from '../../../img/donation1.jpg'



const Donation = () => {
  return (
    <div className='donation-background'>

        <section className="max-width">
            <div className="flex flex-col lg:flex-row">
                <div className="left-img">
                    <img className='w-full h-full' src={img1} alt="" />
                </div>
                <div className="right ml-10">
                    <h2 className='text-xl font-semibold mt-8 text-primary'>Give Food & Shelter To Poor</h2>
                    <h2 className='text-4xl font-semibold tracking-wide'>Make Your Donation</h2>
                    <div className="btn-group space-x-2">
                    <button className='donate-btn'>$100</button>
                    <button className='donate-btn'>$200</button>
                    <button className='donate-btn'>$300</button>
                    <button className='donate-btn'>Other</button>
                </div>
                </div>
              
               
            </div>
        </section>


    </div>
  )
}

export default Donation