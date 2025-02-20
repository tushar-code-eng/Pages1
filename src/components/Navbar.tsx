import React from 'react'
// import logo from '/public/Logo.png'
import rocket from '/public/RocketLaunch.png'
import { Button } from './ui/button'
import { ClapIcon } from './ui/clap'

const Navbar = () => {
    return (
        <div className='w-full flex items-center bg-transparent justify-between px-6 py-4'>
            <div className='flex items-center'>
                <ClapIcon />
                <div className='text-xl text-[#2D2D2D] hidden md:block'>
                    <span className='font-bold'>Landing</span>
                    <span>Page</span>
                </div>
            </div>
            <div className='gap-10 hidden sm:flex'>
                <div className='flex items-center gap-4 text-[#009379]'>
                    <div className='cursor-pointer relative group '>
                        Contact
                        <span className='h-[0.75px] w-full bottom-0 right-0 bg-[#009379] absolute group-hover:w-0 duration-300'></span>
                        <span className='h-[0.75px] w-0 bottom-0 left-0 bg-[#009379] absolute group-hover:w-full duration-300 delay-100'></span>
                    </div>
                    <div className='cursor-pointer relative group '>
                        How it works
                        <span className='h-[0.75px] w-full bottom-0 right-0 bg-[#009379] absolute group-hover:w-0 duration-300'></span>
                        <span className='h-[0.75px] w-0 bottom-0 left-0 bg-[#009379] absolute group-hover:w-full duration-300 delay-100'></span>
                    </div>
                </div>
                <div className=''>
                    <Button className='bg-[#009379] text-white'>
                        <span>
                            <img src={rocket.src} alt="" />
                        </span>
                        <span>
                            Get Started
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
