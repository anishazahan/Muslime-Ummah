// import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { useSelector } from "react-redux";
import NormalLoader from "../../components/Loader/NormalLoader";
import SidebarBlog from "../blogs/SidebarBlog";
import SidebarContact from "../contact/SidebarContact";
import Cateogory from "./Cateogory";
import ServicesBreadcam from "./ServicesBreadcam";


const ServiceDetails = () => {
  const [toggle, setToggle] = useState(false);
  const [service,setService] = useState({})
  // const [state,setState] = useState()
  const id = useRouter().query.id;
  let services = useSelector(state => state)
 console.log(services)

  if(services.length > 0 ){
    console.log('after');
    console.log(services);
        // setService(services?.find(service => service.id == id))
        
  }
  
  console.log(service)

  if (services?.length < 1) {
    return <NormalLoader />
  }
  return (
    <>
    <h1>hsdfi</h1>
      {/* <ServicesBreadcam logoText={"OUR SERVICES DETAILS"}></ServicesBreadcam>
      <div className=" my-10 md:mt-20 container px-10 lg:px-16 mx-auto">
        <div className="flex flex-col lg:flex-row lg:space-x-5 mx-auto ">
          <div className="left-service w-full lg:w-[72%]">
            <div className="h-[20%] overflow-hidden">
              <img
                className="w-full h-full bg-center hover:scale-[1.2] duration-500 object-cover"
                src={currentService?.img}
                alt=""
              />
            </div>
            <h2 className="font-semibold text-[20px] tracking-wide mt-[1.5rem] text-center my-3">
              Quran Clases
            </h2>
            <p className="text-gray-500 text-center text-sm mb-4">
              Timing : 09:00 A.M - 03:00 P.M
            </p>
            <p />
            <p className="text-gray-700 mb-2">
              service-detail-img1.jpg Provide rehab facility dolor sit amet,
              consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.
            </p>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="w-full my-3 md:my-0 md:w-[40%]">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={
                    "https://nauthemes.net/html/bismillah/assets/images/resources/service-detail-img2.jpg"
                  }
                  alt=""
                />
              </div>
              <div className=" w-full md:w-[57%]">
                <p className="text-gray-700">
                  Doctors and medical officers sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam
                </p>
                <p className="text-gray-700 mt-3">
                  Duis aute irure dolor in reprehenderit in voluptate.exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in
                </p>
                <p className="text-gray-700 mt-3">
                  Duis aute irure dolor in reprehenderit in voluptate.exercitation
                  ullamco laboris nisi ut dolor in reprehenderit in voluptate.exercitation
                  ullamco laboris nisi ut
                </p>
              </div>
            </div>
            <hr />
            <h2 className="tracking-wide text-[18px] font-semibold my-2">
              HOW CAN WE HELP ?
            </h2>
            <p className="text-gray-700 mb-3">
              Maecenas cursus mauris libero, a imperdiet enim pellentesque id.
              Aliquam erat volutpat. Suspendisse sit amet sapien at risus
              efficitur sagittis Pellentesque.
            </p>

            <div className="flex flex-col md:flex-row justify-between mb-5">
              <div className=" pt-2">
                <ul className="flex flex-col lg:space-y-4 space-y-2 ">
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
              <div className="w-full my-5 md:my-0 md:w-[60%]">
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
            <h2 className="tracking-wide text-[18px] font-semibold my-3">
              WE GIVE BEST SOLUTION !
            </h2>

            <div className="bg-slate-100 flex flex-col ">

              <div className="flex flex-col px-10 ">
                <div onClick={() => setToggle(!toggle)} className="flex justify-between duration-500">
                  {
                    toggle ? <> <h2 className="tracking-wide text-gray-800 text-[16px] font-semibold my-5">
                      We give best solution?
                    </h2>
                      <button className="text-2xl font-bold">-</button></>
                      :
                      <> <h2 className="tracking-wide text-gray-800 text-[16px] font-semibold my-5">
                        We give best solution?
                      </h2>
                        <button className="text-2xl font-bold">+</button></>
                  }
                </div>
                {
                  <p className={`${toggle ? "opacity-100 h-16" : "opacity-0 h-0"} duration-300`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores voluptate, officiis animi beatae veritatis quae magnam officia corporis blanditiis.</p>
                }
              </div>
              <hr />
              <div className="flex flex-col px-10 ">
                <div onClick={() => setToggle(!toggle)} className="flex justify-between duration-500">
                  {
                    toggle ? <> <h2 className="tracking-wide text-gray-800 text-[16px] font-semibold my-5">
                      We give best solution?
                    </h2>
                      <button className="text-2xl font-bold">-</button></>
                      :
                      <> <h2 className="tracking-wide text-gray-800 text-[16px] font-semibold my-5">
                        We give best solution?
                      </h2>
                        <button className="text-2xl font-bold">+</button></>
                  }
                </div>
                {
                  <p className={`${toggle ? "opacity-100 h-16" : "opacity-0 h-0"} duration-300`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores voluptate, officiis animi beatae veritatis quae magnam officia corporis blanditiis.</p>
                }
              </div>
              <hr />

            </div>
          </div>

          <div className="right-service w-full lg:w-[28%] space-y-8 ">
            <Cateogory></Cateogory>
            <SidebarBlog></SidebarBlog>
            <SidebarContact></SidebarContact>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ServiceDetails;
