import Link from "next/link";
import StyleBtn from "../../../../components/StyleButton/StyleBtn";

const AboutIslam = () => {
  return (
    <section className="mx-auto container text-center w-full xl:text-left px-10 lg:px-20 flex flex-wrap my-28 items-stretch bg-green-100 xl:bg-white">
      <div className="about-content w-full xl:w-6/12 ">
        <div className="flex flex-col pr-4">
          <div className="mx-auto xl:mx-0 pt-14">
            <img
              className="w-52 "
              src={"http://kodeforest.net/html/islamic/images/hdg-img.png"}
              alt=""
            />
          </div>
          <h2 className="text-2xl font-semibold uppercase text-gray-700 my-3 tracking-wide">
            About Us
          </h2>
          <p className="text-gray-400">
            here are many variations of passages of Lorem Ipsum available, but
            have suffered alteration in some form, by injected humour, or
            randomised words of Lorem Ipsum available, but the majority have
            suffered alteration in some form...
          </p>
          <div className="flex justify-center mx-auto xl:mx-0 lg:justify-start my-10 lg:space-x-6  flex-wrap">
            <div className="flex flex-col mx-3 lg:mx-0">
              <h2 className="h-[100px] w-[100px]  font-semibold text-3xl flex items-center justify-center border border-gray-400 border-2 text-primary rounded-full">
                10
              </h2>
              <h2 className=" font-semibold uppercase text-gray-600 my-3 tracking-wide">
                MADRASAS
              </h2>
            </div>
            <div className="flex flex-col mx-3 lg:mx-0">
              <h2 className="h-[100px] w-[100px]  font-semibold text-3xl flex items-center justify-center border border-gray-400 border-2 text-primary rounded-full">
                20
              </h2>
              <h2 className=" font-semibold uppercase text-gray-600 my-3 tracking-wide">
                Mosquie
              </h2>
            </div>
            <div className="flex flex-col mx-3 lg:mx-0">
              <h2 className="h-[100px] w-[100px]  font-semibold text-3xl flex items-center justify-center border border-gray-400 border-2 text-primary rounded-full">
                500
              </h2>
              <h2 className=" font-semibold uppercase text-gray-600 my-3 tracking-wide">
                Students
              </h2>
            </div>
            <div className="flex flex-col mx-3 lg:mx-0">
              <h2 className="h-[100px] w-[100px]  font-semibold text-3xl flex items-center justify-center border border-gray-400 border-2 text-primary rounded-full">
                50
              </h2>
              <h2 className=" font-semibold uppercase text-gray-600 my-3 tracking-wide">
                Imams
              </h2>
            </div>
          </div>
          <div className="flex justify-center mx-auto xl:mx-0 lg:justify-start space-x-4">
            <Link
              href='/'
              className=" relative px-5 py-3 underline overflow-hidden font-medium text-secondary font-semibold bg-gray-100  border border-gray-100 rounded-0  shadow-inner group"
            >
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-secondary opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                See More
              </span>
            </Link>

            <StyleBtn btnText={'Join Our Activity'}></StyleBtn>
          </div>
        </div>
      </div>

      <div className="about-img md:flex hidden justify-center  w-full lg:w-6/12 lg:mt-0 pt-20">
        <div className="flex flex-col space-y-3 mr-3 hidden xl:block">
          <div className="relative img-container">
            <img
              className="images duration-500"
              src={"http://kodeforest.net/html/islamic/extra-images/mosque.jpg"}
              alt=""
            />
            <div className="img-info">
              <h2 className="text-secondary font-semibold text-xl">
                Madrasa in Istanbul
              </h2>
            </div>
          </div>

          <div className="relative img-container">
            <img
              className="images duration-500"
              src={
                "http://kodeforest.net/html/islamic/extra-images/mosque1.jpg"
              }
              alt=""
            />
            <div className="img-info">
              <h2 className="text-secondary font-bold text-xl">
                Madrasa in Istanbul
              </h2>
            </div>
          </div>
        </div>
        <div className="card hidden xl:block">
          <img
            className="card-img"
            src={"http://kodeforest.net/html/islamic/extra-images/mosque2.jpg"}
            alt=""
          />
          <div className="card-info">
            <h2 className="title font-medium">Madrasa in Istanbul</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIslam;
