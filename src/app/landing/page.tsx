import Features from '@/components/Features'
import Feedbacks from '@/components/Feedbacks'
import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'
import Hero from '@/components/Hero'
import Icons from '@/components/Icons'
import LandingPageUI from '@/components/LandingPageUI'
import Metrics from '@/components/Metrics'
import Navbar from '@/components/Navbar'
import Team from '@/components/Team'
import VideoContent from '@/components/VideoContent'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-[1500px] mx-auto'>
                <Hero />
                <VideoContent />
                <Icons />
                <Features />
                <Metrics />
                <Feedbacks />
                <Team />
                <LandingPageUI />
                <GetInTouch />
            </div>
            <Footer />
        </div>
    )
}

export default page
