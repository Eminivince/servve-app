import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import shop1 from '../Images/shop-1.png'
import shop2 from '../Images/shop-2.png'
import shop3 from '../Images/shop-3.png'
import shop4 from '../Images/shop-4.png'
import {BiSolidStar} from 'react-icons/bi'

const Shop = () => {
    const shopData = [
        {
            category: "Gadget",
            service: "Gadget Repair",
            name: "05 Services",
            image: shop1,
            
        },
        {
            category: "Cleaning",
            service: "Cleaning Store",
            name: "01 Services",
            image: shop2,
            
        },
        {
            category: "Plumbing",
            service: "Plumbing Store",
            name: "08 Services",
            image: shop3,
            
        },
        {
            category: "Security",
            service: "Security Agency",
            name: "12 Services",
            image: shop4,
            
        },
        
      ]

      const ourShops = shopData.map(function(shopData){
        return <div className='w-[100%] mb-6 md:mb-0'>
            <div className='flex flex-col items-center p-7 bg-white  rounded-lg shadow-xl'>
                <div className='rounded-full h-36 w-36 flex mb-6 border'>
                    <img src={shopData.image} alt='shop' className=' mx-auto my-auto'/>
                </div>
                
                <h1 className='mb-4 font-semibold text-gray-500'>{shopData.category}</h1>
                <h1 className='mb-4 font-bold text-xl'>{shopData.service}</h1>
                <div className='mb-4 flex space-x-2 items-center'>
                    <div className='flex'>
                    <BiSolidStar className='text-orange-500' />
                    <BiSolidStar className='text-orange-500'/>
                    <BiSolidStar className='text-orange-500'/>
                    <BiSolidStar className='text-orange-500'/>
                    <BiSolidStar className='text-orange-500'/>
                    </div>
                    <div>(5/5)</div>
                </div>
                <div>
                    <div className='flex space-x-2 items-center'>
                    <h1 className='text-rose-600 font-bold'>View Details</h1>
                    <BsFillArrowRightCircleFill  className='text-rose-600 font-bold'/>
                    </div>
                </div>
            </div>
        </div>
      })

  return (
    <div className='md:px-28 px-6 pb-16 bg-rose-100 pt-8'>
        <div>
          <h1 className='mb-4 text-rose-600 font-semibold'>Shop</h1>
          <div className='md:flex justify-between '>
            <h1 className='md:text-5xl text-3xl font-bold mb-8'>Our Feature Shop</h1>
            <div className='flex items-center space-x-3'>
              <h1 className=' text-rose-600'>View All Shops</h1>
              <BsFillArrowRightCircleFill className='text-rose-600 font-bold'/>
            </div>
          </div>
        </div>
        <div className='md:flex flex md:flex-row flex-col md:space-x-5'>
            {ourShops}
        </div>
    </div>
  )
}

export default Shop