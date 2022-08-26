import React from 'react'
import './AdviseSection'
import {FaQuoteLeft,FaMosque} from 'react-icons/fa'
import img from '../../../img/advise2.jpg'

const AdviseSection = () => {
  return (
    <>

        <div className="max-width mt-10">
            <div className=" flex flex-col lg:flex-row px-16">
                <div className="left flex flex-col w-full">

                    <div className="quote flex">
                        <FaQuoteLeft className='text-primary font-bold text-5xl mr-3'></FaQuoteLeft>
                        <h1 className="text-3xl font-semibold">Take Good Advice From People Who Pronounce It Though He Does Not Practice</h1>
                    </div>
                    <h1 className="quote italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod diti tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimsa veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. 
                        </h1>
                        <div className="">
                            <div className="flex">
                                <FaMosque></FaMosque>
                                <p>Join The Islamic Community</p>
                            </div>
                        </div>
                </div>


                <div className="right adviseImg ">
                    <img className='w-full' src={img} alt="" />
                </div>
            </div>
        </div>


    </>
  )
}

export default AdviseSection