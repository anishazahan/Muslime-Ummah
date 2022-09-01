import React from 'react'
import './banner.css'
import img from '../../../../img/borderBottom.png'

const BannerBottomSection = () => {
  return (
    <div className='bg-slate-50 mb-20'>
        <div className="max-width mx-auto">
            <div className="flex flex-col lg:flex-row px-20">
                <div className="left w-full space-y-7 my-16">
                    <h1 className='text-primary font-extrabold text-2xl'>"JOIN THE ISLAMIC COMMUNITY"</h1>
                    <p className='text-gray-500 w-4/5'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean itudin. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
                    <p className='text-sm'>~ by <span className='font-bold text-primary'>Akshay H.</span>  (Community Head)</p>
                </div>
               

                <div className="right-img ">
                   <div className="">
                   <h1>CONTACT US FOR A JOINING</h1>
                    <img className='w-32' src={img} alt="" />
                   </div>
                   <div className="">
                   <h1>+1 800 123 4567</h1>
                   <h1 className="">
                   Mosque@example.com
                   </h1>
                   </div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default BannerBottomSection
