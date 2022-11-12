import { MdLocationPin } from "react-icons/md";

const SingleContactInfo = () => {
  return (
    <div className="contactInfo-box py-12 hover:bg-slate-200 duration-500 cursor-pointer">
            <div className="flex items-center border-green-800 mx-12 border-dashed border-b-2 justify-center">
                <p><MdLocationPin className='text-4xl text-primary'></MdLocationPin></p>
                <h2 className="text-2xl font-semibold">Our location</h2>
            </div>
            <div className="text-center mt-8">
              <h2 className="text-[16px] text-gray-700">360 Warner Street.</h2>
              <h2 className="text-[16px] text-gray-700">Dhaka,Bangladesh</h2>
            </div>
            </div>
  )
}

export default SingleContactInfo