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

            <div className="flex flex-wrap space-x-4">
            {
                services?.map(service=>{
                    return <div className="w-[30%]">
                            <h2>{service.name}</h2>
                    </div>
                })
            }
            </div>
    </div>
  )
}

export default Services