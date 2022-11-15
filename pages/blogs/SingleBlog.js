import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import Link from 'next/link';

const SingleBlog = ({ blog }) => {
     return (
          <div className='w-[300px] flex m-3 pb-2 justify-between items-center shadow-[0px_0px_20px_0px_#d6d6d6] rounded-md'>
               <div className="">
                    <img className='rounded-md h-[216px] w-full' src={blog.blogImg} alt="" />
                    <div className='text-[#555555] p-5'>
                         <h3 className='text-xl text-[#3c3022]'>{blog.blogName}</h3>
                         <div className='flex text-xs space-x-5 py-3.5'>
                              <p className='flex'>
                                   <FaRegCalendarAlt className='mr-2 text-primary'></FaRegCalendarAlt> {blog.date}
                              </p>
                              <p className='flex'>
                                   <AiOutlineUser className='mr-2 text-primary text-sm'></AiOutlineUser> {blog.writer}
                              </p>
                         </div>
                         <p className='text-sm mb-5'>{blog.blogText}</p>
                         <Link href={`/blogs/${blog.id}`} passHref class=" mt-5 relative px-5 py-3 overflow-hidden font-medium text-white hover:bg-gray-100 bg-primary border border-gray-100 rounded-0  shadow-inner group">
                              <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                              <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                              <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                              <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                              <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-secondary opacity-0 group-hover:opacity-100"></span>
                              <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">View details</span>
           
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default SingleBlog;