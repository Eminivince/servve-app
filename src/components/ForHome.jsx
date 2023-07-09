import React from 'react'
import Service4 from '../Images/service-4.jpg'
import Service5 from '../Images/service-5.jpg'
import Service6 from '../Images/service-6.jpg'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BiSolidStar} from 'react-icons/bi'
import author4 from '../Images/service-author-4.png'
import author5 from '../Images/service-author-5.png'
import author6 from '../Images/service-author-6.png'


const ForHome = () => {

  const servicesData = [
    {
        Service: "Spa and Beauty",
        image: Service4,
        items: 75,
        company: "Egens Lab",
        author: author4
    },
    {
        Service: "House Sift",
        image: Service5,
        items: 80,
        company: "Finibus",
        author: author5
    },
    {
        Service: "Electrician",
        image: Service6,
        items: 200,
        company: "Creatus",
        author: author6
    },
  ]

  const homeServices = servicesData.map(function (servicesData) {
    return <div className='py-4'>

<div className='border rounded-lg shadow-xl'>
          <div>
          <div className='relative'>
              <h1 className='bg-rose-600 w-fit p-2 rounded-lg text-white absolute right-2 top-2'>{servicesData.Service}</h1>
              <img src={servicesData.image} alt="green" className='rounded-lg mb-6 w-[100%]'/>
            </div>
            <div className='flex items-center space-x-4 mb-5 px-4 pb-4'>
            <div>
            <img src={servicesData.author} alt='authorserve' />
            </div>
            <div>
            <div>{servicesData.company}</div>
            <div className="rating flex items-center space-x-2">
              <div className='flex'>
                <BiSolidStar className='text-orange-500' />
                <BiSolidStar className='text-orange-500'/>
                <BiSolidStar className='text-orange-500'/>
                <BiSolidStar className='text-orange-500'/>
                <BiSolidStar className='text-orange-500'/>
              </div>
              <div>(5/5)</div>
              
            </div>
            </div>
            </div>

            
            
          </div>
          <div className="px-4 pb-4">
          <h1 className='text-lg font-semibold mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta.</h1>
          <div className='flex justify-between items-center'>
            <div>
              <h1>Started At: <span className='text-rose-600 font-bold'>$250</span></h1>
            </div>
            <div className='flex space-x-2 items-center'>
              <h1 className='text-rose-600 font-bold'>View Details</h1>
              <BsFillArrowRightCircleFill  className='text-rose-600 font-bold'/>
            </div>
          </div>
          </div>
          
        </div>
        

    </div>
})

  return (
    <div className='md:px-28 px-6 pb-16'>
        <div>
          <h1 className='mb-4 text-rose-600 font-semibold'>Services</h1>
          <div className='md:flex justify-between'>
            <h1 className='md:text-5xl text-3xl font-bold mb-8'>For Your Fome</h1>
            <div className='flex items-center space-x-3'>
              <h1 className=' text-rose-600'>View All Services</h1>
              <BsFillArrowRightCircleFill className='text-rose-600 font-bold'/>
            </div>
          </div>
        </div>

      <div className='md:flex md:space-x-5'>
      {homeServices}
      </div>
      

    </div>
  )
}

export default ForHome