import React from 'react'
import './Donation.css'
import img1 from '../../../img/donation1.jpg'



const Donation = () => {
 
  return (
    <div className='donation-background mb-20'>

        <section className="max-width mx-auto">
            <div className="flex flex-col lg:flex-row">
                <div className="left-img w-full lg:w-1/2 mx-auto">
                    <img className='w-full h-full' src={img1} alt="" />
                </div>
                <div className="right ml-20 space-y-6">
                    <h2 className='text-xl font-semibold mt-8 text-primary'>Give Food & Shelter To Poor</h2>
                    <h2 className='text-4xl font-semibold tracking-wide'>Make Your Donation</h2>
                    <div className="btn-group space-x-2">
                    <button className='donate-btn'>$100</button>
                    <button className='donate-btn'>$200</button>
                    <button className='donate-btn'>$300</button>
                    <button className='donate-btn'>Other</button>
                    </div>
                    <form  className='w-full'>
                    <div className="input-field flex flex-col md:flex-row w-full">
                        <div className="flex flex-col w-3/5 lg:w-full">
                            <input className='border p-2 m-1 outline-primary' type="text" placeholder='Your Name' />
                            <input className='border p-2 m-1 outline-primary' type="text" placeholder='Your Email' />
                        </div>
                        <div className="flex flex-col w-3/5  lg:w-full">
                            <input className='border p-2 m-1 outline-primary' type="text" placeholder='Your Phone' />
                            <input className='border p-2 m-1 outline-primary' type="text" placeholder='Your Addrees' />
                        </div>
                    </div>
                    
                   <div className="space-y-4 mt-6">
                   <div className="progressbar w-full">
                        <h2 className="text-xl">Raise Funds For poor</h2>
                        <input className='w-3/5 lg:w-full text-primary' type="range"  />
                    </div>
                    <div className="flex space-x-8">
                        <h2>Raised: <span className='font-semibold text-primary'>$400.00</span> </h2>
                        <h2>Goal: <span className='font-semibold text-primary'>$400.00</span> </h2>
                    </div>
                   </div>
                   <div className="mt-4">
                    <button className='donate'>Donate Now</button>
                   </div>
                   </form>
                </div>
              
               
            </div>
        </section>


    </div>
  )
}

export default Donation