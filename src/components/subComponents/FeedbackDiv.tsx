import { StaticImageData } from 'next/image'
import React from 'react'
import star from "/public/star.png"


const FeedbackDiv = ({ pic, name, role, stars, desc }: { pic: StaticImageData, name: string, role: string, stars: number, desc: string }) => {
    return (
        <div className='bg-white sm:grid grid-cols-3 w-full md:w-[500px] sm:h-[250px] xl:w-[550px] p-5 sm:p-0 m-2 xl:mx-5 xl:py-10 mt-5 rounded-2xl'>
            <div className='col-span-1 flex flex-col items-center justify-center'>
                <div>
                    <img src={pic.src} alt="" />
                </div>
                <div className='text-center mt-2'>
                    <div className='text-xl font-semibold'>
                        {name}
                    </div>
                    <div className='font-thin text-xs mt-1'>
                        {role}
                    </div>
                </div>
            </div>
            <div className='col-span-2 flex flex-col items-center sm:items-start justify-center px-6'>
                <div className='flex items-center gap-1'>
                    {Array.from({ length: stars }).map((_, index) => (
                        <img key={index} src={star.src} alt="star" />
                    ))}
                </div>
                <div className='font-thin text-sm mt-4 text-center sm:text-left'>
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default FeedbackDiv
