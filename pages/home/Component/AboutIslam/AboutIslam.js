

const AboutIslam = () => {
  return (
    <section className="mx-auto container px-20 flex flex-col lg:flex-row my-28">

      <div className="about-content lg:w-6/12">
        <div className="flex flex-col">
            <img className="w-52" src={"http://kodeforest.net/html/islamic/images/hdg-img.png"} alt="" />
            <h2 className="text-2xl font-semibold tracking-wide">About Us</h2>
        </div>

      </div>

      <div className="about-img lg:w-6/12 flex space-x-3">

        <div className="flex flex-col space-y-3">

         <div className="relative img-container">
         <img className="images duration-500" src={'http://kodeforest.net/html/islamic/extra-images/mosque.jpg'} alt="" />
         <div className="img-info">
            <h2 className="text-secondary font-semibold text-xl">Madrasa in Istanbul</h2>
          </div>
         </div>

         <div className="relative img-container">
         <img className="images duration-500" src={'http://kodeforest.net/html/islamic/extra-images/mosque1.jpg'} alt="" />
         <div className="img-info">
            <h2 className="text-secondary font-semibold text-xl">Madrasa in Istanbul</h2>
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

