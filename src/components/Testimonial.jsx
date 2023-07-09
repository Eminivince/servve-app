import React from 'react'
import {BiSolidQuoteLeft} from 'react-icons/bi'
import {BiSolidQuoteRight} from 'react-icons/bi'
import image2 from '../Images/testimonial-1.jpg'
import image1 from '../Images/testimonial-2.jpg'

const Testimonial = () => {
    const clientTestimonyData =[
        {
            name: "Angel Kolenia",
            image: image1,
            position: "Co Founder",
            testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur, sed voluptatem nobis consequatur nisi iste laudantium impedit et soluta officia non vitae inventore rem magnam unde, laborum voluptatum quas!"
        },
        {
            name: "Johan Martin",
            image: image2,
            position: "CEO Founder",
            testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur, sed voluptatem nobis consequatur nisi iste laudantium impedit et soluta officia non vitae inventore rem magnam unde, laborum voluptatum quas!"
        }
    ]

    const testimonialData = clientTestimonyData.map(function(clientTestimonyData){
        return <div>
            <div className='flex flex-col px-6 py-10 bg-white rounded-xl shadow-xl'>
            <div className='flex justify-between md:space-x-40 '>
                <div className='header w-[100%]  flex md:space-x-12 space-x-6 items-center mb-7'>
                    <div className='relative'>
                        <img src={clientTestimonyData.image} alt='Angel' className='rounded-xl' />
                        <div className='absolute top-6 -right-4 bg-rose-600 p-1 rounded-lg'>
                        <BiSolidQuoteLeft className='md:text-3xl text-xl text-white' />
                        </div>
                        
                    </div>
                    <div>
                        <h1 className='font-bold md:text-xl'>{clientTestimonyData.name}</h1>
                        <p className='font-semibold text-gray-500 text-sm md:text-base'>{clientTestimonyData.position}</p>
                    </div>
                </div>

                <div>
                <BiSolidQuoteRight className='md:text-8xl text-5xl text-gray-400'/>
                </div>

                
            </div>
            <div>
                <h1 className='md:text-lg text-justify
                '>{clientTestimonyData.testimony}</h1>
            </div>
            </div>
            
        </div>
    })

  return (
    <div className='md:px-28 px-6 pb-16 bg-rose-100 pt-10'>
        <div className='flex flex-col items-center '>
        <h1 className="text-rose-600-font-semibold mb-3 text-lg font-semibold text-rose-600">
            Testimonials
        </h1>
        <h1 className="md:text-5xl text-3xl font-bold mb-8">Our client Say About Us</h1>
        </div>
        


        <div className='md:flex space-y-8 justify-between md:space-x-10'>
            {testimonialData}
        </div>


    </div>
  )
}

export default Testimonial