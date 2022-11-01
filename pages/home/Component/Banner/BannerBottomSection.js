import Link from 'next/link'
import React from 'react'

const BannerBottomSection = () => {
  return (
    <div className='bg-slate-50 my-10'>
        <div className="max-width mx-auto">
            <div className="flex flex-col lg:flex-row text-center lg:text-left px-8 md:px-5 lg:px-20 mx-auto">
                <div className="left w-full space-y-7 my-16 ">
                    <h1 className='text-primary font-extrabold text-2xl'>"JOIN THE ISLAMIC COMMUNITY"</h1>
                    <p className='text-gray-500 w-full lg:w-4/5'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean itudin. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
                    <p className='text-sm'>~ by <span className='font-bold text-primary'>Akshay H.</span>  (Community Head)</p>
                </div>
               

                <div className="right-img sm:w-full mx-5 lg:mx-0 lg:w-3/4 flex flex-col space-y-5 items-center justify-center h-full py-4  lg:py-0">
                   <div >
                   <h1 className="font-extrabold text-white text-xl mb-3">CONTACT US FOR A JOINING</h1>
                    <img className='w-32 mx-auto' src={"https://i.ibb.co/W3BN56Q/border-Bottom.png"} alt="" />
                   </div>
                   <div className=" mx-auto text-white">
                   <h1 className='mx-auto text-4xl font-extrabold'>+18001234567</h1>
                   <h1 className="mb-6 mx-auto text-center">
                   Mosque@example.com
                   </h1>
                   </div>
                   <div className="banner-bootom-btn mb-8">
                    <Link className='banner-contact-btn' href='/'>Contact</Link>
                   </div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default BannerBottomSection
