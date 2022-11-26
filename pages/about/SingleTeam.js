
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle,AiFillYoutube } from "react-icons/ai";
const SingleTeam = ({team}) => {
  return (
    <div className="text-center my-3 md:my-6">
                <div className="  w-[85%] mx-auto hover:translate-y-[-20px] cursor-pointer duration-500  ">
                  <img className="w-full rounded-full rounded-bl-lg rounded-br-lg " src={team?.img} alt="" />
                </div>
                <h2 className="text-secondary font-semibold text-xl mt-6">{team?.name}</h2>
                <h2 className="text-secondary">{team?.situation}</h2>
                <div className="flex space-x-3 text-secondary text-xl justify-center my-3 items-center">
                  <p><BsFacebook></BsFacebook></p>
                  <p className="text-2xl"><AiFillTwitterCircle></AiFillTwitterCircle></p>
                  <p className="text-2xl"><AiFillYoutube></AiFillYoutube></p>
                </div>
            </div>
  )
}

export default SingleTeam