import React from 'react'
import './AdviseSection'
import {FaQuoteLeft,FaMosque} from 'react-icons/fa'
import img from '../../../img/advise2.jpg'

const AdviseSection = () => {
  return (
    <>

        <div className="max-width mx-auto my-28">
            <div className=" flex flex-col lg:flex-row px-16">
                <div className="left flex flex-col w-full space-y-8">

                    <div className="quote flex">
                        <FaQuoteLeft className='text-primary font-bold text-5xl mr-3'></FaQuoteLeft>
                        <h1 className="text-3xl font-semibold">Take Good Advice From People Who Pronounce It Though He Does Not Practice</h1>
                    </div>
                    <h1 className="quote italic leading-8">
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
                        <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Duis aute irure.
                        </p>
                       <div className="">
                       <button class="btn btn-secondary">Learn More</button>
                       </div>
                </div>


                <div className="right adviseImg ">
                    <img className='w-full h-full mt-8 lg:mt-0 rounded lg:rounded-t-full' src={img} alt="" />
                </div>
            </div>
        </div>


    </>
  )
}

export default AdviseSection