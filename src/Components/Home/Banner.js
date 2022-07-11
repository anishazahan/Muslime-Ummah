import React from 'react'
import banner from '../../img/download.jpg'

const Banner = () => {
  return (
    <div>
       <h2 className='my-10'>This is banner</h2>
        <div class="carousel w-full mt-[-1.5rem] mb-5">
           
  <div id="item1" class="carousel-item w-full h-80vh">
  <img src={banner} class="w-full" />
  </div> 
  <div id="item2" class="carousel-item w-full">
  <img src={banner} class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
  <img src={banner} class="w-full" />
  </div> 
  <div id="item4" class="carousel-item w-full">
  <img src={banner} class="w-full" />
  </div>

  <div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
  <a href="#item4" class="btn btn-xs">4</a>
</div>
</div> 

    </div>
  )
}

export default Banner