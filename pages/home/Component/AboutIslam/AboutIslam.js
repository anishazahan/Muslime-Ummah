

const AboutIslam = () => {
  return (
    <section className="mx-auto container px-20 flex flex-col lg:flex-row my-28">

      <div className="about-content lg:w-6/12">



      </div>

      <div className="about-img lg:w-6/12 flex space-x-3">

        <div className="flex flex-col space-y-3">
          <img src={'http://kodeforest.net/html/islamic/extra-images/mosque.jpg'} alt="" />
          <img src={"http://kodeforest.net/html/islamic/extra-images/mosque1.jpg"} alt="" />
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