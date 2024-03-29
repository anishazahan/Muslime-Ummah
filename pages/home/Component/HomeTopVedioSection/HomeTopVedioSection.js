import { BsPlayCircle, BsFillEyeFill, BsFlagFill } from "react-icons/bs";
const HomeTopVedioSection = () => {
  return (
    <div className="max-width mx-auto my-14 lg:my-28 xl:container">
      <div className="px-7 xl:px-20 flex flex-col lg:flex-row">
        <div className="left-vedio w-full  flex basis-5/12 relative mr-[-6rem]">
          <div className="border-content absolute hidden xl:block">
            <h4 className="watch-vedio-text font-bold">WATCH OUR VIDEO</h4>
          </div>
          <div className="w-full xl:w-4/5 mx-auto xl:mx-0 ml-auto">
            <div className="relative">
              <img
                className="xl:ml-24"
                src={"https://i.ibb.co/qk6htrT/home-Vedio.jpg"}
                alt=""
              />
            </div>
            <BsPlayCircle className="absolute play-btn hidden lg:block"></BsPlayCircle>
          </div>
        </div>
        <div className="right-content basis-8/12 lg:ml-36 ml-0 space-y-7 lg:space-y-6 xl:space-y-9">
          <div className="heading w-full font-extrabold text-2xl tracking-wide text-gray-700">
            <h2 className="mb-1 mt-10 lg:mt-0">In The Name Of Allah </h2>
            <h1> The Beneficent The Merciful</h1>
          </div>
          <img className="w-38" src={"https://i.ibb.co/cXkRvhb/3.png"} alt="" />
          <div className="">
            <p className="text-gray-500 mb-10">
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean itudin. This is Photoshop's sion of
              Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. This is
              Photoshop's versionf Lorem Ipsum. Proin gravida nibh vel velit
              auctor aliquet. Aenean sollicitudin,
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0">
            <div className="vission space-y-5">
              <div className="flex items-center space-x-4">
                <BsFillEyeFill className="visision-icon"></BsFillEyeFill>
                <h1 className="text-[1.2rem] font-bold"> Our Vision</h1>
              </div>
              <p className="text-gray-500 w-10/12">
                Nibh vel velit auctor aliquet. Aenean ituin. This is Photoshop's
                version of Phooshop's sion of Lorem.
              </p>
            </div>
            <div className="mission space-y-5">
              <div className="flex space-x-4 items-center">
                <BsFlagFill className="visision-icon"></BsFlagFill>
                <h1 className="text-xl font-bold"> Our Mission</h1>
              </div>
              <p className="text-gray-500 w-10/12">
                Nibh vel velit auctor aliquet. Aenean ituin. This is Photoshop's
                version of Phooshop's sion of Lorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopVedioSection;
