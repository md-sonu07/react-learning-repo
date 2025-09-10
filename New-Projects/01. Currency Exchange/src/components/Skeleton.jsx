import React from 'react'

function Skeleton () {
  return (
    <div className='flex justify-center items-center '>
           {/* UI SKELETON */}
        <div className="flex flex-col items-center gap-4 p-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-md shadow-lg animate-pulse">
          {/* Title */}
          <div className="h-10 w-56 bg-gray-300/40 rounded"></div>
          <div className="h-6 w-full flex justify-end items-end bg-gray-300/40 rounded"></div>

          {/* From Box */}
          <div className="bg-gray-200/30 rounded-md p-6 w-[400px] h-[120px] flex flex-col gap-4">
          <div className="h-6 w-full flex justify-end items-end bg-gray-300/40 rounded"></div>
          <div className="h-14 w-full flex justify-end items-end bg-gray-300/40 rounded "></div>
          </div>

          {/* To Box */}
          <div className="bg-gray-200/30 rounded-md p-6 w-[400px] h-[120px] flex flex-col gap-4">
          <div className="h-6 w-full flex justify-end items-end bg-gray-300/40 rounded"></div>
          <div className="h-14 w-full flex justify-end items-end bg-gray-300/40 rounded "></div>
          </div>
          {/* Buttons */}
          <div className="flex w-full justify-center gap-4">
            <div className="h-10 w-full bg-gray-300/40 rounded"></div>
            <div className="h-10 w-1/3 bg-gray-300/40 rounded"></div>
          </div>
        </div>
    </div>
  )
}

export default Skeleton
