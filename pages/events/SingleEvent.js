import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

const SingleEvent = ({ event }) => {
     return (
          <div className='w-[370px] flex flex-col m-5 pb-2 justify-between items-center  rounded-md'>
               <img className='rounded-md w-full' src={event.eventImg} alt="" />
               <div className='text-[#555555] p-3'>
                    <h3 className='text-xl text-black'>{event.eventName}</h3>
                    <div className='flex text-xs space-x-5 py-3.5'>
                         <p className='flex'>
                              <FaRegCalendarAlt className='mr-2 text-primary'></FaRegCalendarAlt> {event.location}
                         </p>
                         <p className='flex'>
                              <AiOutlineUser className='mr-2 text-primary text-sm'></AiOutlineUser> {event.time}
                         </p>
                    </div>
                    <p className='text-sm'>{event.eventDescription}</p>
                    <button className='mt-4 hover:text-green-600 duration-300'>View Details</button>
               </div>
          </div>
     );
};

export default SingleEvent;