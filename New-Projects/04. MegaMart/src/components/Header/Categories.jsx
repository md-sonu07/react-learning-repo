import React from 'react'
import { IoIosArrowDown } from "react-icons/io";


function Categories({value}) {
  return (
    <div className=''>
      <button className='bg-secondary p-2 px-4 rounded-xl flex justify-center items-center gap-2'>
        <span className='text-tColor font-semibold text-nowrap'>{value}</span>
        <IoIosArrowDown className='size-5 text-primary'/>
      </button>
    </div>
  )
}

export default Categories
