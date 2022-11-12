

const ContactMessage = () => {
  return (
    <section className="container lg:px-20 px-10 mx-auto mb-20">
      <h2 className="text-2xl font-semibold mb-10">Send Your message</h2>
            <div className="flex flex-col lg:flex-row">
              <div className="left w-6/12">
                <form>
                <div className="w-full">
              <input
                className="border border-2 px-5 w-full py-3 border-gray-300 placeholder-black outline-none"
                type="text"
                placeholder="Your Name*"
                required
              />
            </div>
                <div className="w-full">
              <input
                className="border border-2 my-8 px-5 w-full py-3 border-gray-300 placeholder-black outline-none"
                type="email"
                placeholder="Your Email*"
                required
              />
            </div>
                <div className="w-full">
             <textarea  className="border border-2 mb-8 px-5 w-full py-3 border-gray-300 placeholder-black outline-none" name="" id="" cols="30" rows="10" placeholder="Your Message*"></textarea>
            </div>
            <div className="">
              <input className="py-2 px-10 bg-primary text-white" type="button" value="Submit" />
            </div>

                </form>
              </div>
              <div className="right w-612">
                <img className="w-full" src={''} alt="" />
              </div>
            </div>

    </section>
  )
}

export default ContactMessage