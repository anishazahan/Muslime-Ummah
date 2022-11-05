import React from 'react'


const PillerOfIslam = () => {
  return (
    <section className='mb-20 mt-14 xl:container mx-auto'>
        <div className="text-center space-y-6">
            <h2 className='font-semibold text-[18px] text-primary'>Islamic Pillers</h2>
            <h1 className='text-3xl font-semibold'>5 Islamic Pillers of Islam</h1>
            <p className=" px-6 md:w-1/2 text-[16px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
        </div>

        <div className=" mt-8 cards grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 lg:grid-cols-5 mx-auto max-width px-5 lg:px-20">
            <div className="pillerOfIslamCard border-none text-center px-12 lg:px-16 shrink-0 rounded-none py-12 space-y-4 hover:space-y-5 ease-in duration-300 ">
                <img className='piller-img' src={"https://i.ibb.co/qkKnCyH/piller-Img1.png"} alt="" />
                <h1 className="text-xl font-semibold">Shahada</h1>
                <p className="text-primary text-xs font-medium">(faith)</p>
            </div>
            <div className="pillerOfIslamCard  border-none text-center px-12 lg:px-16 shrink-0 px-20 py-12 space-y-4  rounded-none ">
                <img className='piller-img' src={"https://i.ibb.co/yqbY3gm/piller-Islam2.png"} alt="" />
                <h1 className="text-xl font-semibold">Shahada</h1>
                <p className="text-primary text-xs font-medium">(faith)</p>
            </div>
        
            <div className="pillerOfIslamCard  border-none text-center px-12 lg:px-16 shrink-0 px-20 py-12 space-y-4  rounded-none  ">
                <img className='piller-img' src={"https://i.ibb.co/g3yCyf4/piller-Islam3.png"} alt="" />
                <h1 className="text-xl font-semibold">Shahada</h1>
                <p className="text-primary text-xs font-medium">(faith)</p>
            </div>

            <div className="pillerOfIslamCard  border-none text-center px-12 lg:px-16 shrink-0 px-20 py-12 space-y-4  rounded-none  ">
                <img className='piller-img' src={"https://i.ibb.co/ft8GQNH/piller-Islam4.png"} alt="" />
                <h1 className="text-xl font-semibold">Shahada</h1>
                <p className="text-primary text-xs font-medium">(faith)</p>
            </div>
            <div className="pillerOfIslamCard  border-none text-center px-12 lg:px-16 shrink-0 px-20 py-12 space-y-4  rounded-none  ">
                <img className='piller-img' src={"https://i.ibb.co/ZMPw561/pillerislam5.png"} alt="" />
                <h1 className="text-xl font-semibold">Shahada</h1>
                <p className="text-primary text-xs font-medium">(faith)</p>
            </div>
            </div>

    </section>
  )
}

export default PillerOfIslam
