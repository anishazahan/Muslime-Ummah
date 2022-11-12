import { MdLocationPin } from "react-icons/md";

const ContactInfo = () => {
  return (
    <section className="my-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-20 mx-auto">
            <div className="contactInfo-box py-12">
            <div className="flex items-center border-green-800 mx-12 border-dashed border-b-2 justify-center">
                <p><MdLocationPin className='text-4xl text-primary'></MdLocationPin></p>
                <h2 className="text-2xl font-semibold">Our location</h2>
            </div>
            <div className="text-center mt-8">
              <h2 className="text-[16px] text-gray-700">360 Warner Street.</h2>
              <h2 className="text-[16px] text-gray-700">Dhaka,Bangladesh</h2>
            </div>
            </div>

        </div>
    
    
    </section>
  )
}

export default ContactInfo