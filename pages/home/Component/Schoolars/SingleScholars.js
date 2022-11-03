

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption} from "react-icons/gr";

const SingleScholars = (props) => {
  // console.log(props);
  const { img, name, tittle } = props.scholar;
  return (
    <div className=' relative scholar_img duration-150 group mb-14 '>
      <div className=" duration-100">
        <img className='w-full rounded-0' src={img} alt="" />
      </div>
      <div className=" duration-500 scholar_info absolute right-5 z-30 left-5 py-8 bottom-[-3rem] bg-white shadow-lg text-secondary rounded-md flex flex-col justify-center items-center">
        <h1>{name}</h1>
        <h1>{tittle}</h1>
        <div className="flex space-x-3 mt-3">
          <p className='text-xl'><FaFacebookF></FaFacebookF></p>
          <p className='text-xl'><AiOutlineTwitter></AiOutlineTwitter></p>
          <p className='text-xl'><GrLinkedinOption></GrLinkedinOption></p>
        </div>
      </div>
      <div className="bg-black/0 group-hover:bg-black/50 absolute z-20 h-full w-full inset-0 duration-500"></div>

    </div>
  )
}

export default SingleScholars