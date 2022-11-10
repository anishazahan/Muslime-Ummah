import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import moment from 'moment';

const SingleEvent = ({ event }) => {
     const today = moment().format();
     const now = moment(today);
     const month = moment(event.date, 'YYY-MM-DD').format('MMMM')
     const day = moment(event.date, 'YYY-MM-DD').format('DD')
     const minutes = now.diff(event.date, 'minutes')
     console.log(now);
     const eventRemaining = moment
          .utc().startOf('year').add({ minutes: Math.abs(minutes) })
          .format('D [Days,]HH[ Hours,]mm [Minutes]')
          .split(",");

     // console.log(eventRemaining);

     return (
          <div className='w-[370px] flex flex-col m-5 pb-2 justify-between items-center  rounded-md'>
               <div className='relative'>
                    <img className='rounded-t-md rounded-b-sm w-full' src={event.eventImg} alt="" />
                    <div className='bg-green-500 bg-opacity-90 text-center absolute w-[65px] top-0 left-0 text-white py-2 rounded-tl-md'>
                         <h2 className='leading-none text-2xl'>{day}</h2>
                         <h3>{month.slice(0, 3)}</h3>
                    </div>
                    {
                         minutes < 0 ?
                              <div className='bg-green-500 bg-opacity-90 text-center absolute w-full bottom-0 left-0 text-white py-2 rounded text-[19px] flex justify-center'>
                                   {
                                        eventRemaining.map(eventTime => <h3
                                             className='w-3/12 border-r last:border-r-0 text-lg text-center px-4'
                                        >{eventTime}</h3>)
                                   }
                              </div>
                              :
                              <div className='bg-red-500 bg-opacity-90 text-center absolute w-full bottom-0 left-0 text-white py-4 rounded text-[19px] flex justify-center'>
                                   <h3 className='text-lg'
                                        >This Event is Over</h3>
                              </div>
                    }

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