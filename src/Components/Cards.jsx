import React from 'react'
import leon from '../Assets/leon.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-zinc-500'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
        <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-800 text-white'>
                <img className=' mx-auto mt-[-3rem] bg-white' src={leon} alt="//" />
                <h2 className='text-2xl font-bold text-center py-8'> Single user</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500gb storage</p>
                    <p className='py-2 border-b mx-8'> 1 granted user</p>
                    <p className='py-2 border-b mx-8'>send up to 2gb</p>
                </div>
                <button className='bg-amber-500 rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

            </div>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 bg-transparent rounded-lg hover:scale-105 duration-300 bg-zinc-800 text-white'>
                <img className=' mx-auto mt-[-3rem] bg-white' src={leon} alt="//" />
                <h2 className='text-2xl font-bold text-center py-8'> Single user</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500gb storage</p>
                    <p className='py-2 border-b mx-8'> 1 granted user</p>
                    <p className='py-2 border-b mx-8'>send up to 2gb</p>
                </div>
                <button className='bg-amber-500 rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

            </div>
            <div className='w-full shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-800 text-white'>
                <img className=' mx-auto mt-[-3rem] bg-white' src={leon} alt="//" />
                <h2 className='text-2xl font-bold text-center py-8'> Single user</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500gb storage</p>
                    <p className='py-2 border-b mx-8'> 1 granted user</p>
                    <p className='py-2 border-b mx-8'>send up to 2gb</p>
                </div>
                <button className='bg-amber-500 rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>

            </div>

        </div>

    </div>
  )
}

export default Cards