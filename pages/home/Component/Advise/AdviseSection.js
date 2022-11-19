import "./AdviseSection";
import { FaQuoteLeft, FaMosque } from "react-icons/fa";

const AdviseSection = () => {
  return (
    <>
      <div className="xl:container mx-auto my-28">
        <div className=" flex flex-col lg:flex-row px-10">
          <div className="left flex flex-col w-full space-y-8 xl:mt-16 2xl:space-x-3">
            <div className="quote flex">
              <FaQuoteLeft className="text-primary font-bold text-5xl mr-3"></FaQuoteLeft>
              <h1 className="text-3xl font-semibold">
                Take Good Advice From People Who Pronounce It Though He Does Not
                Practice
              </h1>
            </div>
            <h1 className="quote italic leading-8 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod diti tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minimsa veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip exea commodo consequat.
            </h1>

            <div className="flex flex-col md:flex-row">
              <div className=" mr-8 space-y-2">
                <div className="flex items-baseline">
                  <FaMosque className="text-primary font-bold mr-2"></FaMosque>
                  <p className="">Join The Islamic Community</p>
                </div>
                <div className="flex items-baseline">
                  <FaMosque className="text-primary font-bold mr-2"></FaMosque>
                  <p className="">Join The Islamic Community</p>
                </div>
                <div className="flex items-baseline">
                  <FaMosque className="text-primary font-bold mr-2"></FaMosque>
                  <p className="">Join The Islamic Community</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline">
                  <FaMosque className="text-primary font-bold mr-2"></FaMosque>
                  <p className="">Join The Islamic Community</p>
                </div>
                <div className="flex items-baseline">
                  <FaMosque className="text-primary font-bold mr-2"></FaMosque>
                  <p className="">Join The Islamic Community</p>
                </div>
                <div className="flex items-baseline">
                  <FaMosque className="text-primary font-bold mr-2"></FaMosque>
                  <p className="">Join The Islamic Community</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi Duis aute irure.
            </p>
            <div className="">
              <button className=" ">
                <a
                  href="/"
                  class="relative px-5 py-2 font-medium text-white group"
                >
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-primary group-hover:bg-primary group-hover:skew-x-12"></span>
                  <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-secondary group-hover:bg-primary group-hover:-skew-x-12"></span>
                  <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-primary -rotate-12"></span>
                  <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-secondary -rotate-12"></span>
                  <span class="relative">Learn More</span>
                </a>
              </button>
            </div>
          </div>

          <div className="right adviseImg ">
            <img
              className=" h-full mt-8 lg:mt-0 rounded lg:rounded-t-full w-4/6  lg:w-full mx-auto lg:mx-0"
              src={"https://i.ibb.co/Mchkhqb/advise.jpg"}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdviseSection;
