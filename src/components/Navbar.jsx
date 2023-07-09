import React from 'react'
import Logo from '../Images/logo.svg'
import Phone from '../Images/phone-call.png'
import Heart from '../Images/heart.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
import CountUp from 'react-countup'

const Navbar = () => {
    const [navbar, setNavbar] = useState(true)

    const handleSetNavbar = function(){
        setNavbar(!navbar)
        console.log("Nave")
    }

    return (
        <div className='relative'>
            <nav className='flex flex-row justify-between pt-6 px-6 items-center font-semibold'>
                <div className='logo'>
                    <img src={Logo} alt='gearlogo' />
                </div>
                <div className='links hidden md:block'>
                    <ul className='flex space-x-6'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Blogs</a></li>
                        <li><a href='#'>Pages</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>

                </div>
                <div className='acctncontact space-x-6 items-center hidden md:flex'>
                    <div className='callus flex items-center space-x-3'>
                        <img src={Phone} alt='phone' className='w-6 h-6' />
                        <div>
                            <p className='text-rose-600'>Call Us Now</p>
                            <h1>+2348069462226</h1>
                        </div>
                    </div>
                    <img src={Heart} className='w-6 h-6' alt='heartfave' />
                    <button type='button ' className='py-3 px-5 bg-rose-600 rounded-3xl text-white
                    '>My Account</button>
                </div>
            </nav>
            <GiHamburgerMenu className='absolute md:hidden right-6 top-6 text-3xl' onClick={handleSetNavbar}/>
        </div>
    )
}

export default Navbar