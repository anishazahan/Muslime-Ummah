import React from 'react'
import './PrayerRules.css'
import img from '../../../../img/prayerImg.jpg'

const PrayerRules = () => {
  return (
    <div className='my-20'>

      <div className="mx-auto text-center">
      <h2 className='text-xl text-black font-semibold text-center prayer-heading'>ISLAMIC PRAYER</h2>
      </div>
        <p className="text-center w-10/12 md:9/12 lg:w-3/5 mx-auto mt-5">Denean sollicitudin. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean itudin. This is Photoshop's sion of Lorem Ipsum. Proin gravida nibh vel velit.</p>
        <div className="mt-2 mx-auto w-full">
        <img className='w-full mx-auto' src={img} alt="" />
        </div>

    </div>
  )
}

export default PrayerRules