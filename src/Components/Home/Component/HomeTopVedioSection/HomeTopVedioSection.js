import React from 'react'
import './HomeTopVedioSection.css'
import img from'../../../../img/homeVedio.jpg'
import borderImg from'../../../../img/3.png'

const HomeTopVedioSection = () => {
  return (
    <div className='max-width mx-auto'>
        <div className="px-20 flex flex-col lg:flex-row">

            <div className="left-vedio">
                <img src={img} alt="" />
            </div>
            <div className="right-content">

                <div className="heading">
                <h2>In The Name Of Allah </h2>
                <h1> The Beneficent The Merciful</h1>
                </div>
                <img className='w-38' src={borderImg} alt="" />
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean itudin. This is Photoshop's sion of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. This is Photoshop's versionf Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,</p>

            </div>
        </div>



    </div>
  )
}

export default HomeTopVedioSection