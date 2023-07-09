import React from 'react'
import Navbar from './Navbar'
import Location from '../Images/location.svg'
import { FaArrowDown, FaSearch } from 'react-icons/fa'
import HeroImage from '../Images/hero-section-right-img.png'
import Search from '../Images/search.png'
import ArrowDown from '../Images/arrow-down-sign-to-navigate.png'

const Hero = () => {
    return (
        <div className='mb-10 bg-rose-100'>
            <Navbar />
            <div className='md:flex space-x-9 mt-20 md:px-28 px-6 pb-20'>
                <div className='basis-1/2'>
                    <h3 className='text-rose-600 font-semibold text-xl mb-4'>Welcome Our Service Sales</h3>
                    <h1 className='md:text-5xl text-4xl font-bold mb-5'>Nonstop Services Life Better</h1>
                    <p className='text-lg mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, maxime quod, earum iusto eos, asperiores animi eveniet iste quae sit reprehenderit. Voluptas, quo officia. Tempore nostrum dolorum soluta totam quasi?</p>
                    <div className='md:flex md:space-x-6 items-center mb-8'>
                        <div className='bg-rose-600 flex w-fit p-3 rounded-lg justify-between space-x-6 font-bold text-white items-center mb-4 md:mb-0'>
                            <img src={Location} alt='location' />
                            <h1>Nigeria</h1>
                            <FaArrowDown />


                        </div>

                        <div className='relative w-fit'>
                            <input type='text' placeholder='Find your services Here' className='py-3 pl-6 pr-12 rounded-lg text-md my-auto ' />
                            <div className='bg-rose-600 p-2 rounded-xl w-fit absolute top-1 right-1 '>

                                <FaSearch className='text-white text-2xl' />

                            </div>
                        </div>

                    </div>
                    <div className='flex space-x-3 items-center text-sm'>
                        <h1 className='font-bold'>Suggest For you:</h1>
                        <h1 className='font-medium p-2 bg-white rounded-lg text-rose-600 '>Beauty Salon</h1>
                        <h1 className='font-medium p-2 bg-white rounded-lg text-rose-600 '>Shifting</h1>
                        <h1 className='font-medium p-2 bg-white rounded-lg text-rose-600 '>AC Repair</h1>
                        <h1 className='font-medium p-2 bg-white rounded-lg text-rose-600 '>Wall Painting</h1>
                    </div>
                </div>
                <div className='hero--image basis-1/2 hidden md:block'>
                    <img src={HeroImage} alt="heropic" />
                </div>
            </div>
        </div>
    )
}

export default Hero