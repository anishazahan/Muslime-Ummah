import React from 'react'

const SingleScholars = (props) => {
  console.log(props);
  const { img, name, tittle } = props.scholar;
  return (
    <div className='card relative'>
      <div className="">
        <img className='w-full rounded-0' src={img} alt="" />
      </div>
      <div className="absolute right-5 left-5 py-10 bottom-[-2rem] bg-primary text-white">
        <h1>{name}</h1>

        <h1>{tittle}</h1>
      </div>

    </div>
  )
}

export default SingleScholars