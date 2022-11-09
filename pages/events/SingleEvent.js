import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import moment from 'moment';

const SingleEvent = ({ event }) => {
     let today = moment().format();
     var now = moment(today);//now
     // var date = moment().month("2022-12-10T12:22:51+06:00");
     // var date = "2022-12-10T12:22:51+06:00";
     var month = moment(event.date, 'YYY-MM-DD').format('MMMM')
     var day = moment(event.date, 'YYY-MM-DD').format('DD')
     console.log(month);
     let time_ago = "0 Minute Ago";

     // const minutes = now.diff(date, 'minutes')
     // const hours = now.diff(date, 'hours')
     const days = now.diff(today, 'days')
     // const weeks = now.diff(date, 'weeks')
     // if (minutes <= 60) {
     //      time_ago = `${minutes} Minutes Ago`;
     // }
     // else if (hours <= 24) {
     //      time_ago = `${hours} Hours Ago`;
     // }
     // else if (days <= 7) {
     //      time_ago = `${days} Days Ago`;
     // }
     // else {
     //      time_ago = `${weeks} Weeks Ago`;
     // }
     return (
          <div className='w-[370px] flex flex-col m-5 pb-2 justify-between items-center  rounded-md'>
               <div className='relative'>
                    <img className='rounded-t-md rounded-b-sm w-full' src={event.eventImg} alt="" />
                    <div className='bg-green-500 text-center absolute w-[60px] top-0 left-0 text-white py-2 rounded-tl-md'>
                         <h2 className='leading-none text-2xl'>{day}</h2>
                         <h3>{month.slice(0, 3)}</h3>
                    </div>
               </div>
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