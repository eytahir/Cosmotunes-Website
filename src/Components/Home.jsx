import React from 'react'
import Typed from 'react-typed'

const Home = () => {
  return (
    <div>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-amber-600 font-bold p-2 capitalize'> COSMOTUNES APPAREL</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold'> Made in Space.</h1>
           
            <div className='flex justify-center items-center font-bold md:py-6'>
                <p className='md:text-5xl sm:text-4xl text-xl'> Fast, Flexible financing for</p>
                <Typed className="md:text-5xl sm:text-4xl text-xl md:pl-4 px-6 " strings={['BTB','BTC','SASS']} typeSpeed={120} backspeed={140} loop/>
            </div>
            <p className='md:text-2xl  font-bold text-zinc-800'> Monitor your data analytics to increase revenue fot BTB, BTC, & SASS platforms.</p>
            <button className=' bg-amber-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>let's start</button>


        </div>
      
    </div>
  )
}

export default Home