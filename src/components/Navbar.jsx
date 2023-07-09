import React from 'react'
import Logo from '../Images/logo.svg'
import Phone from '../Images/phone-call.png'
import Heart from '../Images/heart.png'

const Navbar = () => {
    return (
        <div>
            <nav className='flex flex-row justify-between pt-6 px-6 items-center font-semibold'>
                <div className='logo'>
                    <img src={Logo} alt='gearlogo' />
                </div>
                <div className='links'>
                    <ul className='flex space-x-6'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Blogs</a></li>
                        <li><a href='#'>Pages</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>

                </div>
                <div className='acctncontact flex space-x-6 items-center'>
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
        </div>
    )
}

export default Navbar