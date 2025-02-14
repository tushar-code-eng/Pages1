import icon1 from "/public/Icon1.png"
import icon2 from "/public/Icon2.png"
import icon3 from "/public/Icon3.png"
import icon4 from "/public/Icon4.png"
import icon5 from "/public/Icon5.png"
import icon6 from "/public/Icon6.png"

const Icons = () => {
    return (
        <div className="bg-[#009379] py-4">
            <div className="text-center text-3xl font-semibold text-white   ">
                Our users
            </div>
            <div className="flex items-center justify-evenly mt-2">
                <div>
                    <img className="w-16" src={icon1.src} alt="" />
                </div>
                <div>
                    <img className="w-20" src={icon2.src} alt="" />
                </div>
                <div>
                    <img className="w-20" src={icon3.src} alt="" />
                </div>
                <div>
                    <img className="w-20" src={icon4.src} alt="" />
                </div>
                <div>
                    <img className="w-20" src={icon5.src} alt="" />
                </div>
                <div>
                    <img className="w-16" src={icon6.src} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Icons
