import React, { useEffect, useState } from 'react'
import './Gallary.css'
import SingleGallary from './SingleGallary';

const Gallary = () => {

    const [gallary,setGallary] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setGallary(data));
    },[])
  return (
    <div className='max-width mx-auto my-10'>

        <div className="text-center space-y-6">
        <h2 className='font-semibold text-center px-5 lg:px-0 text-gray-800 text-2xl'>Our Photo Gallary</h2>
        <p className='text-[16px] text-gray-500 text-center px-5 mx-auto lg:px-0 w-full md:w-3/4 lg:w-1/2'>Denean sollicitudin. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean itudin. This is Photoshop's sion of Lorem Ipsum. Proin gravida nibh vel velit.</p>

        <div className="">
        <button className='outline-none px-8 text-xl py-4 bg-slate-200 text-gray-600'> Cateogory</button>
        </div>
        <div className="cateogory-btns space-x-4 mx-auto">
        <button className='outline-none cateogory-btn ease-out px-8 text-[16px] font-semibold py-3 bg-slate-100 text-primary text-gray-600'> All</button>
        <button className='outline-none cateogory-btn ease-out px-8 text-[16px] font-semibold py-3 bg-slate-100 text-primary text-gray-600'> Helping People</button>
        <button className='outline-none cateogory-btn ease-out px-8 text-[16px] font-semibold py-3 bg-slate-100 text-primary text-gray-600'> Voleuntier</button>
        <button className='outline-none cateogory-btn ease-out px-8 text-[16px] font-semibold py-3 bg-slate-100 text-primary text-gray-600'> Ramdan</button>
        <button className='outline-none cateogory-btn ease-out px-8 text-[16px] font-semibold py-3 bg-slate-100 text-primary text-gray-600'> Eid-ul-Fitor</button>
        </div>

        <div className="gallary max-width mx-auto px-20">

            <div className="grid grid-cols-3">
                {
                    gallary.map(images => <SingleGallary key={images.id} img={images}></SingleGallary>  )
                }
            </div>

        </div>

        </div>



    </div>
  )
}

export default Gallary