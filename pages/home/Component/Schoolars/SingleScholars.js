
import styles from './Scholars.module.css'
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption} from "react-icons/gr";

const SingleScholars = (props) => {
  console.log(props);
  const { img, name, tittle } = props.scholar;
  return (
    <div className=' relative'>
      <div className="">
        <img className='w-full rounded-0' src={img} alt="" />
      </div>
      <div className="absolute right-5 left-5 py-8 bottom-[-3rem] bg-primary text-white rounded-md flex flex-col justify-center items-center">
        <h1>{name}</h1>

        <h1>{tittle}</h1>
        <div className="flex space-x-3 mt-3">
          <p className='text-xl'><FaFacebookF></FaFacebookF></p>
          <p className='text-xl'><AiOutlineTwitter></AiOutlineTwitter></p>
          <p className='text-xl'><GrLinkedinOption></GrLinkedinOption></p>
        </div>
      </div>

    </div>
  )
}

export default SingleScholars