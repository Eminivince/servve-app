import React from 'react'
import WorkImage from '../Images/work-video-thumb.jpg'

const HowItWorks = () => {
  return (
    <div className='md:px-28 px-6 pt-10 pb-16'>
        <>
        <div className='header flex justify-between mb-12 items-end'>
            <div>
                <h1 className='text-rose-600 font-bold mb-4'>Get A Service</h1>
                <h1 className='font-bold text-4xl'>How it Works</h1>
            </div>
            <div className='hidden md:block'>
                <h1 className='font-bold text-3xl text-gray-100'>How it Works</h1>
            </div>
        </div>

        <div className='main md:flex md:space-x-8'>
            <div className='basis-1/2 md:mb-0 mb-8'>
                <h1 className='md:text-2xl text-xl font-bold mb-5'>3 Steps to Take Our Services</h1>
                <div className='flex flex-col space-y-6'>
                    <div className='border p-5 rounded-lg'>
                        <h1 className='font-bold md:text-3xl text-xl mb-3'><span className='mr-5 text-rose-600'>01</span>Select The Service</h1>
                        <p className=' text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, labore porro. Magnam repellendus, nihil ipsum sed obcaecati sit beatae omnis.</p>
                    </div>
                    <div className='border p-5 rounded-lg'>
                        <h1 className='font-bold md:text-3xl text-xl mb-3'><span className='mr-5 text-rose-600'>02</span>Pick Your Schedule</h1>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, labore porro. Magnam repellendus, nihil ipsum sed obcaecati sit beatae omnis.</p>
                    </div>
                    <div className='border p-5 rounded-lg'>
                        <h1 className='font-bold md:text-3xl text-xl mb-3'><span className='mr-5 text-rose-600'>03</span>Place Order & Relax</h1>
                        <p className=' text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, labore porro. Magnam repellendus, nihil ipsum sed obcaecati sit beatae omnis.</p>
                    </div>
                    
                    
                </div>
            </div>
            <div className='basis-1/2 relative'>
                <div className='h-[30%] w-[30%] bg-rose-500 rounded-lg absolute -top-6 md:-right-2 right-0 -z-40' />
                <img src={WorkImage} alt="workimage" className='rounded-lg md:w-[94%] w-[90%] mx-auto z-50' />
                <div className='h-[30%] w-[30%] bg-rose-500 rounded-lg absolute -bottom-4 md:-left-3 left-0 -z-40' />
            </div>
        </div>
        
        </>

    </div>
  )
}

export default HowItWorks