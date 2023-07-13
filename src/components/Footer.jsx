import React from 'react'
import Logo from '../Images/footer-logo.svg'
import {TfiLineDashed} from 'react-icons/tfi'

export const Footer = () => {
  return (
    <div className='md:relative bg-slate-900'>
            <div className='h-[500px]  bg-slate-900 md:flex'>
        <div className='div1 flex relative md:basis-1/2'>
            <div className='md:h-[100%] h-72 md:w-[20%] w-[100%] bg-rose-600'></div>

            <div className='hidden md:block h-[100%] w-[80%] bg-rose-600 skew-x-12 absolute'>
            </div>
            <div className='text--container md:w-[60%] w-[80%] md:pl-28 p-6 md:pt-8 text-white absolute'>
                <div className='logo-container'>
                    <img src={Logo} alt='gearlogo' className='mb-4' />
                    
                </div>
                <div>
                    <div className='text-sm md:text-justify mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos aliquam beatae mollitia! Non, libero.</div>
                    <button type='button' className='bg-slate-900 rounded-lg p-3'>Request a Service</button>
                </div>
            </div>
        </div>

        <div className="div2 md:basis-1/2  bg-slate-900 pb-10">
            <div className='h-[100%] w-[100%] md:flex px-6 md:pl-0 pt-14'>
                <div className='md:basis-1/3 mb-6 md:mb-0 '>
                    <div className='text-white'>
                        <header>
                            <h1 className='text-lg font-bold'>Explore On</h1>
                            <TfiLineDashed className='text-3xl text-rose-600 font-extrabold'/>
                        </header>
                        <div className="links">
                            <ul className='text-white md:space-y-2 font-semibold'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Blog Grid</a></li>
                                <li><a href="#">Help & Support</a></li>
                                <li><a href="#">Services Details</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className='md:basis-1/3 mb-6 md:mb-0 '>
                    <div className='text-white'>
                        <header>
                            <h1 className='text-lg font-bold'>Categories</h1>
                            <TfiLineDashed className='text-3xl text-rose-600 font-extrabold'/>
                        </header>
                        <div className="links">
                            <ul className='text-white md:space-y-2 font-semibold'>
                                <li><a href="#">Electronic</a></li>
                                <li><a href="#">Driver Service</a></li>
                                <li><a href="#">Electric and Plumbing</a></li>
                                <li><a href="#">Gadgets and Repair</a></li>
                                <li><a href="#">Security Service</a></li>
                               
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className='md:basis-1/3'>
                    <div className='text-white'>
                        <header>
                            <h1 className='text-lg font-bold'>Contacts</h1>
                            <TfiLineDashed className='text-3xl text-rose-600 font-extrabold'/>
                        </header>
                        <div className="links">
                            <ul className='text-white md:space-y-2 font-semibold'>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Blog Grid</a></li>
                                <li><a href="#">Help & Support</a></li>
                                <li><a href="#">Services Details</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Use</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>

            





            
           

        
    </div>
    </div>
    
  )
}
