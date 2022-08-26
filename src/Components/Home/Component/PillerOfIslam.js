import React from 'react'
import "./PillerOfIslam.css"
import img1 from '.././../../img/pillerImg1.png'
import img2 from '.././../../img/pillerIslam2.png'
import img3 from '.././../../img/pillerIslam3.png'
import img4 from '.././../../img/pillerIslam4.png'
import img5 from '.././../../img/pillerislam5.png'

const PillerOfIslam = () => {
  return (
    <section className='mb-20'>

        <div className="text-center space-y-6">
            <h2 className='font-semibold text-[18px] text-primary'>Islamic Pillers</h2>
            <h1 className='text-3xl font-semibold'>5 Islamic Pillers of Islam</h1>
            <p className=" px-6 md:w-1/2 text-[16px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
        </div>


        <div className=" mt-8 cards grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-5 mx-auto max-width px-20">


            <div className="card  border-none text-center px-12 lg:px-16 shrink-0 rounded-none py-12 space-y-4 hover:space-y-5 ease-in duration-300 ">
                <img className='piller-img' src={img1} alt="" />
                <h1 className="text-xl font-semibold">Shahada</h1>
                <p className="text-primary text-xs font-medium">(faith)</p>
            </div>
            <div className="card  border-none text-center px-12 lg:px-16 shrink-0 px-20 py-12 space-y-4  rounded-none ">
                <img className='piller-img' src={img2} alt="" />
                <h1 className="text-xl font-semibold">Shahada</h1>
                <p className="text-primary text-xs font-medium">(faith)</p>
            </div>
        
            <div className="card  border-none text-center px-12 lg:px-16 shrink-0 px-20 py-12 space-y-4  rounded-none  ">
                <img className='piller-img' src={img3} alt="" />
                <h1 className="text-xl font-semibold">Shahada</h1>
                <p className="text-primary text-xs font-medium">(faith)</p>
            </div>

            <div className="card  border-none text-center px-12 lg:px-16 shrink-0 px-20 py-12 space-y-4  rounded-none  ">
                <img className='piller-img' src={img4} alt="" />
                <h1 className="text-xl font-semibold">Shahada</h1>
                <p className="text-primary text-xs font-medium">(faith)</p>
            </div>
            <div className="card  border-none text-center px-12 lg:px-16 shrink-0 px-20 py-12 space-y-4  rounded-none  ">
                <img className='piller-img' src={img5} alt="" />
                <h1 className="text-xl font-semibold">Shahada</h1>
                <p className="text-primary text-xs font-medium">(faith)</p>
            </div>
            </div>

    </section>
  )
}

export default PillerOfIslam
