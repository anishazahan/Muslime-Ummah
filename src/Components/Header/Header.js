import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className="top-header">
        <div className="top-content max-w-7xl mx-auto lg:flex justify-between px-10 text-white">
            <div className="left-content flex flex-row align-middle pt-4">
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
                <input className='p-1 border-none rounded-sm' type="text" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header