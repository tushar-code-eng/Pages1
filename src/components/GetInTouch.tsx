import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import phone from "/public/PhoneCall.png"
import insta from "/public/Insta.png"
import dribble from "/public/Dribble.png"
import twitter from "/public/Twitter.png"
import be from "/public/Be.png"
import user from "/public/User.png"
import email from "/public/Email.png"

export default function ContactForm() {
    return (
        <div className="min-h-[65vh] p-4 md:p-8 flex">
            <div className="w-full max-w-5xl  bg-background rounded-2xl p-8 md:p-12">
                <h1 className="text-4xl font-bold text-foreground mb-4 text-[#2d2d2d]">Let's get in touch!</h1>
                <p className="text-lg text-foreground/80 mb-8 text-[#2d2d2d] font-light">
                    Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly
                    support.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                {/* <Phone className="h-6 w-6 text-primary" /> */}
                                <Image src={phone} width={24}
                                    height={24}
                                    className="h-6 w-6" alt="phone" />
                                <span className="text-foreground">+012 345 6789</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image src={email} width={24}
                                    height={24}
                                    className="h-6 w-6" alt="phone" />
                                <span className="text-foreground">Hello@animaapp.com</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">Connect with us</h2>
                            <div className="flex gap-4">
                                <Link href="#" className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors">
                                    <Image
                                        src={insta}
                                        alt="Instagram"
                                        width={24}
                                        height={24}
                                        className="h-6 w-6"
                                    />
                                </Link>
                                <Link href="#" className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors">
                                    <Image
                                        src={dribble}
                                        alt="Dribbble"
                                        width={24}
                                        height={24}
                                        className="h-6 w-6"
                                    />
                                </Link>
                                <Link href="#" className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors">
                                    <Image
                                        src={be}
                                        alt="Behance"
                                        width={24}
                                        height={24}
                                        className="h-6 w-6"
                                    />
                                </Link>
                                <Link href="#" className="p-2 bg-accent rounded-full hover:bg-accent/80 transition-colors">
                                    <Image
                                        src={twitter}
                                        alt="Twitter"
                                        width={24}
                                        height={24}
                                        className="h-6 w-6"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <div className="relative">
                                <Input type="text" placeholder="Full Name" className="pl-10 py-6 rounded-xl border-muted" />
                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <Image
                                        src={user}
                                        alt="User"
                                        width={20}
                                        height={20}
                                        className="h-5 w-5"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="relative">
                                <Input type="email" placeholder="Email" className="pl-10 py-6 rounded-xl border-muted" />
                                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                                    <Image
                                        src={email}
                                        alt="User"
                                        width={20}
                                        height={20}
                                        className="h-5 w-5"
                                    />
                                </div>
                            </div>
                        </div>
                        <Button className="w-32 py-6 rounded-xl bg-[#009379] hover:bg-primary/90 text-primary-foreground">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

