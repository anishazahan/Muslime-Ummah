import React from 'react'



const Donation = () => {
    return (
        <div className='mt-20 lg:mt-40'>
            <section className="max-width mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-stretch">

                    <div className="left-img w-full md:w-6/12 pr-3 mx-auto md:mx-0">
                        <img className='w-full h-full object-cover' src={"https://i.ibb.co/FHxvRPj/donation1.jpg"} alt="" />
                    </div>

                    <div className="right space-y-4 w-full md:w-6/12 pl-3 mx-auto md:mx-0">
                        <h2 className='text-xl font-semibold text-primary'>Give Food & Shelter To Poor</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda porro eligendi quod voluptatum voluptatem vitae, quasi repellat illo ullam hic?</p>
                        <h2 className='text-4xl font-semibold tracking-wide'>Make Your Donation</h2>
                        <div className="input flex  space-x-2">
                            <input className='border w-20 p-2 m-1 outline-primary rounded rounded-full' type="text" placeholder='' value={200} />
                            <input className='border w-20 p-2 m-1 outline-primary rounded rounded-full' type="text" placeholder='' value={300} />
                            <input className='border w-20 p-2 m-1 outline-primary rounded rounded-full' type="text" placeholder='' value={400} />
                            <input className='border w-28 p-2 m-1 outline-primary rounded rounded-full' type="text" placeholder='Other' />
                            {/* <button className='donate-btn'>$200</button>
                    <button className='donate-btn'>$300</button>
                    <button className='donate-btn'>Other</button> */}
                        </div>

                        <form className='w-full'>

                            <div className="input-field flex flex-col md:flex-row w-full">

                                <div className="flex flex-col w-3/5 lg:w-full">
                                    <input className='border p-2 m-1 outline-primary' type="text" placeholder='Your Name' />
                                    <input className='border p-2 m-1 outline-primary' type="text" placeholder='Your Email' />
                                </div>
                                <div className="flex flex-col w-3/5  lg:w-full">
                                    <input className='border p-2 m-1 outline-primary' type="text" placeholder='Your Phone' />
                                    <input className='border p-2 m-1 outline-primary' type="text" placeholder='Your Addrees' />
                                </div>
                            </div>

                            <div className="space-y-4 mt-6">

                                <div className="progressbar w-full">
                                    <h2 className="text-xl">Raise Funds For poor</h2>
                                    <input className='w-3/5 lg:w-full text-primary' type="range" />
                                </div>

                                <div className="flex space-x-8">
                                    <h2>Raised: <span className='font-semibold text-primary'>$400.00</span> </h2>
                                    <h2>Goal: <span className='font-semibold text-primary'>$400.00</span> </h2>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button className='donate'>Donate Now</button>
                            </div>
                        </form>
                    </div>


                </div>
            </section>


        </div>
    )
}

export default Donation