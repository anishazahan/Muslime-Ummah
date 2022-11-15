import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import ProgressBar from '@ramonak/react-progress-bar/dist/index';
import moment from 'moment';

const SingleDonation = ({ donation }) => {
     console.log(donation);
     const formatedDate = moment(donation.date, 'YYYY-MM-DD').format('MMM DD YYYY')

     // get percentage 
     const raised = donation.raised;
     const goal = donation.goal;
     var percentage = parseInt(100-(+Math.abs(100 - raised / goal * 100).toFixed(10)));

     return (
          <div className='w-[370px] flex flex-col m-5 pb-2 justify-between items-center  rounded-md'>
               <div className='relative'>
                    <img className='rounded-t-md rounded-b-sm w-full' src={donation.donationImg} alt="" />

               </div>
               <div className='text-[#555555] p-3'>
                    <h3 className='text-xl text-black'>{donation.donationName}</h3>
                    <div className='flex text-xs space-x-5 py-3.5'>
                         <p className='flex'>
                              <FaRegCalendarAlt className='mr-2 text-primary'></FaRegCalendarAlt> {formatedDate}
                         </p>
                         <p className='flex'>
                              <AiOutlineUser className='mr-2 text-primary text-sm'></AiOutlineUser> {donation.leader}
                         </p>
                    </div>
                    <p className='text-sm'>{donation.donationDescription}</p>
                    <div className='my-3'>
                         <ProgressBar
                              completed={percentage}
                              bgColor="#0e820e"
                              baseBgColor="#c6ffc6"
                              height="11px"
                              labelColor="#ffffff"
                              labelSize="10px"
                              animateOnRender
                              maxCompleted={100}
                              customLabel={`${percentage}%`}
                         />
                    </div>
                    <div className='flex justify-between'>
                         <h3>Raised: <span className='text-primary px-2'>${donation.raised}</span></h3>
                         <h3>Goal: <span className='text-primary px-2'>${donation.goal}</span></h3>
                    </div>
               </div>
          </div>
     );
};

export default SingleDonation;