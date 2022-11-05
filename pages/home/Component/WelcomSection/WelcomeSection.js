import WelcomeSlider from "./WelcomeSlider"



const WelcomeSection = () => {
  return (

    <div className=" px-5 lg:px-20 mx-auto xl:container lg:text-left text-center">
      <div className="hero-content flex flex-col lg:flex-row w-full h-auto lg:h-[400px] xl:space-x-4 ">
        <div className="basis-6/12 mr-5 slider-container">
          <WelcomeSlider />
        </div>
        <div className=' space-y-6 basis-6/12'>
          <div className="">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mt-10 md:mt-14 lg:mt-0 2xl:mt-10">Welcome to Muslime Ummah</h1>
            <p className="text-[18px] text-primary font-semibold mt-4 welcome-heading"> to Achieve Spiritual Goals
            </p>
          </div>
          <hr className={`welcomeHr`}></hr>
          <div className="text-gray-700 text-[15px] text-gray-600 space-y-3">
            <p className="">
              Namaz is broadcast the jaguar far darn dukooka burra before thus and before ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor ncid parrot withdrew less a darn overheard foolish ran forwards.
            </p>

            <p className="">
              Consectetur adipisicing elit sed eiusmod tempor ncid parrot withdrew less a darn overheard foolish ran forwards. Labore et dolore magna aliqua enim ad minim veniam quis nostrud exerc eitation nisi ut aliquip ex ea consequat duis aute irure doly reprehenderit.
            </p>
          </div>
          <button className="py-4 px-6 outline-0 bg-primary text-white text-xl rounded-sm hover:bg-secondary">Ask About Islam</button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection