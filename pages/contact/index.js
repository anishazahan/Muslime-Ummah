import ServicesBreadcam from "../services/ServicesBreadcam"
import ContactInfo from "./ContactInfo"


const index = () => {
  return (
    <div>
      <ServicesBreadcam  logoText={'Contact Us'} ></ServicesBreadcam>
        <ContactInfo></ContactInfo>
    </div>
  )
}

export default index