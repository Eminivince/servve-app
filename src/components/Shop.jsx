import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import shop1 from '../Images/shop-1.png'
import shop2 from '../Images/shop-2.png'
import shop3 from '../Images/shop-3.png'
import shop4 from '../Images/shop-4.png'

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

  return (
    <div className='px-28 pb-16'>
        <div>
          <h1 className='mb-4 text-rose-600 font-semibold'>Shop</h1>
          <div className='flex justify-between'>
            <h1 className='text-5xl font-bold mb-8'>Our Feature Shop</h1>
            <div className='flex items-center space-x-3'>
              <h1 className=' text-rose-600'>View All Shops</h1>
              <BsFillArrowRightCircleFill className='text-rose-600 font-bold'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shop