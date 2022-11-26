import React from 'react';
import { useSelector } from 'react-redux';
import SingleDonation from './SingleDonation';
import ServicesBreadcam from "../services/ServicesBreadcam"


const index = () => {
  const donations = useSelector(state => state.donation.donations)
  // console.log(donations)


     return (
          <div className=''>
               <ServicesBreadcam logoText={"Donation"} />
      <div className='flex flex-wrap justify-center mx-auto'>
        {
          donations.map(donation => <SingleDonation key={donation._id} donation={donation} />)
        }
      </div>

           

          </div>
     );
};

export default index;