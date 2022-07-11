import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import{FiMenu} from 'react-icons/fi'
import { useState } from 'react';

const Navbar = () => {

    const [nav,setNav] = useState(false);
   

  return (

   

    <div className=' navbar-background bg-secondary  w-full '>
 
    {/* <div className="h-full w-full flex justify-end md:block relative">
       
       <button onClick={()=> setNav( !nav)} className='block ms-auto md:hidden w-fit'> <FiMenu></FiMenu></button>
    <ul className={` block md:hidden absolute bg-primary p-4 `}>
        
        <li><Link className='menu' to="/">Home</Link></li>
        <li><Link className='menu' to="/services">Services</Link></li>
        <li><Link className='menu' to="/projects">Projects</Link></li>
        <li><Link className='menu' to="/about">About Us</Link></li>
        <li><Link className='menu' to="/blogs">Blogs</Link></li>
        <li><Link className='menu' to="/portfolio">Portfolios</Link></li>
        <li><Link className='menu' to="/pages">Pages</Link></li>
        <li><Link className='menu' to="/contact">Contact</Link></li>
       
      </ul>
      <ul className="hidden md:flex justify-center items-center h-full">
        
        <li><Link className='menu' to="/">Home</Link></li>
        <li><Link className='menu' to="/services">Services</Link></li>
        <li><Link className='menu' to="/projects">Projects</Link></li>
        <li><Link className='menu' to="/about">About Us</Link></li>
        <li><Link className='menu' to="/blogs">Blogs</Link></li>
        <li><Link className='menu' to="/portfolio">Portfolios</Link></li>
        <li><Link className='menu' to="/pages">Pages</Link></li>
        <li><Link className='menu' to="/contact">Contact</Link></li>
       
      </ul>
    </div> */}


<nav className=" text-white md:flex items-center h-full space-x-8 hidden mx-auto">




<ul className="hidden md:flex justify-center items-center h-full mx-auto">
        
        <li><Link className='menu' to="/">Home</Link></li>
        <li><Link className='menu' to="/services">Services</Link></li>
        <li><Link className='menu' to="/projects">Projects</Link></li>
        <li><Link className='menu' to="/about">About Us</Link></li>
        <li><Link className='menu' to="/blogs">Blogs</Link></li>
        <li><Link className='menu' to="/portfolio">Portfolios</Link></li>
        <li><Link className='menu' to="/pages">Pages</Link></li>
        <li><Link className='menu' to="/contact">Contact</Link></li>
       
      </ul>
 
        </nav>

       <div className=" justify-end md:hidden  flex relative  duration-200">
       <button onClick={()=>setNav(!nav)} className='bg-white'> Menu</button>
        <nav
          className={` text-base text-gray-light absolute ${
            nav ? "right-0 top-12" : "-right-[500px]"
          } bg-red-500 duration-200`}
        >
          <ul className={` p-4 `}>
        
        <li><Link className='menu' to="/">Home</Link></li>
        <li><Link className='menu' to="/services">Services</Link></li>
        <li><Link className='menu' to="/projects">Projects</Link></li>
        <li><Link className='menu' to="/about">About Us</Link></li>
        <li><Link className='menu' to="/blogs">Blogs</Link></li>
        <li><Link className='menu' to="/portfolio">Portfolios</Link></li>
        <li><Link className='menu' to="/pages">Pages</Link></li>
        <li><Link className='menu' to="/contact">Contact</Link></li>
       
      </ul>
        </nav>
       </div>




  </div>
)
  
}

export default Navbar