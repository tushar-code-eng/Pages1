import React from 'react'
import { Button } from './ui/button'
import rocket from '/public/RocketLaunch.png'

const Hero = () => {
    return (
        <div className=' h-[70vh] flex flex-col justify-center items-center'>
            <div className='text-center'>
                <div className='text-8xl text-[#2D2D2D] font-bold '>
                    Build Landing Pages with <br /> Video embedded
                </div>
                <div className='text-[#676666] text-3xl mt-4 font-thin'>
                    With Anima, you can embed Typeform in just a few steps.
                </div>
                <div className='flex gap-4 items-center justify-center mt-6'>
                    <div>
                        <Button className='bg-[#009379] text-white py-6 px-5 rounded-xl'>
                            <span>
                                <img src={rocket.src} alt="" />
                            </span>
                            <span>
                                Get Started
                            </span>
                        </Button>
                    </div>
                    <div>
                        <Button className='bg-transparent text-[#009379] py-6 px-5 border border-[#009379] rounded-xl'>
                            <span>
                                How it works
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
