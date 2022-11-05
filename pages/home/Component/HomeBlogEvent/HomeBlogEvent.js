import React from 'react';
import {FaRegCalendarAlt} from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai';

const HomeBlogEvent = () => {
     const blogs = [
          {
               blogName: "Is Islam a Liberal Philosophy?",
               date: "Nov 17, 2020",
               writer: "Tazul Islam",
               blogText: "Lorem ipsum dolor sit amet, conec tetur adipisicing elit sed do eiusd.",
               blogImg: "https://nauthemes.net/html/bismillah/assets/images/resources/post-img1-1.jpg"
          },
          {
               blogName: "Is Islam a Liberal Philosophy?",
               date: "Nov 17, 2020",
               writer: "Anisha Zahan",
               blogText: "Lorem ipsum dolor sit amet, conec tetur adipisicing elit sed do eiusd.",
               blogImg: "https://nauthemes.net/html/bismillah/assets/images/resources/post-img1-2.jpg"
          }
     ]
     const events = [
          {
               eventName: "Importance Of Prayer In Islam",
               date: "May 17, 2020",
               location: "Dehli, Jamia Mosque",
               time: "04:00PM - 08:00PM",
               eventBgImg: "https://nauthemes.net/html/bismillah/assets/images/resources/event-img1-1.jpg"
          },

          {
               eventName: "Importance Of Prayer In Islam",
               date: "May 17, 2020",
               location: "Dehli, Jamia Mosque",
               time: "04:00PM - 08:00PM",
               eventBgImg: "https://nauthemes.net/html/bismillah/assets/images/resources/event-img1-1.jpg"
          },

          {
               eventName: "Importance Of Prayer In Islam",
               date: "May 17, 2020",
               location: "Dehli, Jamia Mosque",
               time: "04:00PM - 08:00PM",
               eventBgImg: "https://nauthemes.net/html/bismillah/assets/images/resources/event-img1-1.jpg"
          },

     ]
     return (
          <div className='px-10 lg:px-20'>
               <div className="text-center space-y-3">
                    <h1 className='text-xl font-semibold text-primary'>Latest News & Updates</h1>
                    <h1 className='text-4xl text-gray-700 font-semibold'>Our Blog & Events</h1>
               </div>
               <div className='flex '>
                    <div className='w-7/12'>
                         {
                              blogs.map(blog => {
                                   return (
                                        <div className='flex justify-between items-center my-5'>
                                             <img className='mr-5' src={blog.blogImg} alt="" />
                                             <div className='text-[#555555]'>
                                                  <h3 className='text-xl text-[#3c3022]'>{blog.blogName}</h3>
                                                  <div className='flex text-xs space-x-5 py-3.5'>
                                                       <p className='flex'>
                                                            <FaRegCalendarAlt className='mr-2 text-primary'></FaRegCalendarAlt> {blog.date}
                                                       </p>
                                                       <p className='flex'>
                                                            <AiOutlineUser className='mr-2 text-primary text-sm'></AiOutlineUser> {blog.writer}
                                                       </p>
                                                       {/* <p>{blog.writer}</p> */}
                                                  </div>
                                                  <p className='text-sm'>{blog.blogText}</p>
                                                  <button className='mt-4 hover:text-green-600 duration-300'>View Details</button>
                                             </div>
                                        </div>
                                   )
                              })
                         }
                    </div>
                    <div className='w-4/12'>
                         {
                              events.map(event => {
                                   return (
                                        <>
                                             <h2>{event.eventName}</h2>
                                        </>
                                   )
                              })
                         }
                    </div>
               </div>

          </div>
     );
};

export default HomeBlogEvent;