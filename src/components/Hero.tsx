"use client";
// import React from 'react'
// import { Button } from './ui/button'
import rocket from '/public/RocketLaunch.png'

// const Hero = () => {
//     return (
//         <div className='xl:h-[70vh] pt-8 sm:pt-20 flex flex-col justify-center items-center'>
//             <div className='text-center'>
//                 <div className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#2D2D2D] font-bold '>
//                     Build Landing Pages with <br /> Video embedded
//                 </div>
//                 <div className='text-[#676666] text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 font-thin'>
//                     With Anima, you can embed Typeform in just a few steps.
//                 </div>
//                 <div className='sm:flex gap-4 items-center justify-center '>
//                     <div>
//                         <Button className='bg-[#009379] text-white py-6 px-5 rounded-xl min-w-40 mt-6'>
//                             <span>
//                                 <img src={rocket.src} alt="" />
//                             </span>
//                             <span>
//                                 Get Started
//                             </span>
//                         </Button>
//                     </div>
//                     <div>
//                         <Button className='bg-transparent text-[#009379] py-6 px-5 border border-[#009379] rounded-xl min-w-40 mt-6'>
//                             <span>
//                                 How it works
//                             </span>
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero


import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { Button } from "./ui/button";

export default function Hero() {
    return (
        <AuroraBackground>
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
            <div className="text-3xl md:text-8xl font-bold dark:text-white text-center">
                Build Landing Pages with <br /> Video embedded
            </div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                With Anima, you can embed Typeform in just a few steps.
            </div>
            <div className='sm:flex gap-4 items-center justify-center '>
                <div>
                    <Button className='bg-[#009379] text-white py-6 px-5 rounded-xl min-w-40 mt-6'>
                        <span>
                            <img src={rocket.src} alt="" />
                        </span>
                        <span>
                            Get Started
                        </span>
                    </Button>
                </div>
                <div>
                    <Button className='bg-transparent text-[#009379] py-6 px-5 border border-[#009379] rounded-xl min-w-40 mt-6'>
                        <span>
                            How it works
                        </span>
                    </Button>
                </div>
            </div>
        </motion.div>
        </AuroraBackground>
    );
}

