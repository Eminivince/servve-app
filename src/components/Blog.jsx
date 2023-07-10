import React from 'react'
import Service4 from '../Images/service-4.jpg'
import Service5 from '../Images/service-5.jpg'
import Service6 from '../Images/service-6.jpg'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BiSolidStar} from 'react-icons/bi'
import blog1 from '../Images/blog-1.jpg'
import blog2 from '../Images/blog-2.jpg'
import blog3 from '../Images/blog-3.jpg'
import {BsCalendarWeekFill} from 'react-icons/bs'


const Blog = () => {

  const blogsData = [
    {
        date: "6 April 2022",
        desc: "Praesent at sem mollis nisijabi elementum lectus.",
        image: blog1,
    },
    {
        date: "6 April 2022",
        desc: "Cleaning & Renovation Service By Our Expert Cleaner.",
        image: blog2,
    },
    {
        date: "6 April 2022",
        desc: "Donec at laoreet augue est ai Etiam nunc erat.",
        image: blog3,
    },
    
  ]

  const blogPosts = blogsData.map(function (blogsData) {
    return <div>
        <>
            <div>
                <img src={blogsData.image} alt='pic' className='w-[100%] ' />
                <div className='flex space-x-3 mt-5 items-center text-rose-600 mb-2'>
                    <BsCalendarWeekFill />
                    <h1 className='font-semibold'>{blogsData.date}</h1>
                </div>
                <h1 className='font-bold text-xl mb-5'>{blogsData.desc}</h1>
                <div className='flex items-center space-x-3'>
                    <h1 className='font-bold text-rose-600'>Read More</h1>
                    <BsFillArrowRightCircleFill className='text-rose-600 font-bold'/>
                </div>
            </div>
        
        </>

    </div>
})

  return (
    <div className='md:px-28 px-6 pb-16'>
        <div>
          <h1 className='mb-4 text-rose-600 font-semibold'>Blog Post</h1>
          <div className='md:flex justify-between'>
            <h1 className='md:text-5xl text-3xl font-bold mb-8'>Our Latest Post</h1>
            <div className='flex items-center space-x-3'>
              <h1 className=' text-rose-600'>View All Posts</h1>
              <BsFillArrowRightCircleFill className='text-rose-600 font-bold'/>
            </div>
          </div>
        </div>

      <div className='flex space-x-5'>
      {blogPosts}
      </div>

        
      



      

    </div>
  )
}

export default Blog