import { useSelector } from "react-redux"
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle,AiFillYoutube } from "react-icons/ai";

const Team = () => {
  const teams = useSelector(state => state.team.team)
    //  console.log(team);

  return (
    <section className="container mx-auto">
        <h2 className="flex justify-center text-xl font-semibold my-20 lg:text-3xl">Our Amazing Team</h2>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 lg:px-20  my-8">
       {
          teams?.map(team=>{
            return <div className="text-center my-6">
                <div className="  w-[85%] mx-auto hover:translate-y-[-20px] cursor-pointer duration-500  ">
                  <img className="w-full rounded-full rounded-bl-lg rounded-br-lg " src={team.img} alt="" />
                </div>
                <h2 className="text-secondary font-semibold text-xl mt-6">{team.name}</h2>
                <h2 className="text-secondary">{team.situation}</h2>
                <div className="flex space-x-3 text-secondary text-xl justify-center my-3 items-center">
                  <p><BsFacebook></BsFacebook></p>
                  <p className="text-2xl"><AiFillTwitterCircle></AiFillTwitterCircle></p>
                  <p className="text-2xl"><AiFillYoutube></AiFillYoutube></p>
                </div>
            </div>

          })
        }
       </div>
      
    </section>
  )
}

export default Team