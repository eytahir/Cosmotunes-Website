import React from 'react'

export const More = () => {
  return (
    <div className='w-full py-16 px-4'>
        <div className='max-w[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-5xl sm:text-4xl text-xl font-bold py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, iste!</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row item-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md ' type="email" placeholder='enter email' />
                    <button className='bg-amber-500 rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>Notify Me</button>
                </div>
                <p> we care about your pretection of data <span className=' text-amber-500'> Privacy Policy</span></p>

            </div>

        </div>

    </div>
  )
}
