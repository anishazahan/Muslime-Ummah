import React, { useEffect, useState } from 'react'
import SingleScholars from './SingleScholars';

const Scholars = () => {

    const [scholars,setScholars] = useState([]);
    useEffect(()=>{
        fetch('schoolars.json')
        .then(res=>res.json())
        .then(data=>setScholars(data));
    },[])
  return (
    <div className='max-width mx-auto mb-20'>

            <div className="text-center space-y-3">
                <h1 className='text-xl font-semibold text-primary'>Our Expert</h1>
                <h1 className='text-4xl text-gray-700 font-semibold'>Islamic Scholars</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 lg:px-28 gap-7 mt-10">
                {
                    scholars.map(scholar=> <SingleScholars key={scholar.id} scholar={scholar}></SingleScholars>  )
                }
            </div>
            <div className="scholar-Background">
              
            </div>


    </div>
  )
}

export default Scholars
