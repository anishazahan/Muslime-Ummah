import React from 'react'
import './Header.css'

import{FaSearch} from 'react-icons/fa'

import logo1 from '../../img/retina-logo3.svg'

const Header = () => {
  return (
    <header>
      <section className="top-header">
        <div className="top-content h-full max-w-7xl mx-auto flex justify-between px-10 text-white items-center">
            <div className="left-content flex flex-row items-center">
                <p className='right-border text-2xs mr-4 pr-2'>Contact@gmail.com</p>
                <p className='right-border mr-4 pr-2 hidden md:block '>+8893848648875</p>
                <p className='hidden md:block pr-2'>Eng</p>
                <select className='text-white text-2xs ml-[-.7rem] bg-transparent hidden md:block'>
                    <option value="Urdu"></option>
                    <option value="Arabic"></option>
                </select>
            </div>
            <div className="right-content  flex flex-row">
             
                <div className="relative">
                <FaSearch className='mr-[-10px] pt-2 text-2xl text-black font-normal absolute search-border'></FaSearch> <input className='p-1 outline-none border-none rounded-sm' type="text"  />
                </div>
            </div>
        </div>
      </section>
      <section className="middle-header">
      <div className="middle-content max-w-7xl flex-col mx-auto flex lg:flex-row justify-between px-10 text-white h-full items-center">
            <div className="left-content flex flex-row ">
                <img className='logo' src={logo1} alt="" />
                <div className="flex flex-col mt-7">
                    <h2 className='text-xl text-primary font-bold mb-0 leading-none'>Muslime Ummah</h2>
                    <span className='text-2xl text-black logo-font-size font-semibold mt-0'>The popular Islamic Center</span>
                </div>
            </div>
            <div className="right-content  flex flex-row ">
              <div className="pray-time">
                <h2>Fazor</h2>
                <h2>5:30</h2>
              </div>
              <div className="pray-time">
                <h2>Fazor</h2>
                <h2>5:30</h2>
              </div>
              <div className="pray-time">
                <h2>Fazor</h2>
                <h2>5:30</h2>
              </div>
              <div className="pray-time">
                <h2>Fazor</h2>
                <h2>5:30</h2>
              </div>
              <div className="pray-time">
                <h2>Fazor</h2>
                <h2>5:30</h2>
              </div>
            </div>
        </div>
      </section>
    </header>
  )
}

export default Header