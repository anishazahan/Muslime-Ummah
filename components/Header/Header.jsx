import{FaSearch,FaEnvelope} from 'react-icons/fa'
import{MdCall} from 'react-icons/md'

function Header() {
     return (
          <header>
               <section className="top-header">
                    <div className="top-content h-full max-width mx-auto flex justify-between px-10 text-white items-center">
                         <div className="left-content flex flex-row items-center">
                              <FaEnvelope className='2xs mr-1'></FaEnvelope>
                              <p className='right-border mr-4 pr-2'> Contact@gmail.com</p>
                              <MdCall className='2xs mr-1'></MdCall>
                              <p className='right-border mr-4 pr-2 hidden md:block '>+8893848648875</p>
                              <p className='hidden md:block pr-2'>Eng</p>
                              <select className='text-white text-2xs ml-[-.7rem] bg-transparent hidden md:block'>
                                   <option value="Urdu"></option>
                                   <option value="Arabic"></option>
                              </select>
                         </div>
                         <div className="right-content  flex flex-row">

                              <div className="relative">
                                   <FaSearch className='mr-[-12px] pt-2 text-2xl  text-black font-normal absolute search-border'></FaSearch> <input className='p-1 outline-none border-none rounded-sm' type="text" />
                              </div>
                         </div>
                    </div>
               </section>
               <section className="middle-header">
                    <div className="middle-content max-width flex-col mx-auto flex lg:flex-row justify-between px-2 sm:px-10 text-white h-full items-center">
                         <div className="left-content flex flex-row ">
                              <img className='h-[100px] w-[97px]' src={"https://i.ibb.co/0mKdg3j/retina-logo3-1.jpg"} alt="" />
                              <div className="flex flex-col mt-7">
                                   <h2 className='text-xl text-black font-bold mb-0 leading-none'>Muslime Ummah</h2>
                                   <span className='text-2xl text-black logo-font-size font-semibold mt-0'>The popular Islamic Center</span>
                              </div>
                         </div>
                         <div className="right-content  flex flex-row justify-center flex-wrap">
                              <div className="pray-time m-1 sm:m-3">
                                   <h2>Fazor</h2>
                                   <h2>5:30</h2>
                              </div>
                              <div className="pray-time m-1 sm:m-3">
                                   <h2>Fazor</h2>
                                   <h2>5:30</h2>
                              </div>
                              <div className="pray-time m-1 sm:m-3">
                                   <h2>Fazor</h2>
                                   <h2>5:30</h2>
                              </div>
                              <div className="pray-time m-1 sm:m-3">
                                   <h2>Fazor</h2>
                                   <h2>5:30</h2>
                              </div>
                              <div className="pray-time m-1 sm:m-3">
                                   <h2>Fazor</h2>
                                   <h2>5:30</h2>
                              </div>
                         </div>
                    </div>
               </section>
          </header>
     );
}

export async function getStaticProps(ctx) {


     return {
          props: {
               data: null
          }
     }
}

export default Header;