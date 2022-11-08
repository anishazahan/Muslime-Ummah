import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

const SingleBlog = ({ blog }) => {
     return (
          <div className='w-[300px] flex flex-col m-10 pb-2 justify-between items-center shadow-[0px_0px_20px_0px_#d6d6d6] rounded-md'>
                    <img className='rounded-md' src={blog.blogImg} alt="" />
               <div className='text-[#555555] p-3'>
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
                    <button className='mt-4 px-3 py-1.5 rounded-md text-sm border border-green-600 bg-green-600 text-white  hover:text-green-600 hover:bg-white duration-300'>View Details</button>
               </div>
          </div>
     );
};

export default SingleBlog;