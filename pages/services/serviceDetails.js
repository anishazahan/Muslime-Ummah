// import { useEffect, useState } from "react"
import { BsCheckLg } from "react-icons/bs";
import Cateogory from "./Cateogory";

const ServiceDetails = () => {
  // const [services, setAllServices] = useState();
  // useEffect(() => {
  //   fetch("services.json")
  //     .then((res) => res.json())
  //     .then((data) => setAllServices(data));
  // }, [services]);
  return (
    <div className="my-56 container px-16 mx-auto">
      <div className="flex space-x-5 mx-auto">
        <div className="left-service w-[72%]">
          <div className="h-[20%] overflow-hidden">
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
          <p className="text-gray-700 mb-6">
            service-detail-img1.jpg Provide rehab facility dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <div className="flex justify-between mb-6">
            <div className=" w-[40%]">
              <img
                className="w-full h-full object-cover rounded-md"
                src={
                  "https://nauthemes.net/html/bismillah/assets/images/resources/service-detail-img2.jpg"
                }
                alt=""
              />
            </div>
            <div className="w-[57%]">
              <p className="text-gray-700">
                Doctors and medical officers sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam
              </p>
              <p className="text-gray-700 mt-3">
                Duis aute irure dolor in reprehenderit in voluptate.exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate.Excepteur sint
                occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <hr />
          <h2 className="tracking-wide text-[18px] font-semibold my-5">
            HOW CAN WE HELP ?
          </h2>
          <p className="text-gray-700 mb-5">
            Maecenas cursus mauris libero, a imperdiet enim pellentesque id.
            Aliquam erat volutpat. Suspendisse sit amet sapien at risus
            efficitur sagittis Pellentesque.
          </p>

          <div className="flex justify-between mb-5">
            <div className=" pt-5">
              <ul className="flex flex-col space-y-4 ">
                {" "}
                <div className="flex items-center space-x-3">
                  <BsCheckLg className="text-primary"></BsCheckLg>
                  <li className="text-[18px] tracking-wider">
                    {" "}
                    Helping for Quran Classes
                  </li>
                </div>
                <div className="flex items-center space-x-3">
                  <BsCheckLg className="text-primary"></BsCheckLg>
                  <li className="text-[18px] tracking-wider">
                    {" "}
                    Helping for Quran Classes
                  </li>
                </div>
                <div className="flex items-center space-x-3">
                  <BsCheckLg className="text-primary"></BsCheckLg>
                  <li className="text-[18px] tracking-wider">
                    {" "}
                    Helping for Quran Classes
                  </li>
                </div>
                <div className="flex items-center space-x-3">
                  <BsCheckLg className="text-primary"></BsCheckLg>
                  <li className="text-[18px] tracking-wider">
                    {" "}
                    Helping for Quran Classes
                  </li>
                </div>
                <div className="flex items-center space-x-3">
                  <BsCheckLg className="text-primary"></BsCheckLg>
                  <li className="text-[18px] tracking-wider">
                    {" "}
                    Helping for Quran Classes
                  </li>
                </div>
                <div className="flex items-center space-x-3">
                  <BsCheckLg className="text-primary"></BsCheckLg>
                  <li className="text-[18px] tracking-wider">
                    {" "}
                    Helping for Quran Classes
                  </li>
                </div>
                <div className="flex items-center space-x-3">
                  <BsCheckLg className="text-primary"></BsCheckLg>
                  <li className="text-[18px] tracking-wider">
                    {" "}
                    Helping for Quran Classes
                  </li>
                </div>
              </ul>
            </div>
            <div className=" w-[60%]">
              <img
                className="w-full object-cover rounded-md"
                src={
                  "https://cdn.greatnonprofits.org/images/uploads/organizations/2021_Newsletter_May_MealPack_Article_3.jpg"
                }
                alt=""
              />
            </div>
          </div>
          <hr />
          <h2 className="tracking-wide text-[18px] font-semibold my-5">
          WE GIVE BEST SOLUTION !
          </h2>
          <div className="bg-slate-100 flex flex-col">
            <div className="flex justify-between px-10">
            <h2 className="tracking-wide text-gray-800 text-[16px] font-semibold my-5">
                We give best solution?
                </h2>
                <button className="text-2xl font-bold">+</button>
            </div>
            <hr />
            <div className="flex justify-between px-10">
            <h2 className="tracking-wide text-gray-800 text-[16px] font-semibold my-5">
                We give best solution?
                </h2>
                <button className="text-2xl font-bold">+</button>
            </div>
            <hr />
            <div className="flex justify-between px-10 ">
            <h2 className="tracking-wide text-gray-800 text-[16px] font-semibold my-5">
                We give best solution?
                </h2>
                <button className="text-2xl font-bold">+</button>
            </div>

          </div>
        </div>

        <div className="right-service w-[28%] ">
            <Cateogory></Cateogory>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
