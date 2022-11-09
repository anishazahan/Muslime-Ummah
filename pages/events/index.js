import { useSelector } from "react-redux"
import SingleEvent from "./SingleEvent";
import ServicesBreadcam from "../services/ServicesBreadcam"

const Events = () => {
  const events = useSelector(state => state.event.events)
  // console.log(events);
  return (
    <div>
      <ServicesBreadcam logoText={"Events"} />
      <div className='flex flex-wrap justify-center mx-auto'>
        {
          events.map(event => <SingleEvent event={event} />)
        }
      </div>
    </div>
  )
}

export default Events