import { MdLocationPin } from "react-icons/md";

const ContactInfo = () => {
  return (
    <section className="my-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-20 mx-auto">
            <div className="contactInfo-box">
            <div className="flex items-center">
                <p><MdLocationPin className='text-4xl text-primary'></MdLocationPin></p>
                <h2 className="">Our location</h2>
            </div>
            </div>

        </div>
    
    
    </section>
  )
}

export default ContactInfo