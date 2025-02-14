import FeedbackDiv from "./subComponents/FeedbackDiv"
import pic1 from "/public/Photo.png"
import pic2 from "/public/Photo2.png"

const Feedbacks = () => {
    return (
        <div className="h-[90vh] bg-[#F2BFAF] flex flex-col items-center justify-center">
            <div className="text-center" >
                <div className="text-5xl font-bold">
                    Real Stories from Satisfied Customers
                </div>
                <div className="font-thin mt-4 text-lg">
                    See how our landing page ui kit is making an impact.
                </div>
            </div>
            <div className="flex w-full items-center justify-center gap-16 mt-10">
                <FeedbackDiv pic={pic1} name="Lauren M." role="UI Designer @Boo" stars={5} desc='"Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently."' />
                <FeedbackDiv pic={pic2} name="David B." role="Lead Designer @Creative" stars={5} desc="“The Landing Page UI Kit has been a game changer. The pre-designed components and templates have helped us deliver projects faster!”" />
            </div>
        </div>
    )
}

export default Feedbacks
