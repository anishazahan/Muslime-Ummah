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
            <img className="w-full h-[70%] object-cover" src={'http://kodeforest.net/html/islamic/extra-images/service2.jpg'} alt="" />
        </div>


            <div className="right-service w-[30%]"></div>
        </div>
    </div>
  )
}

export default ServiceDetails