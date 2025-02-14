import React from 'react'
import TeamMembers from './subComponents/TeamMembers'

import pic1 from "/public/pic1.png"
import pic2 from "/public/pic2.png"
import pic3 from "/public/pic3.png"

const Team = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <div className='text-center'>
                <div className='text-5xl font-bold'>
                    Meet our team
                </div>
                <div className='font-thin mt-3'>
                    Get to know the faces behind the scenes and learn about the values that drive us.
                </div>
            </div>
            <div className='flex mt-20 w-full items-center justify-around'>
                <TeamMembers pic={pic1} name='Sarah K.' role='Lead Designer' desc='With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life.' handles={["Twitter","Dribble","LinkedIn"]} />
                <TeamMembers pic={pic2} name='Michael L.' role='Product Designer' desc='Michael got a sharp eye for detail and the ability to turn any boring interface into a work of art.' handles={["Twitter","Dribble","Github"]} />
                <TeamMembers pic={pic3} name='Lauren M.' role='UX Designer' desc='Lauren is the mastermind behind all the seamless user experiences you love. Shes a wizard at making things intuitive.' handles={["Instagram","Dribble","LinkedIn"]} />
            </div>
        </div>
    )
}

export default Team
