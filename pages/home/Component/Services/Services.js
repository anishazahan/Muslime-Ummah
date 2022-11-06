import { useEffect, useState } from "react";
import Link from "next/link";
import SingleService from "../../../services/SingleService";

const Services = () => {
  const [services, setAllServices] = useState();
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, [services]);
  return (
    <div className="my-20 mx-auto px-10 lg:px-20 container">
      <img
        className="w-40 mx-auto"
        src={"http://kodeforest.net/html/islamic/images/hdg-img.png"}
        alt=""
      />
      <h1 className="text-3xl text-gray-800 my-5 text-center font-semibold mb-5">
        OUR SERVICES
      </h1>
      <h1 className=" text-gray-600 tracking-wide text-center font-semibold mb-16">
      Ethical & Moral Beliefs That Guides To The Straight Path!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8 lg:gap-y-6 mx-auto">
        {services?.map((service) => <SingleService key={service.id} service={service}></SingleService>).slice(0,6)}
      </div>

      <div className="text-center mb-16 container mt-10">
        <Link href={`/services`} className=" text-secondary underline font-medium">Learn More</Link>
      </div>
    </div>
  );
};

export default Services;
