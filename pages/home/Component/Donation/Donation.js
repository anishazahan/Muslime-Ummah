import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";




const Donation = () => {
    return (
        <div className='mt-20 lg:mt-28 2xl:container mx-auto'>
            <section className="max-width mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-stretch">
                    <div className=" relative left-img w-full lg:w-6/12 lg:pr-3 mx-auto md:mx-0">
                    <Swiper
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className='w-full object-cover' src={"https://i.ibb.co/FHxvRPj/donation1.jpg"} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-full object-cover' src={"https://i.ibb.co/jWCX8z7/donatio2.jpg"} alt="" /></SwiperSlide>
                        <SwiperSlide><img className='w-full object-cover' src={"https://i.ibb.co/vh7PmWt/donation3.jpg"} alt="" /></SwiperSlide>
                        <div className="bg-black/50 group-hover:bg-black/50 absolute z-20 h-full w-full inset-0 duration-500"></div>
                    </Swiper>
                        
                    </div>

                    <div className="right space-y-4 w-full lg:w-6/12 pl-3 mx-auto md:mx-0">
                        <h2 className='text-xl font-semibold text-primary mt-5 lg:mt-0'>Give Food & Shelter To Poor</h2>
                        <h2 className='text-3xl md:text-4xl font-semibold tracking-wide'>Make Your Donation</h2>
                        <div className="input flex  space-x-2">
                            <input className='border w-1/6 lg:w-1/12 p-2 m-1 text-gray-500 placeholder-black' type="text" placeholder='$' value={200} />
                            <input className='border w-1/6 lg:w-1/12 p-2 m-1 text-gray-500 placeholder-black' type="text" placeholder='$' value={400} />
                            <input className='border w-1/6 lg:w-1/12 p-2 m-1 text-gray-500 placeholder-black' type="text" placeholder='$' value={500} />
                            <input className='border p-2 m-1 text-gray-500 placeholder-black' type="number" placeholder=' Other Amount $'/>
                        </div>
                        <h2 className='text-[18px] text-gray-600 font-medium tracking-wide'>Billing Information</h2>
                        <form className='w-full'>

                            <div className="input-field flex flex-col w-full pl-3 lg:pr-7">

                            <div className="flex  lg:w-full">
                                    <input className='border placeholder-slate-700 w-5/12 p-2 m-1 outline-primary' type="text" placeholder='Your Name' />
                                    <input className='border placeholder-slate-700 w-5/12 p-2 m-1 outline-primary' type="email" placeholder='Your Email' />
                                </div>
                                <div className="flex  lg:w-full">
                                    <input className='border placeholder-slate-700 w-5/12 p-2 m-1 outline-primary' type="number" placeholder='Your Phone' />
                                    <input className='border placeholder-slate-700 w-5/12 p-2 m-1 outline-primary' type="text" placeholder='Your Addrees' />
                                </div>
                                <div className="flex  lg:w-full">
                                    <input className='border placeholder-slate-700 w-5/12 p-2 m-1 outline-primary' type="text" placeholder='Your Country' />
                                    <input className='border placeholder-slate-700 w-5/12 p-2 m-1 outline-primary' type="text" placeholder='Your City' />
                                </div>
                            </div>
                            <h2 className='text-[17px] text-gray-900 font-medium tracking-wide mt-4'>Chose Your Payment Method</h2>
                            <div className="flex mb-[-1rem] my-3 space-x-6">

                            <div className="">
                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                              <label className="text-slate-500 font-semibold" for="html">Paypal</label>
                            </div>

                            <div className="">
                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                              <label className="text-slate-500 font-semibold" for="html">Strip</label>
                            </div>

                            <div className="">
                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                              <label className="text-slate-500 font-semibold" for="html">Credit Card</label>
                            </div>
                            <div className="">
                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                              <label className="text-slate-500 font-semibold" for="html">Other Sourch</label>
                            </div>
                            </div>

                            <div className=" mt-6">
                                <div className="progressbar w-10/12 mt-8">
                                    <h2 className="text-[18px] mb-[-1rem] text-gray-700">Raise Funds For poor</h2>
                                    <input className='w-3/5 lg:w-full text-primary' type="range" />
                                </div>

                                <div className="flex space-x-8 my-4 mb-5">
                                    <h2>Raised: <span className='font-semibold text-primary text-xl'>$400.00</span> </h2>
                                    <h2>Goal: <span className='font-semibold text-primary text-xl'>$400.00</span> </h2>
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