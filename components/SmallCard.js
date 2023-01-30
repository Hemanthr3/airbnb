import Image from 'next/legacy/image'
import React from 'react'

const SmallCard = ({img,location,distance}) => {
  return (
    // <div className='flex items-center relative h-[100px] w-[270px] bg-gray-200 rounded-[10px] mr-4 mb-4'>
    //    <Image
    //     src={img}
    //     objectFit='fit'
    //     height='100px'
    //     width='100px'
    //     className='rounded-[10px]'
    // />
    // <div className='p-[15px]'>
    //     <p>
    //         {location}
    //     </p>
    //     <p>
    //         {distance}
    //     </p>
    // </div> 
    // </div>

    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
        <div className='relative h-16 w-16'>
            <Image 
                src={img}
                layout='fill'
                className='rounded-lg'
                alt=''
            />
        </div>
        <div>
            <h2>
                {location}
            </h2>
            <h3 className='text-gray-500'>
                {distance}
            </h3>
        </div>
    </div>
  )
}

export default SmallCard