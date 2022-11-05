import { useEffect, useState } from "react"
import { FaQuran } from "react-icons/fa";
import { BsArrowRightCircleFill} from "react-icons/bs";


const Services = () => {
    const [services,setAllServices] = useState();
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setAllServices(data));

    },[services])
  return (
    <div className="my-20 mx-auto px-20 container">
        <img className="w-40 mx-auto" src={'http://kodeforest.net/html/islamic/images/hdg-img.png'} alt="" />
        <h1 className='text-3xl text-gray-800 my-5 text-center font-semibold mb-10'>OUR SERVICES</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                services?.map(service=>{
                    return <div className="service-card">
                       <div className="relative z-10">
                       <img src={service.img} alt="absolute" />
                       <div className="px-8 py-3 service-content duration-500">
                       <p><FaQuran className="p-4 service-icon duration-500 rounded-full absolute z-20 bg-white text-primary mt-[-2.5rem] text-7xl border"></FaQuran></p>
                       <h2 className="font-semibold text-[19px] tracking-wide mt-[3rem] my-3">{service.name}</h2>
                       <div className="flex justify-between">
                       <p className="text-gray-500 text-sm mb-5">{service.time}</p>
                       <p><BsArrowRightCircleFill className="text-2xl text-secondary hidden arrow-btn duration-700"></BsArrowRightCircleFill></p>
                       </div>
                       </div>
                       </div>
                            
                    </div>
                })
            }
            </div>
    </div>
  )
}

export default Services