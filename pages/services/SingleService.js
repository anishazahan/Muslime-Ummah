import { FaQuran } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from "next/link";

const SingleService = ({ service }) => {

  return (
    <Link href={`/services/${service.id}`} passHref>
    <div  className="service-card mx-auto">
      <div className="relative z-10">
        <div className="service-img">
          <img className="duration-500" src={service.img} alt="absolute" />
        </div>

        <div className="px-8 py-3 service-content duration-500">
          <p>
            <FaQuran className="p-4 service-icon duration-500 rounded-full absolute z-20 bg-white text-primary mt-[-2.5rem] text-7xl border"></FaQuran>
          </p>
          <h2 className="font-semibold text-[19px] tracking-wide mt-[3rem] my-3">
            {service.name}
          </h2>
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm mb-5">{service.time}</p>
            <p>
              <BsArrowRightCircleFill className="text-2xl text-secondary hidden arrow-btn duration-700"></BsArrowRightCircleFill>
            </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default SingleService