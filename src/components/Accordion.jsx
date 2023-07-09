import React from 'react'
import { useState } from 'react'
import CountUp from 'react-countup'
import {AiOutlinePlusCircle} from 'react-icons/ai'

const Accordion = () => {
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    const handleSetShow1 = function(){
        setShow1(!show1)
        
    }
    const handleSetShow2 = function(){
        setShow2(!show2)
        
    }
    const handleSetShow3 = function(){
        setShow3(!show3)
        
    }

  return (
    <div className='md:flex items-start md:px-28 px-6 pb-16 justify-between md:space-x-6'>
        <div className='basis-1/2'>
            <h1 className="text-rose-600 font-semibold mb-3">Trusted Agency</h1>
            <h1 className="md:text-5xl text-3xl font-bold mb-3">Best Offered Services</h1>
            <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam officia quisquam quaerat odit similique ut, in repudiandae dolore mollitia culpa.</p>
            <div className='mb-7' onClick={handleSetShow1}>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='font-bold'>
                        Ensuring Masks
                    </h1>
                    <AiOutlinePlusCircle className='text-2xl'/>
                </div>

                {show1 && <p className='w-[97%] text-justify'>TestLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae corrupti minima unde dolorum praesentium ab tempora ullam hic magni eveniet dolores quibusdam voluptas non at ducimus totam amet nobis vero nihil nesciunt, libero consequatur!</p>}
                
            </div>
            <div className='mb-7' onClick={handleSetShow2}>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='font-bold'>
                        27/7 Support
                    </h1>
                    <AiOutlinePlusCircle className='text-2xl'/>
                </div>

                {show2 && <p className='w-[97%] text-justify'>TestLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae corrupti minima unde dolorum praesentium ab tempora ullam hic magni eveniet dolores quibusdam voluptas non at ducimus totam amet nobis vero nihil nesciunt, libero consequatur!</p>}
                
            </div>
            <div className='mb-7' onClick={handleSetShow3}>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='font-bold'>
                        Sanitazing Hands
                    </h1>
                    <AiOutlinePlusCircle className='text-2xl' />
                </div>

                {show3 && <p className='w-[97%] text-justify'>TestLorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur recusandae corrupti minima unde dolorum praesentium ab tempora ullam hic magni eveniet dolores quibusdam voluptas non at ducimus totam amet nobis vero nihil nesciunt, libero consequatur!</p>}
                
            </div>
            
        </div>

        <div className='flex flex-col items-end'>
            <h1 className='md:text-4xl text-3xl font-bold mb-6 text-gray-100'>WHY CHOOSE US</h1>
            <div className='w-[100%] h-[100%] md:grid  md:grid-cols-2 text-center rounded-xl border shadow-xl'>
                <div className='md:border-r border-b p-16'>
                    <div className='text-3xl font-bold text-rose-600 mb-1'>
                    <span>+</span>
                    <CountUp start={0} end={4078} duration={8} />
                    </div>
                    <p className='font-semibold text-gray-400 text-lg'>Service Providers</p>
                </div>
                <div className='p-16'>
                <div className='text-3xl font-bold text-rose-600 mb-1'>
                    <span>+</span>
                    <CountUp start={0} end={36498} duration={8} />
                    </div>
                    <p className='font-semibold text-gray-400 text-lg'>Orders Served</p>
                </div>
                <div className='md:border-r border-t p-16'>
                <div className='text-3xl font-bold text-rose-600 mb-1'>
                    <span>+</span>
                    <CountUp start={0} end={30078} duration={8} />
                    </div>
                    <p className='font-semibold text-gray-400 text-lg'>Five Star Received</p>
                </div>
                <div className='border-t p-16'>
                <div className='text-3xl font-bold text-rose-600 mb-1'>
                    <span>+</span>
                    <CountUp start={0} end={6570} duration={8} />
                    </div>
                    <p className='font-semibold text-gray-400 text-lg'>Friendly Shop</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Accordion