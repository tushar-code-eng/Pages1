import React from 'react'

const Metrics = () => {
    return (
        <div className='h-[60vh]'>
            <div className='text-[#2d2d2d] text-center'>
                <div className='text-5xl font-bold '>
                    Our Metrics Tell the Story
                </div>
                <div className='mt-5'>
                    Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style.
                </div>
            </div>
            <div className='flex items-center justify-around mt-20'>
                <div className='flex items-center gap-4'>
                    <div className='w-[7px] h-[70px] bg-[#F2BFAF]'></div>
                    <div className=' text-[#2d2d2d]'>
                        <div className='text-5xl font-extrabold'>
                            10k+
                        </div>
                        <div>
                            Website Launched
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='w-[7px] h-[70px] bg-[#F2BFAF]'></div>
                    <div className=' text-[#2d2d2d]'>
                        <div className='text-5xl font-extrabold'>
                            931k+
                        </div>
                        <div>
                            Projects created with Anima                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='w-[7px] h-[70px] bg-[#F2BFAF]'></div>
                    <div className=' text-[#2d2d2d]'>
                        <div className='text-5xl font-extrabold'>
                            240k+
                        </div>
                        <div>
                            New users joined Anima                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='w-[7px] h-[70px] bg-[#F2BFAF]'></div>
                    <div className=' text-[#2d2d2d]'>
                        <div className='text-5xl font-extrabold'>
                            12k+
                        </div>
                        <div>
                            Teams used Anima                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Metrics
