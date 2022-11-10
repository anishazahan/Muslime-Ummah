import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import moment from 'moment';

const HomeBlogEvent = () => {
     let blogs = useSelector(state => state.blog.blogs).slice(0, 2)
     let events = useSelector(state => state.event.events).slice(0, 3)
     // console.log(events)



     return (
          <div className='px-10 lg:px-20'>
               <div className="text-center space-y-3 mb-10">
                    <h1 className='text-xl font-semibold'>Latest News & Updates</h1>
                    <h1 className='text-4xl text-gray-700 font-semibold'>Our Blog & Events</h1>
               </div>
               <div className='flex justify-between h-[450px]'>
                    <div className='w-7/12 flex flex-col justify-between'>
                         {
                              blogs.map(blog => {
                                   return (
                                        <div className='homeBlog flex justify-between items-center shadow-[0px_0px_20px_0px_#d6d6d6] rounded-md'>
                                             <div className='homeBlogImg mr-5 rounded-l'>
                                                  <img className='rounded-l' src={blog.blogImg} alt="" />
                                             </div>
                                             <div className='text-[#555555] mr-2.5'>
                                                  <h3 className='text-xl text-[#3c3022]'>{blog.blogName}</h3>
                                                  <div className='flex text-xs space-x-5 py-3.5'>
                                                       <p className='flex'>
                                                            <FaRegCalendarAlt className='mr-2 text-primary'></FaRegCalendarAlt> {blog.date}
                                                       </p>
                                                       <p className='flex'>
                                                            <AiOutlineUser className='mr-2 text-primary text-sm'></AiOutlineUser> {blog.writer}
                                                       </p>
                                                  </div>
                                                  <p className='text-sm'>{blog.blogText}</p>
                                                  <button className='mt-4 hover:text-green-600 duration-300'>View Details</button>
                                             </div>
                                        </div>
                                   )
                              })
                         }
                    </div>
                    <div className='w-[40%] flex flex-col justify-between'>
                         {
                              events.map(event => {
                                   var month = moment(event.date, 'YYY-MM-DD').format('MMMM')
                                   var day = moment(event.date, 'YYY-MM-DD').format('DD')
                                   return (
                                        <div className={`homeEvent flex py-5 px-7  shadow-[0px_0px_20px_0px_#d6d6d6]`}>
                                             {/* <h2 className='mr-8 text-center text-2xl text-primary w-10'>{event.date.slice(0, 6)}</h2> */}
                                             <div className='mr-8 text-center text-primary font-bold'>
                                                  <h4 className='leading-none text-5xl'>{day}</h4>
                                                  <h4 className='text-center'>{month.slice(0, 3)}</h4>
                                             </div>
                                             <div className='text-[#555555]'>
                                                  <h3 className='text-lg'>{event.eventName}</h3>
                                                  <div className='flex text-xs space-x-5 py-3'>
                                                       <p className='flex'>
                                                            <FaRegCalendarAlt className='mr-2 text-primary'></FaRegCalendarAlt> {event.location}
                                                       </p>
                                                       <p className='flex'>
                                                            <AiOutlineUser className='mr-2 text-primary text-sm'></AiOutlineUser> {event.time}
                                                       </p>
                                                  </div>
                                                  <button className='relative'>Event Details</button>
                                             </div>
                                        </div>
                                   )
                              })
                         }
                    </div>
               </div>

          </div>
     );
};

export default HomeBlogEvent;