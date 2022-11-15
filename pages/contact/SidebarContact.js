
import { IoMdCall } from "react-icons/io";

const SidebarContact = () => {
  return (
    <div className="bg-slate-100 flex flex-col pb-10">
    <div className="inline">
      <h2 className="font-semibold border-b-2 border-green-900 inline-block text-[16px] tracking-wide mt-[1.5rem] uppercase my-2 mx-10 mb-4">
    Contact Us
      </h2>
    </div>
   <div className="px-6 mb-8">
    <p className="italic text-gray-600 mt-3 mb-5 text-sm">We here to help in anything you need. Call us on below number.</p>
    <div className="flex items-center justify-center bg-secondary py-2 text-amber-100 cursor-pointer ">
        <IoMdCall className=""></IoMdCall>
        <h2 className="font-semibold">+9675-768-75764</h2>
    </div>
   </div>
   <div className="inline">
      <h2 className="font-semibold border-b-2 border-green-900 inline-block text-[16px] tracking-wide mt-[1.5rem] uppercase my-2 mx-6 mb-6">
    WORKING TIMES
      </h2>
    </div>
           <div className="flex justify-between items-center px-6">
           <p className='text-gray-700 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Saturday</p>
           <p>9:00am-5:00pm</p>
           </div>
            <hr />
            <div className="flex justify-between items-center px-6">
           <p className='text-gray-700 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Saturday</p>
           <p>9:00am-5:00pm</p>
           </div>
            <hr />
            <div className="flex justify-between items-center px-6">
           <p className='text-gray-700 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Sunday</p>
           <p>9:00am-5:00pm</p>
           </div>
            <hr />
            <div className="flex justify-between items-center px-6">
           <p className='text-gray-700 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Monday</p>
           <p>9:00am-5:00pm</p>
           </div>
            <hr />
            <div className="flex justify-between items-center px-6">
           <p className='text-gray-700 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Wednesday</p>
           <p>9:00am-5:00pm</p>
           </div>
            <hr />
            <div className="flex justify-between items-center px-6">
           <p className='text-gray-700 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Thurseday</p>
           <p>9:00am-5:00pm</p>
           </div>
            <hr />
            <div className="flex justify-between items-center px-6">
           <p className='text-gray-700 my-2 hover:bg-primary duration-500 hover:text-green-800 hover:tracking-widest cursor-pointer'>Friday</p>
           <p>9:00am-5:00pm</p>
           </div>
      
        

      </div>
  )
}

export default SidebarContact