import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption} from "react-icons/gr";
import SingleScholars from './SingleScholars';
import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Scholars = () => {

    const [scholars,setScholars] = useState([]);
    useEffect(()=>{
        fetch('schoolars.json')
        .then(res=>res.json())
        .then(data=>setScholars(data));
    },[])
  return (
    <section className='container mx-auto mb-20'>

            <div className="text-center space-y-3">
                <h1 className='text-xl font-semibold text-primary'>Our Expert</h1>
                <h1 className='text-4xl text-gray-700 font-semibold'>Islamic Scholars</h1>
            </div>

            <div className='px-20 mx-auto mt-10 bg-transparent'>
            <Swiper
        slidesPerView={3}
        spaceBetween={5}
        loop={true}
       
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      {
      scholars.map(scholar=>{
            return  <SwiperSlide><div className=' relative scholar_img duration-150 group mb-14 '>
            <div className=" duration-100">
              <img className='w-full rounded-0' src={scholar.img} alt="" />
            </div>
            <div className=" duration-500 scholar_info absolute right-5 z-30 left-5 py-8 bottom-[-3rem] bg-white shadow-lg text-secondary rounded-md flex flex-col justify-center items-center">
              <h1>{scholar.name}</h1>
              <h1>{scholar.tittle}</h1>
              <div className="flex space-x-3 mt-3">
                <p className='text-xl'><FaFacebookF></FaFacebookF></p>
                <p className='text-xl'><AiOutlineTwitter></AiOutlineTwitter></p>
                <p className='text-xl'><GrLinkedinOption></GrLinkedinOption></p>
              </div>
            </div>
            <div className="bg-black/0 group-hover:bg-black/50 absolute z-20 h-full w-full inset-0 duration-500"></div>
      
          </div></SwiperSlide>
        })
      }
      </Swiper>
    </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-28 gap-7 mt-10 "> 
               
            </div> */}
            


    </section>
  )
}

export default Scholars
