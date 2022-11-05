

const AboutIslam = () => {
  return (
    <section className="mx-auto container text-center lg:text-left px-10 lg:px-20 flex flex-wrap my-28 items-stretch">

      <div className="about-content w-full lg:w-6/12">
        <div className="flex flex-col pr-4">
          <img className="w-52 mx-auto lg:mx-0" src={"http://kodeforest.net/html/islamic/images/hdg-img.png"} alt="" />
          <h2 className="text-2xl font-semibold uppercase text-gray-700 my-3 tracking-wide">About Us</h2>
          <p className="text-gray-400">here are many variations of passages of Lorem Ipsum available, but have suffered alteration in some form, by injected humour, or randomised words of Lorem Ipsum available, but the majority have suffered alteration in some form...</p>
          <div className="flex justify-center lg:justify-start my-10 lg:space-x-6  flex-wrap">

            <div className="flex flex-col mx-3 lg:mx-0">
              <h2 className="h-[100px] w-[100px]  font-semibold text-3xl flex items-center justify-center border border-gray-400 border-2 text-primary rounded-full">10</h2>
              <h2 className=" font-semibold uppercase text-gray-600 my-3 tracking-wide">MADRASAS</h2>
            </div>
            <div className="flex flex-col mx-3 lg:mx-0">
              <h2 className="h-[100px] w-[100px]  font-semibold text-3xl flex items-center justify-center border border-gray-400 border-2 text-primary rounded-full">20</h2>
              <h2 className=" font-semibold uppercase text-gray-600 my-3 tracking-wide">Mosquie</h2>
            </div>
            <div className="flex flex-col mx-3 lg:mx-0">
              <h2 className="h-[100px] w-[100px]  font-semibold text-3xl flex items-center justify-center border border-gray-400 border-2 text-primary rounded-full">500</h2>
              <h2 className=" font-semibold uppercase text-gray-600 my-3 tracking-wide">Students</h2>
            </div>
            <div className="flex flex-col mx-3 lg:mx-0">
              <h2 className="h-[100px] w-[100px]  font-semibold text-3xl flex items-center justify-center border border-gray-400 border-2 text-primary rounded-full">50</h2>
              <h2 className=" font-semibold uppercase text-gray-600 my-3 tracking-wide">Imams</h2>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="px-4 py-2 bg-white border border-2 font-semibold underline text-gray-600">Read More</button>
            <button className="px-4 py-2 bg-primary text-amber-100  font-semibold  text-gray-600">Join Our Activity</button>
          </div>
        </div>

      </div>

      <div className="about-img md:flex hidden justify-center w-full lg:w-6/12 lg:mt-0 mt-5">

        <div className="flex flex-col space-y-3 mr-3">

          <div className="relative img-container">
            <img className="images duration-500" src={'http://kodeforest.net/html/islamic/extra-images/mosque.jpg'} alt="" />
            <div className="img-info">
              <h2 className="text-secondary font-semibold text-xl">Madrasa in Istanbul</h2>
            </div>
          </div>

          <div className="relative img-container">
            <img className="images duration-500" src={'http://kodeforest.net/html/islamic/extra-images/mosque1.jpg'} alt="" />
            <div className="img-info">
              <h2 className="text-secondary font-bold text-xl">Madrasa in Istanbul</h2>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src={"http://kodeforest.net/html/islamic/extra-images/mosque2.jpg"} alt="" />
          <div className="card-info">
            <h2 className="title font-medium">Madrasa in Istanbul</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIslam

