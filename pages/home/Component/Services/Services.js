import { useEffect, useState } from "react"


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
        <h1 className='text-3xl text-gray-800 my-5 text-center font-semibold'>OUR SERVICES</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                services?.map(service=>{
                    return <div className="service-card">
                       <div className="">
                       <img src={service.img} alt="" />
                       <div className="pl-8 py-3 service-content">
                       <h2 className="font-semibold text-[19px] tracking-wide my-3">{service.name}</h2>
                       <p className="text-gray-500 text-sm mb-5">{service.time}</p>
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