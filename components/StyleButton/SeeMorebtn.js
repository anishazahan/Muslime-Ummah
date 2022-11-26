
import { AiOutlineArrowRight } from "react-icons/ai";



const SeeMorebtn = ({ btnText }) => {
  return (
    <>
      <span
        className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-secondary transition-all duration-500 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
      >
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-500 ease-out group-hover:translate-x-12">
          <AiOutlineArrowRight className="w-5 h-5 text-primary"></AiOutlineArrowRight>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-500">
          <AiOutlineArrowRight className="w-5 h-5 text-white"></AiOutlineArrowRight>
        </span>
        <span className="relative w-full text-left transition-colors duration-500 ease-in-out group-hover:text-white">
          {btnText}
        </span>
      </span>
    </>
  );
};

export default SeeMorebtn;
