import { StaticImageData } from 'next/image'
import React from 'react'

const TeamMembers = ({ pic, name, role, desc, handles }: { pic: StaticImageData, name: string, role: string, desc: string, handles: string[] }) => {
    return (
        <div className='flex flex-col items-center justify-center w-64'>
            <div>
                <img src={pic.src} alt="" />
            </div>
            <div className='text-center mt-3'>
                <div className='text-lg font-bold'>
                    {name}
                </div>
                <div className='font-light text-xs'>
                    {role}
                </div>
            </div>
            <div className='text-center font-light mt-5 text-sm'>
                {desc}
            </div>
            <div className='flex gap-4 items-center mt-8'>
                {handles.map((handle,index) => (
                    <div className='font-bold text-[#009379]' key={index}>
                        {handle}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TeamMembers
