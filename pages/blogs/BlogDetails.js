
import {FiUser } from "react-icons/fi";
import {MdOutlineUpdate } from "react-icons/md";
import {FaComment } from "react-icons/fa";
const BlogDetails = () => {
  return (
    <div className="container px-10 lg:px-20 mx-auto my-28">

        <div className="blogDetails-img w-[70%] relative overflow-hidden">
            <img className="w-full h-full hover:scale-[1.2] duration-700" src={'https://ihsan.templines.org/wp-content/uploads/2019/07/post004.jpg'} alt="" />
            <div className="flex absolute left-4 right-0 bottom-7 space-x-2">
                <button className="text-xs rounded text-white px-3 py-2 bg-primary">Prayer Service</button>
                <button className="text-xs rounded text-white px-3 py-2 bg-primary">Ramdan</button>
            </div>
        </div>

        <div className="flex my-4 space-x-6">
            <div className="flex items-center space-x-1">
                <p><FiUser className=" text-primary font-semibold"></FiUser></p>
                <h2 className="text-xs text-gray-500"> By Zaymund Alex </h2>
            </div>
            <div className="flex items-center space-x-1">
                <p><MdOutlineUpdate className=" text-primary font-semibold"></MdOutlineUpdate></p>
                <h2 className="text-xs text-gray-500"> July 30, 2019 </h2>
            </div>
            <div className="flex items-center space-x-1">
                <p><FaComment className=" text-black font-semibold"></FaComment></p>
                <h2 className="text-xs text-gray-500"> 1 comments </h2>
            </div>
        </div>
        <div className="">
            <p className="text-sm text-gray-600">Moveth the seed you waters is replenish light one meat. Under divide image likeness their may, form Earth evening moving. Heaven was have upon god place dry one creepeth one days divided. For fruitful blessed void days seasons wherein dry She’d light creeping that grass, is rule rule. Waters midst i him lesser.</p>
        </div>
        <div className="">
            
        </div>




    </div>
  )
}

export default BlogDetails