import insta from "/public/Insta.png"
import dribble from "/public/Dribble.png"
import twitter from "/public/Twitter.png"
import be from "/public/Be.png"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
        <div className="w-full bg-[#2d2d2d] flex items-center justify-between p-5">
            <div className="text-white text-xs font-thin">
                ©  2025  Anima’s Landing Page Ui Kit.
            </div>
            <div>
                <div className="flex gap-3">
                    <Link href="#" className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors">
                        <Image
                            src={insta}
                            alt="Instagram"
                            width={16}
                            height={16}
                            className="h-4 w-4"
                        />
                    </Link>
                    <Link href="#" className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors">
                        <Image
                            src={dribble}
                            alt="Dribbble"
                            width={16}
                            height={16}
                            className="h-4 w-4"
                        />
                    </Link>
                    <Link href="#" className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors">
                        <Image
                            src={be}
                            alt="Behance"
                            width={16}
                            height={16}
                            className="h-4 w-4"
                        />
                    </Link>
                    <Link href="#" className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors">
                        <Image
                            src={twitter}
                            alt="Twitter"
                            width={16}
                            height={16}
                            className="h-4 w-4"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
