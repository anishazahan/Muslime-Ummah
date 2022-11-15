import Link from "next/link";
import { VscThreeBars } from 'react-icons/vsc';
import { useState } from "react";
import { useRouter } from "next/router";

function Navbar() {
     const [nav, setNav] = useState(false)
     const router = useRouter();
     return (
          <div className='navbar-background bg-secondary  w-full sticky '>
               <nav className=" text-white md:flex items-center h-full space-x-8 hidden mx-auto">
                    <ul className="hidden md:flex justify-center items-center h-full mx-auto">

                         <li className={router.pathname == "/" ? "active" : ""}>
                              <Link className='menu' href="/">Home</Link>
                         </li>
                         <li className={router.pathname == "/services" ? "active" : ""}>
                              <Link className='menu' href="/services">Services</Link>
                         </li>
                         {/* <li className={router.pathname == "/projects" ? "active" : ""}>
                              <Link className='menu' href="/projects">Projects</Link>
                         </li> */}
                         <li className={router.pathname == "/about" ? "active" : ""}>
                              <Link className='menu' href="/about">About Us</Link>
                         </li>
                         <li className={router.pathname == "/blogs" ? "active" : ""}>
                              <Link className='menu' href="/blogs">Blogs</Link>
                         </li>
                         <li className={router.pathname == "/events" ? "active" : ""}>
                              <Link className='menu' href="/events">Events</Link>
                         </li>
                         <li className={router.pathname == "/donation" ? "active" : ""}>
                              <Link className='menu' href="/donation">Donation</Link>
                         </li>
                         {/* <li className={router.pathname == "/pages" ? "active" : ""}>
                              <Link className='menu' href="/pages">Pages</Link>
                         </li> */}
                         <li className={router.pathname == "/contact" ? "active" : ""}>
                              <Link className='menu' href="/contact">Contact</Link>
                         </li>

                    </ul>
                    <div className="pr-5">
                         <Link className='px-3' href="/login">Login</Link>
                         <Link className='' href="/contact">User</Link>
                    </div>

               </nav>


               <div className="justify-between px-[8%] h-full items-center md:hidden  flex relative  duration-200">
                    <button onClick={() => setNav(!nav)} className='text-white'>
                         <VscThreeBars></VscThreeBars>
                    </button>
                    <nav
                         className={`flex flex-col bg-[#00a6ff] text-center z-10 left-0 w-full  absolute duration-500 ${nav ? "opacity-100  top-14 visible" : " top-[-270px] opacity-0 invisible"}`}>
                         <ul className={` p-4 w-[50%] mx-auto uppercase`}>
                              <li className={router.pathname == "/" ? "active" : ""}>
                                   <Link className='menu' href="/">Home</Link>
                              </li>
                              <li className={router.pathname == "/services" ? "active" : ""}>
                                   <Link className='menu' href="/services">Services</Link>
                              </li>
                              <li className={router.pathname == "/projects" ? "active" : ""}>
                                   <Link className='menu' href="/projects">Projects</Link>
                              </li>
                              <li className={router.pathname == "/about" ? "active" : ""}>
                                   <Link className='menu' href="/about">About Us</Link>
                              </li>
                              <li className={router.pathname == "/blogs" ? "active" : ""}>
                                   <Link className='menu' href="/blogs">Blogs</Link>
                              </li>
                              <li className={router.pathname == "/events" ? "active" : ""}>
                                   <Link className='menu' href="/events">Events</Link>
                              </li>
                              <li className={router.pathname == "/portfolio" ? "active" : ""}>
                                   <Link className='menu' href="/portfolio">Portfolios</Link>
                              </li>
                              <li className={router.pathname == "/pages" ? "active" : ""}>
                                   <Link className='menu' href="/pages">Pages</Link>
                              </li>
                              <li className={router.pathname == "/contact" ? "active" : ""}>
                                   <Link className='menu' href="/contact">Contact</Link>
                              </li>
                         </ul>
                    </nav>
                    <div className="text-white">
                         <Link className='' href="/login">Login</Link>
                         <Link className='ml-3' href="/contact">User</Link>
                    </div>
               </div>




          </div>
     );
};

export default Navbar;