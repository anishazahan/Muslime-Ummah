

const Remember = () => {
  return (
    <section className="remember-background px-10 lg:px-20 text-gray-100 pt-[6%] 2xl:container mx-auto">
        <div className="flex container">
        <div className="remember-left text-center lg:text-left lg:w-6/12">
        <h2 className='text-2xl md:text-3xl font-semibold tracking-wide'>Make Your Donation</h2>
        <p className="mt-2">WEEKELY PROGRAMS FOR TAFSEER UL QURAN</p>
        <p className="text-sm my-4 mb-8 w-full">There are many variations of passages of Lorem Ipsum available, but the suffered alteration in some form, by injected humour, or randomised words but the majority have suffered alteration in some form, by injected humour, or randomised words...</p>
        <div className="pt-4 space-x-4">
            <button className="border border-emerald-100 py-[.6rem] px-5">view More</button>
            <button className="py-3 px-5 bg-secondary font-medium">Contact Us</button>
        </div>
        </div>
        <div className="remember-right w-full lg:w-6/12 flex justify-end ml-[8rem] hidden lg:block">
            <img className=" mt-[-5rem] lg:mt-[-8rem]" src={'http://kodeforest.net/html/islamic/images/pray.png'} alt="" />
        </div>
        </div>


    </section>
  )
}

export default Remember