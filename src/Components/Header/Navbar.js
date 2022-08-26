import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import{FiMenu} from 'react-icons/fi'
import { useState } from 'react';

const Navbar = () => {

    const [nav,setNav] = useState(false);
   

  return (

   

    <div className=' navbar-background bg-secondary  w-full '>
<nav className=" text-white md:flex items-center h-full space-x-8 hidden mx-auto">

<ul className="hidden md:flex justify-center items-center h-full mx-auto">
        
        <li><NavLink className='menu' to="/">Home</NavLink></li>
        <li><NavLink className='menu' to="/services">Services</NavLink></li>
        <li><NavLink className='menu' to="/projects">Projects</NavLink></li>
        <li><NavLink className='menu' to="/about">About Us</NavLink></li>
        <li><NavLink className='menu' to="/blogs">Blogs</NavLink></li>
        <li><NavLink className='menu' to="/portfolio">Portfolios</NavLink></li>
        <li><NavLink className='menu' to="/pages">Pages</NavLink></li>
        <li><NavLink className='menu' to="/contact">Contact</NavLink></li>
       
      </ul>
 
        </nav>

       {/* <div className=" justify-end md:hidden  flex relative  duration-200">
       <button onClick={()=>setNav(!nav)} className='bg-white'> Menu</button>
        <nav
          className={` text-base text-gray-light absolute ${
            nav ? "right-0 top-12" : "-right-[500px]"
          } bg-red-500 duration-200`}
        >
          <ul className={` p-4 `}>
        
        <li><NavLink className='menu' to="/">Home</NavLink></li>
        <li><NavLink className='menu' to="/services">Services</NavLink></li>
        <li><NavLink className='menu' to="/projects">Projects</NavLink></li>
        <li><NavLink className='menu' to="/about">About Us</NavLink></li>
        <li><NavLink className='menu' to="/blogs">Blogs</NavLink></li>
        <li><NavLink className='menu' to="/portfolio">Portfolios</NavLink></li>
        <li><NavLink className='menu' to="/pages">Pages</NavLink></li>
        <li><NavLink className='menu' to="/contact">Contact</NavLink></li>
       
      </ul>
        </nav>
       </div> */}




  </div>
)
  
}

export default Navbar