import { useSelector } from "react-redux"

const Team = () => {
  const teams = useSelector(state => state.team.team)
    //  console.log(team);

  return (
    <div className="container mx-auto">
        <h2 className="flex justify-center text-xl font-semibold my-20 lg:text-3xl">Our Amazing Team</h2>
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 lg:px-20">
       {
          teams.map(team=>{
            return <div className="">
              
            </div>

          })
        }
       </div>
      
    </div>
  )
}

export default Team