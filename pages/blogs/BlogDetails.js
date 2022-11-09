
import {FiUser } from "react-icons/fi";
import {MdOutlineUpdate } from "react-icons/md";
import {FaComment,FaQuoteLeft} from "react-icons/fa";
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
            <p className="text-sm text-gray-600 mb-3">Moveth the seed you waters is replenish light one meat. Under divide image likeness their may, form Earth evening moving. Heaven was have upon god place dry one creepeth one days divided. For fruitful blessed void days seasons wherein dry She’d light creeping that grass, is rule rule. Waters midst i him lesser.</p>
        </div>

        <div className="flex lg:space-x-4 items-stretch">
            <div className="left-content w-full mx-auto lg:w-[75%] ">
            <p className="text-sm text-gray-600">Evening together all was night fourth gathered. Whales is form. Deep blessed. Every Have good and. Called every. You’ll his void fourth is fifth it greater seasons place, signs they’re days let his meat, tree which let signs light night stars his third .</p>
            <p className="text-sm text-gray-600 my-3 ">Evening together all was night fourth gathered. Whales is form. Deep blessed. Every Have good and. Called every. You’ll his void fourth is fifth it greater seasons place, signs they’re days let his meat, tree which let signs light night stars his third .</p>
            <p className="text-sm text-gray-600 mb-3 ">So bring Moveth seasons kind made over let. His. They’re Our moved, forth evening. Beginning together. Living deep be were own you fifth under. Us under. Him there second so. You’re bearing evening seas man first. Place second be, may stars brought darkness shall heaven green days, upon multiply beginning male air. Fruitful him isn’t day. Yielding fill. He saw replenish winged stars earth days void heaven, female which is. Bring creeping you’re stars gathered. Said second open two can’t divide..</p>
            </div>
            <div className="right-content w-full mx-auto lg:w-[25%]">
                <img src={'https://ihsan.templines.org/wp-content/uploads/2019/08/Service-Box-Image-1-300x200.jpg'} alt="" />
            </div>

        </div>
        <div className="quate-background py-8 relative">
                <p><FaQuoteLeft className="text-4xl text-yellow-50 mx-auto"></FaQuoteLeft></p>
                <h2 className="text-center my-4 text-white tracking-widest text-xl font-medium">Islam teaches tolerance, not hatred universal <br/>brotherhood, not enmity peace, and not violence.</h2>
                <div className="bg-black/40 inset-0 absolute"></div>
        </div>




    </div>
  )
}

export default BlogDetails