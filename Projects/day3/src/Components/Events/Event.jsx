import React from 'react'

function Event() {
    function ButtonEvent() {
        alert("Click The Button Without arrow Function ")
    }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r '>
        <div className='flex space-x-4'>
            <button onClick={ButtonEvent} className='p-4 bg-blue-500 text-white rounded-lg cursor-pointer font-bold'>Click The Button <br /> Without arrow Function </button>
            {/* arrow function */}
            <button onClick={() => alert("Button Clicked With arrow function")} className='p-4 bg-blue-500 text-white rounded-lg cursor-pointer font-bold'>Click The Button <br /> With arrow Function</button>
        </div> 
    </div>
  )
}

export default Event