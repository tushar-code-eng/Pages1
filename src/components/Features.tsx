import icon1 from "/public/FeatureIcon.png"
import icon2 from "/public/FeatureIcon2.png"
import icon3 from "/public/FeatureIcon3.png"

const Features = () => {
    return (
        <div className="py-16 lg:h-[90vh] flex flex-col items-center justify-center">
            <div className="text-center">
                <div className="text-5xl font-bold">
                    Features
                </div>
                <div className="font-thin mt-4">
                    Few good reasons why you should use Anima Landing Page Ui Kit to make your own pages.
                </div>
            </div>
            <div className="w-full mt-16">
                <div className="lg:flex items-center justify-around px-10">
                    <div className="p-10 shadow-lg rounded-xl flex items-center justify-center ">
                        <div className="max-w-60 flex flex-col items-center justify-center gap-4 ">
                            <div>
                                <img src={icon1.src} alt="" />
                            </div>
                            <div className=" text-center">
                                <div className="text-xl text-[#2d2d2d]">
                                    Fast building
                                </div>
                                <div className="font-thin text-xs mt-4">
                                    Tailor Anima's Landing Page UI Kit to your unique style and brand with customisable components, in no time!
                                </div>
                            </div>
                            <div>
                                Learn More
                            </div>
                        </div>
                    </div>
                    <div className="p-10 shadow-lg rounded-xl flex items-center justify-center">

                        <div className="max-w-60 flex flex-col items-center justify-center gap-4">
                            <div>
                                <img src={icon2.src} alt="" />
                            </div>
                            <div className=" text-center">
                                <div className="text-xl text-[#2d2d2d]">
                                    Responsive Design
                                </div>
                                <div className="font-thin text-xs mt-4">
                                    No need to worry about screen size. Anima's Landing Page UI Kit adapts to any screen size, from desktop to mobile.                            </div>
                            </div>
                            <div>
                                Learn More
                            </div>
                        </div>
                    </div>
                    <div className="p-10 shadow-lg rounded-xl flex items-center justify-center">

                        <div className="max-w-60 flex flex-col items-center justify-center gap-4">
                            <div>
                                <img src={icon3.src} alt="" />
                            </div>
                            <div className=" text-center">
                                <div className="text-xl text-[#2d2d2d]">
                                    No Code Needed                            </div>
                                <div className="font-thin text-xs mt-4">
                                    Zero coding skills required, Anima's Landing Page UI Kit empowers you to create stunning landing pages with ease.                            </div>
                            </div>
                            <div>
                                Learn More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
