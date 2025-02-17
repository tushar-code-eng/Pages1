import React from 'react'
import logo from '/public/Logo.png'
import rocket from '/public/RocketLaunch.png'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div className='w-full flex items-center justify-between px-6 py-4'>
            <div className='flex items-center'>
                <div>
                    <img src={logo.src} alt="" />
                </div>
                <div className='text-xl text-[#2D2D2D] hidden md:block'>
                    <span className='font-bold'>Landing</span>
                    <span>Page</span>
                </div>
            </div>
            <div className='gap-10 hidden sm:flex'>
                <div className='flex items-center font-semibold gap-4 text-[#009379]'>
                    <div>
                        Contact
                    </div>
                    <div>
                        How it works
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
