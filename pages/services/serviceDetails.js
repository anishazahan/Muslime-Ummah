// import { useEffect, useState } from "react"

const ServiceDetails = () => {
  // const [services, setAllServices] = useState();
  // useEffect(() => {
  //   fetch("services.json")
  //     .then((res) => res.json())
  //     .then((data) => setAllServices(data));
  // }, [services]);
  return (
    <div className="my-56 container px-20">
      <div className="flex">
        <div className="left-service w-3/4">
          <div className="h-[35%] overflow-hidden">
            <img
              className="w-full h-full hover:scale-[1.2] duration-500 object-cover"
              src={
                "http://kodeforest.net/html/islamic/extra-images/service2.jpg"
              }
              alt=""
            />
          </div>
          <h2 className="font-semibold text-[20px] tracking-wide mt-[1.5rem] text-center my-3">
            Quran Clases
          </h2>
          <p className="text-gray-500 text-center text-sm mb-5">
            Timing : 09:00 A.M - 03:00 P.M
          </p>
          <p />
          <p className="text-gray-700 mb-8">
            service-detail-img1.jpg Provide rehab facility dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </p>
          <div className="flex justify-between">
            <div className=" w-[40%]">
                <img className="w-full h-full object-cover rounded-md" src={'https://nauthemes.net/html/bismillah/assets/images/resources/service-detail-img2.jpg'} alt="" />
            </div>
            <div className="w-[57%]">
            <p className="text-gray-700">Doctors and medical officers sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="text-gray-700 mt-4">Duis aute irure dolor in reprehenderit in voluptate.exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estsunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>

        <div className="right-service w-1/5"></div>
      </div>
    </div>
  );
};

export default ServiceDetails;
