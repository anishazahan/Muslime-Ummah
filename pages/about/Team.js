import { useSelector } from "react-redux"

const Team = () => {
  const team = useSelector(state => state.team.team)
    //  console.log(team);

  return (
    <div className="container mx-auto">
        <h2 className="flex justify-center text-xl font-semibold my-20 lg:text-3xl">Our Amazing Team</h2>
      
    </div>
  )
}

export default Team