import Link from 'next/link'

const Banner = () => {
  return (
    <div className='banner-background'>
        <div className="mx-width mx-auto flex flex-col items-center justify-center h-full lg:h-auto ">
            <img className='w-44 h-auto banner-img' src={"https://i.ibb.co/nnwN6t8/banner-Arbi.png"} alt="" />
            <h1 className='font-extrabold text-3xl md:text-5xl lg:text-6xl text-gray-100 mt-10 text-center'>"Keep Your Tongue wet With  </h1>
            <h1  className='font-bold text-3xl md:text-5xl lg:text-6xl text-gray-100 sm:mt-1 md:mt-3 text-center '> The Remember of Allah"</h1>
            <h1 className='font-extrabold text-gray-100 mt-8'>(AL_TIRMIDHI)</h1>
            <div className="baner-btn space-x-4 mt-12">
                <Link href="/" className='py-3 px-8 text-white link underline hover:text-secondary'>Learn More</Link>
                <Link href="/" className='py-4 px-8 outline-none bg-secondary text-white hover:opacity-70'>Join Class</Link>
            </div>
        </div>
        </div>
  )
}

export default Banner