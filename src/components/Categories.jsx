import React from 'react'
import image1 from '../Images/cre-service-1.jpg'
import image2 from '../Images/cre-service-2.jpg'
import image3 from '../Images/cre-service-3.jpg'
import image4 from '../Images/cre-service-4.jpg'
import image5 from '../Images/cre-service-5.jpg'
import image6 from '../Images/cre-service-6.jpg'

const Categories = () => {

    const categoriesData = [
        {
            Service: "House Sift",
            image: image1,
            items: 75
        },
        {
            Service: "Driver",
            image: image2,
            items: 80
        },
        {
            Service: "Security",
            image: image3,
            items: 200
        },
        {
            Service: "Gadget Repair",
            image: image4,
            items: 50
        },
        {
            Service: "Car & Car",
            image: image5,
            items: 75
        },
        {
            Service: "Home Clean",
            image: image6,
            items: 85
        }
    ]

    const ourServices = categoriesData.map(function (categoriesData) {
        return <div>
            <img src={categoriesData.image} alt={categoriesData.Service} />
            <h1 className='bg-rose-600 text-center p-4 text-white font-semibold'>{categoriesData.Service}</h1>

        </div>
    })

    return (

        <div className='px-28 pb-16'>
            <h1 className='mb-3 font-semibold text-rose-600'>Category</h1>
            <div className='mb-8 font-bold text-5xl'>
                <h1>See All Our Creative Services</h1>
            </div>

            <div className='flex space-x-5'>
                {ourServices}
            </div>
        </div>

    )
}

export default Categories