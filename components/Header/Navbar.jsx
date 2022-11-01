import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
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
                         <li className={router.pathname == "/projects" ? "active" : ""}>
                              <Link className='menu' href="/projects">Projects</Link>
                         </li>
                         <li className={router.pathname == "/about" ? "active" : ""}>
                              <Link className='menu' href="/about">About Us</Link>
                         </li>
                         <li className={router.pathname == "/blogs" ? "active" : ""}>
                              <Link className='menu' href="/blogs">Blogs</Link>
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
                    <div className="pr-5">
                         <Link className='px-3' href="/login">Login</Link>
                         <Link className='' href="/contact">User</Link>
                    </div>

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
     );
};

export default Navbar;