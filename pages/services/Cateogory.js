import React from 'react'

const Cateogory = () => {
  return (
    <div className="bg-slate-100 flex flex-col pb-8">
        <div className="inline">
          <h2 className="font-semibold border-b-2 border-green-900 inline-block text-[17px] tracking-wide mt-[1.5rem] uppercase my-2 mx-10 mb-4">
        CATEGORIES
          </h2>
        </div>
           <p className='text-gray-700 px-10 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Islamic Books</p>
            <hr />
           <p className='text-gray-700 px-10 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Islamic Scholars</p>
            <hr />
           <p className='text-gray-700 px-10 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Books Reading</p>
            <hr />
           <p className='text-gray-700 px-10 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Haith Reading</p>
            <hr />
           <p className='text-gray-700 px-10 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Holy Time</p>
            <hr />
           <p className='text-gray-700 px-10 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Helping purpose</p>
            <hr />
            

          </div>
  )
}

export default Cateogory