import { useSelector } from "react-redux"
import SingleTeam from "./SingleTeam";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Team = () => {
  const teams = useSelector(state => state.team.team)
  const [allTeam,setAllTeam]=useState(false);

  return (
    <section className="container mx-auto mb-10 lg:mb-20">
        <h2 className="flex justify-center text-xl font-semibold my-20 lg:text-3xl">Our Amazing Team</h2>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 lg:px-20  my-8">
       {
         allTeam? teams?.map(team=><SingleTeam key={team.id} team={team}></SingleTeam>):
         teams?.slice(0,8).map(team=><SingleTeam key={team.id} team={team}></SingleTeam>) 
        }
       </div>

       <div className="mr-auto px-10 text-right flex justify-end text-secondary font-medium lg:px-20 flex items-center ">
        <button className='link underline' onClick={()=>{setAllTeam(!allTeam)}}>{allTeam? 'see less':'See More'}</button>
        <AiOutlineArrowRight></AiOutlineArrowRight>
    </div>
      
    </section>
  )
}

export default Team