import React from 'react'
import './AdviseSection'
import { FaQuoteLeft, FaMosque } from 'react-icons/fa'

const AdviseSection = () => {
    return (
        <>

            <div className="xl:container mx-auto my-28">
                <div className=" flex flex-col lg:flex-row px-10">
                    <div className="left flex flex-col w-full space-y-8 xl:mt-16 2xl:space-x-3">

                        <div className="quote flex">
                            <FaQuoteLeft className='text-primary font-bold text-5xl mr-3'></FaQuoteLeft>
                            <h1 className="text-3xl font-semibold">Take Good Advice From People Who Pronounce It Though He Does Not Practice</h1>
                        </div>
                        <h1 className="quote italic leading-8 text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod diti tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimsa veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.
                        </h1>

                        <div className="flex flex-col md:flex-row">
                            <div className=" mr-8 space-y-2">
                                <div className="flex items-baseline">
                                    <FaMosque className='text-primary font-bold mr-2'></FaMosque>
                                    <p className=''>Join The Islamic Community</p>
                                </div>
                                <div className="flex items-baseline">
                                    <FaMosque className='text-primary font-bold mr-2'></FaMosque>
                                    <p className=''>Join The Islamic Community</p>
                                </div>
                                <div className="flex items-baseline">
                                    <FaMosque className='text-primary font-bold mr-2'></FaMosque>
                                    <p className=''>Join The Islamic Community</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-baseline">
                                    <FaMosque className='text-primary font-bold mr-2'></FaMosque>
                                    <p className=''>Join The Islamic Community</p>
                                </div>
                                <div className="flex items-baseline">
                                    <FaMosque className='text-primary font-bold mr-2'></FaMosque>
                                    <p className=''>Join The Islamic Community</p>
                                </div>
                                <div className="flex items-baseline">
                                    <FaMosque className='text-primary font-bold mr-2'></FaMosque>
                                    <p className=''>Join The Islamic Community</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Duis aute irure.
                        </p>
                        <div className="">
                            <button className="btn btn-secondary bg-secondary py-3 px-6 text-white ">Learn More</button>
                        </div>
                    </div>


                    <div className="right adviseImg ">
                        <img className=' h-full mt-8 lg:mt-0 rounded lg:rounded-t-full w-4/6  lg:w-full mx-auto lg:mx-0' src={"https://i.ibb.co/Mchkhqb/advise.jpg"} alt="" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default AdviseSection