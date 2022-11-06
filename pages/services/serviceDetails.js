// import { useEffect, useState } from "react"

const ServiceDetails = () => {
    // const [services, setAllServices] = useState();
    // useEffect(() => {
    //   fetch("services.json")
    //     .then((res) => res.json())
    //     .then((data) => setAllServices(data));
    // }, [services]);
  return (
    <div className='my-56 container px-20'>

        <div className="flex">
         <div className="left-service w-2/3">
            <div className="h-[70%] overflow-hidden">
                <img className="w-full h-full hover:scale-[1.2] duration-500 object-cover" src={'http://kodeforest.net/html/islamic/extra-images/service2.jpg'} alt="" />
            </div>
            <h2 className="font-semibold text-[20px] tracking-wide mt-[1.5rem] text-center my-3">
                    Quran Clases
                  </h2>
                  <p className="text-gray-500 text-center text-sm mb-5">Timing : 09:00 A.M - 03:00 P.M</p>
                    <p/>
        </div>


            <div className="right-service w-[30%]"></div>
        </div>
    </div>
  )
}

export default ServiceDetails