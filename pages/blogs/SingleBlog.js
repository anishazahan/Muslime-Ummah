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
                         <p className='text-sm'>{blog.blogText}</p>
                         <Link href={`/blogs/${blog.id}`} passHref>
                              <button className='mt-4 px-3 py-1.5 rounded-md text-sm border border-green-600 bg-green-600 text-white  hover:text-green-600 hover:bg-white duration-300'>View Details</button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default SingleBlog;