import React from 'react'
import './Header.css'
import logo1 from '../../img/retina-logo3.svg'

const Header = () => {
  return (
    <header>
      <section className="top-header">
        <div className="top-content max-w-7xl mx-auto lg:flex justify-between px-10 text-white">
            <div className="left-content flex flex-row align-middle pt-3">
                <p className='right-border mr-4 pr-2'>Contact@gmail.com</p>
                <p className='right-border mr-4 pr-2'>+8893848648875</p>
                <p className=' pr-2'>Eng</p>
                <select name="" id="">
                    <option value="Urdu"></option>
                    <option value="Arabic"></option>
                </select>
            </div>
            <div className="right-content  flex flex-row align-middle pt-2">
                <p>icon</p>
                <input className='p-1 border-none rounded-sm' placeholder='Search' type="text" />
            </div>
        </div>
      </section>
      <section className="middle-header">
      <div className="middle-content max-w-7xl mx-auto lg:flex justify-between px-10 text-white">
            <div className="left-content flex flex-row align-middle pt-3">
                <img className='logo' src={logo1} alt="" />
                <div className="flex flex-col mt-5">
                    <h2 className='text-2xl text-primary font-bold mb-0 leading-none'>Muslime Ummah</h2>
                    <span className='text-2xl text-black logo-font-size font-semibold mt-0'>The popular Islamic Center</span>
                </div>
            </div>
            <div className="right-content  flex flex-row align-middle pt-2">
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