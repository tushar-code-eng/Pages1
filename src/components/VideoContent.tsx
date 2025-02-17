import React from 'react'
import video from "/public/Video.png"

const VideoContent = () => {
    return (
        <div className='h-[50vh] xs:h-[55vh] sm:h-[70vh] md:h-screen w-full flex items-center justify-center p-5'>
            <div className=' text-center px-5 py-3 pb-5 border shadow-xl bg-[#f5f5f5] rounded-xl'>
                <div className='flex gap-3'>
                    <div className='w-[12px] h-[12px] rounded-[50%] bg-[#DF2E2E]' />
                    <div className='w-[12px] h-[12px] rounded-[50%] bg-[#DFB81D]' />
                    <div className='w-[12px] h-[12px] rounded-[50%] bg-[#1EB51B]' />
                </div>
                <div className='mt-2 rounded-xl overflow-hidden '>
                    <img src={video.src} alt="" />
                </div>
            </div>
        </div>
    )
}

export default VideoContent
