import React, { useEffect, useRef, useState } from "react";
import ProgressBar from '@ramonak/react-progress-bar/dist/index';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";

const Donation = () => {
    const [currentFund, setCurrentFund] = useState({})
    // const [currentFund, setCurrentFund] = useState({})
    const funds = useSelector(state => state.donation.donations)
    useEffect(() => {
        setCurrentFund(funds[0])
    }, [funds])

    function handleSelectFund(e) {
        const fundName = e.target.value;
        const selectedFund = funds.find(fund => fund.donationName === fundName)
        setCurrentFund(selectedFund);
    }
    const raised = currentFund?.raised;
    const goal = currentFund?.goal;
    const percentage = parseInt(100 - (+Math.abs(100 - raised / goal * 100).toFixed(10)));
    return (
        <div className='mt-20 lg:mt-28 2xl:container mx-auto donate-section'>
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

                    <div className="right space-y-4 w-full lg:w-6/12 lg:pl-3 pl-10 md:pl-16 pr-3 mx-auto md:mx-0">
                        <h2 className='text-xl font-semibold text-primary mt-5 lg:mt-0'>Give Food & Shelter To Poor</h2>
                        <h2 className='text-3xl md:text-4xl font-semibold tracking-wide'>Make Your Donation</h2>

                        <div>
                            <label for="donate" class="block text-sm font-medium text-gray-900 dark:text-gray-400">Select Fund</label>
                            <select onChange={(e) => handleSelectFund(e)} id="donate" class="w-10/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {
                                    funds.map(fund => {
                                        return (
                                            <>
                                                <option value={fund.donationName}>{fund.donationName}</option>
                                            </>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="w-6/12 pt-">
                            <div className='my-3 '>
                                <ProgressBar
                                    completed={percentage}
                                    bgColor="#0e820e"
                                    baseBgColor="#c6ffc6"
                                    height="11px"
                                    labelColor="#ffffff"
                                    labelSize="10px"
                                    animateOnRender
                                    maxCompleted={100}
                                    customLabel={`${percentage}%`}
                                />
                            </div>

                            <div className="flex justify-between w-full mb-5">
                                <h2 className="inline-block">Raised: <span className='font-semibold text-primary text-xl'>${currentFund?.raised}</span> </h2>
                                <h2 className="inline-block text-end">Goal: <span className='font-semibold text-primary text-xl'>${currentFund?.goal}</span> </h2>
                            </div>
                        </div>

                        <hr />

                        <h2 className='text-[22px] text-gray-600 font-medium tracking-wide'>Billing Information</h2>


                        <div>
                            <h2 className='text-[17px] text-gray-900 font-medium tracking-wide lg:mt-4'>Chose Your Payment Method</h2>
                            <div className="flex mb-5 space-x-6">

                                <div className="">
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label className="text-slate-500 font-semibold" for="html">Paypal</label>
                                </div>

                                <div className="">
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label className="text-slate-500 font-semibold" for="html">Strip</label>
                                </div>

                                <div className="">
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label className="text-slate-500 font-semibold" for="html">Credit Card</label>
                                </div>
                                <div className="">
                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                    <label className="text-slate-500 font-semibold" for="html">Other Sourch</label>
                                </div>
                            </div>
                        </div>

                        


                        <form className='w-full'>
                        <div>
                            <h2 className='text-[17px] text-gray-900 font-medium tracking-wide lg:mt-4'>Chose Amount</h2>
                            <div className="input flex  space-x-2">
                                <input className='border w-1/6 lg:w-1/12 p-2 m-1 text-gray-500 placeholder-black cursor-pointer' type="text" placeholder='$' value={200} readOnly/>
                                <input className='border w-1/6 lg:w-1/12 p-2 m-1 text-gray-500 placeholder-black  cursor-pointer' type="text" placeholder='$' value={400} readOnly/>
                                <input className='border w-1/6 lg:w-1/12 p-2 m-1 text-gray-500 placeholder-black  cursor-pointer' type="text" placeholder='$' value={500} readOnly/>
                                <input className='border p-2 m-1 text-gray-500 placeholder-black ' type="number" placeholder=' Other Amount $' />
                            </div>
                        </div>

                            <div className="input-field flex flex-col w-full">

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



                            <div className=" mt-8 lg:mt-4">
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