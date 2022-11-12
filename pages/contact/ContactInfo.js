import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneInboundFill,BsFillEnvelopeFill } from "react-icons/bs";


const ContactInfo = () => {
  return (
    <section className="my-20 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6  md:px-20 mx-auto space-y-4 lg:space-y-0 space-x-9">
    {/* ///////------c
    location/////// */}

        <div className="contactInfo-box py-12 hover:bg-slate-200 duration-500 cursor-pointer">
            <div className="flex space-x-2 items-center border-green-800 mx-12 border-dashed border-b-2 justify-center">
                <p><MdLocationPin className='text-4xl text-primary'></MdLocationPin></p>
                <h2 className="text-2xl font-semibold">Our location</h2>
            </div>
            <div className="text-center mt-8">
              <h2 className="text-[16px] text-gray-700">360 Warner Street.</h2>
              <h2 className="text-[16px] text-gray-700">Dhaka,Bangladesh</h2>
            </div>
            </div>

            {/* ///////------
        Phone/////// */}
            <div className="contactInfo-box py-12 hover:bg-slate-200 duration-500 cursor-pointer">
            <div className="flex items-center space-x-2 border-green-800 mx-12 border-dashed border-b-2 justify-center">
                <p><BsFillTelephoneInboundFill className='text-2xl text-primary'></BsFillTelephoneInboundFill></p>
                <h2 className="text-2xl font-semibold">Phone Us</h2>
            </div>
            <div className="text-center mt-8">
              <h2 className="text-[16px] text-gray-700">+789576453</h2>
              <h2 className="text-[16px] text-gray-700">+786534445</h2>
            </div>
            </div>

            {/* ///////------
                      Email us/////// */}
            <div className="contactInfo-box py-12 hover:bg-slate-200 duration-500 cursor-pointer text-center">
            <div className="flex items-center space-x-2 border-green-800 mx-12 border-dashed border-b-2 justify-center">
                <p><BsFillEnvelopeFill className='text-2xl text-primary'></BsFillEnvelopeFill></p>
                <h2 className="text-2xl font-semibold">Email Us</h2>
            </div>
            <div className="text-center mt-8">
              <h2 className="text-[16px] text-gray-700">anishazahan@gmail.com</h2>
              <h2 className="text-[16px] text-gray-700">rakib@gmail.com</h2>
            </div>
            </div>
          
        </div>
    
    
    </section>
  )
}

export default ContactInfo