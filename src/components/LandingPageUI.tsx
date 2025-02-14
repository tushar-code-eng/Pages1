import { Button } from "./ui/button"
import pic from "/public/landing.png"
import rocket from '/public/RocketLaunch.png'

const LandingPageUI = () => {
    return (
        <div className="h-[70vh]" >
            <div className="w-[90%] h-[90%] bg-[#F2BFAF] mx-auto flex flex-col items-center rounded-xl relative overflow-hidden">
                <div className="w-full flex flex-col items-center justify-center gap-8 mt-10">
                    <div className="text-[#2d2d2d] text-center flex flex-col gap-6">
                        <div className="text-5xl font-bold">
                            Get Landing Page UI Kit Today!
                        </div>
                        <div className="font-light">
                            Break Figma limits and explore the endless possibilities with Anima.
                        </div>
                    </div>
                    <div>
                        <Button className="bg-[#009379] text-white py-6 px-5 rounded-xl" >
                            <span>
                                <img src={rocket.src} alt="" />
                            </span>
                            <span>
                                Get Started
                            </span>
                        </Button>
                    </div>
                </div>
                <div>
                    <div className="bg-white p-5 rounded-xl drop-shadow-2xl absolute left-[20%] -bottom-5 mt-10">
                        <div className="absolute top-2 left-[46%] flex items-center gap-3">
                            <div className="h-[6px] w-[6px] bg-[#cecece] rounded-xl " />
                            <div className="h-[6px] w-[60px] bg-[#cecece] rounded-xl " />
                            <div className="h-[6px] w-[6px] bg-[#cecece] rounded-xl " />
                        </div>
                        <img src={pic.src} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPageUI
