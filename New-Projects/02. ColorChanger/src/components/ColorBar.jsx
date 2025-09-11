import React, { useState } from 'react'

function ColorBar() {
    const [color, setColor] = useState('black');
    return (
        <>
            <main
                style={{ backgroundColor: color }}
                className='h-screen flex justify-center items-center '>
                <div>
                    <h1 className='text-2xl font-bold text-white'>CHANGE COLOR 🎨 {color.toLocaleUpperCase()}</h1>
                </div>
                <div
                    className='flex justify-center items-end absolute bottom-0  bg-white rounded-xl p-4 mb-10 gap-4 font-medium'>
                    <button
                        onClick={() => setColor('red')}
                        className='bg-red-500 p-2 rounded-xl text-white hover:bg-red-600 transition-all duration-300 cursor-pointer'>Red</button>
                    <button
                        onClick={() => setColor('green')}
                        className='bg-green-500 p-2 rounded-xl text-white hover:bg-green-600 transition-all duration-300 cursor-pointer'>Green</button>
                    <button
                        onClick={() => setColor('blue')}
                        className='bg-blue-500 p-2 rounded-xl text-white hover:bg-blue-600 transition-all duration-300 cursor-pointer'>Blue</button>
                    <button
                        onClick={() => setColor('yellow')}
                        className='bg-yellow-500 p-2 rounded-xl text-white hover:bg-yellow-600 transition-all duration-300 cursor-pointer'>Yellow</button>
                    <button
                        onClick={() => setColor('orange')}
                        className='bg-orange-500 p-2 rounded-xl text-white hover:bg-orange-600 transition-all duration-300 cursor-pointer'>Orange</button>
                    <button
                        onClick={() => setColor('pink')}
                        className='bg-pink-500 p-2 rounded-xl text-white hover:bg-pink-600 transition-all duration-300 cursor-pointer'>Pink</button>
                    <button
                        onClick={() => setColor('purple')}
                        className='bg-purple-500 p-2 rounded-xl text-white hover:bg-purple-600 transition-all duration-300 cursor-pointer'>Purple</button>
                    <button
                        onClick={() => setColor('indigo')}
                        className='bg-indigo-500 p-2 rounded-xl text-white hover:bg-indigo-600 transition-all duration-300 cursor-pointer'>Indigo</button>
                    <button
                        onClick={() => setColor('teal')}
                        className='bg-teal-500 p-2 rounded-xl text-white hover:bg-teal-600 transition-all duration-300 cursor-pointer'>Teal</button>
                </div>
            </main>
        </>
    )
}

export default ColorBar
