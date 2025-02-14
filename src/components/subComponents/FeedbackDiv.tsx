import { StaticImageData } from 'next/image'
import React from 'react'
import star from "/public/star.png"


const FeedbackDiv = ({ pic, name, role, stars, desc }: { pic: StaticImageData, name: string, role: string, stars: number, desc: string }) => {
    return (
        <div className='bg-white grid grid-cols-3 w-[550px] p-10 rounded-2xl'>
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
            <div className='col-span-2 flex flex-col justify-center px-6'>
                <div className='flex items-center gap-1'>
                    {Array.from({ length: stars }).map((_, index) => (
                        <img key={index} src={star.src} alt="star" />
                    ))}
                </div>
                <div className='font-thin text-sm mt-4'>
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default FeedbackDiv
