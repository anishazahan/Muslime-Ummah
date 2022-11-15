import ServicesBreadcam from "../services/ServicesBreadcam"
import ContactInfo from "./ContactInfo"
import ContactMessage from "./ContactMessage"


const index = () => {
  return (
    <div>
      <ServicesBreadcam  logoText={'Contact Us'} ></ServicesBreadcam>
        <ContactInfo></ContactInfo>
        <ContactMessage></ContactMessage>
    </div>
  )
}

export default index