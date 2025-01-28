import React from 'react'
import photo from "../assest/Group image.png"
import dots from "../assest/dots.svg"
import design from "../assest/design.svg"
import security from "../assest/security.svg"
import tick from "../assest/Tick.png"
import smile from "../assest/smile.svg"
import person from "../assest/profile.svg"
import ideas from "../assest/bulb.svg"
import growth from "../assest/growth.svg"
import instructor from "../assest/instructor.png"
const About = () => {
    return (
        <>
            <div className='flex gap-4 justify-between items-center p-10 flex-col md:flex-row '>
                <img className='absolute  right-0' src={design} alt="" />

                <div className='flex-[.9] flex gap-5 flex-col'>
                    <p className='  text-[#EB8D15] font-medium' >WELCOME TO REGISTERKARO.IN</p>
                    <h2 className='font-extrabold text-4xl' >About <span className='text-[#EB8D15]' >Register Karo</span> </h2>
                    <p className='' >We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                        their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                        customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations</p>
                    <p>

                        I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
                    <button className='w-fit mt-5 bg-[#1C4670] rounded-[4px] text-white py-3 px-6 align-center justify-center' > See All Services</button>
                </div>
                <div className='flex-1'>
                    <img src={photo} alt="" />
                </div>
                <img className='absolute right-0 -z-10 ' src={dots} alt="" />
            </div>
            <div className='md:grid md:grid-cols-4 gap-8 flex flex-col px-10' >
                <div className='col-span-2 gap-4 flex flex-col'>
                    <p className=' text-[#EB8D15] font-medium' >WHY REGISTERKARO.IN</p>
                    <h2 className='text-2xl font-bold' >Why Choose Register Karo</h2>
                    <p>It is with consistent services and results that build trust with the people and that in
                        turn help us to serve the business better.</p>
                </div>
                <div className='max-h-[220px] px-2 py-8 border-[#FCDDEC] border-[1px] rounded-2xl bg-[#FEF3EF] flex flex-col text-center items-center gap-4'>
                    <img className='w-[40px]' src={security} alt="" />
                    <h2 className='text-black font-bold'>Confidential & Safe</h2>
                    <p>All your private information is safe with us</p>
                </div>
                <div className=' max-h-[220px] px-2 py-8 border-[#FCDDEC] border-[1px] rounded-2xl bg-[#F1FBF3] flex flex-col text-center items-center gap-4' >
                    <img src={tick} alt="" />
                    <h2 className='text-black font-bold' >No Hidden Fee</h2>
                    <p>Everything is put before you with
                        no hidden charges or conditions</p>
                </div>
                <div className='bg-transparent'>

                </div>
                <div className=' max-h-[230px]  py-8 px-2 border-[#FCDDEC] border-[1px] rounded-2xl bg-[#EDF3FF] flex flex-col text-center items-center gap-4' >
                    <img src={smile} alt="" />
                    <h2 className='text-black font-bold' >Guaranteed Satisfaction</h2>
                    <p>We ensure that you stay 100% satisfied with our offered services</p>
                </div>
                <div className=' max-h-[230px] px-2 py-8 border-[#FCDDEC] border-[1px] rounded-2xl bg-[#FBF1FB] flex flex-col text-center items-center gap-4' >
                    <img src={person} alt="" />
                    <h2 className='text-black font-bold' >Exper CA/CS Assistance</h2>
                    <p>Prompt support from our in-house
                        expert professionals</p>
                </div>
                <div className=' max-h-[230px] px-2 py-8 border-[#FCDDEC] border-[1px] rounded-2xl bg-[#27ae5f2e] flex flex-col text-center items-center gap-4' >
                    <img src={security} alt="" />
                    <h2 className='text-black font-bold' >Confidential & Safe</h2>
                    <p>All your private information is safe
                        with us</p>
                </div>
            </div>
            <div className='md:flex md:flex-row flex-col bg-[#1C4670] py-15 p-10 flex gap-15 mt-20   '>
                <div className='flex-[.9] flex flex-col gap-5'>
                    <h2 className='font-bold text-3xl text-white' >Our Video Introduction</h2>
                    <p className='text-[#AAB5CD]' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quod debitis quam quia cum dolorem incidunt, ipsam voluptatum dolore porro maxime quibusdam vitae deleniti vel.</p>
                    <div className=' flex gap-5 items-start mt-5'>
                        <div className='p-4  rounded-full bg-[#FFA229]'>

                            <img className='w-[60px] ' src={ideas} alt="" />
                        </div>
                        <div className='flex flex-col gap-1.5' >
                            <h3 className='text-white font-bold text-xl' >Explore ideas together</h3>
                            <p className='text-[#AAB5CD]' >Lorem ipsum dolor sit cum dolor porro odio nihil cupiditate deleniti quae architecto pariatur?</p>
                        </div>
                    </div>
                    <div className=' flex gap-5 items-start mt-5'>
                        <div className='p-4  rounded-full bg-[#FFA229]'>

                            <img className='w-[60px] ' src={growth} alt="" />
                        </div>
                        <div className='flex flex-col gap-1.5' >
                            <h3 className='text-white font-bold text-xl' >Explore ideas together</h3>
                            <p className='text-gray-400' >Lorem ipsum dolor sit cum dolor porro odio nihil cupiditate deleniti quae architecto pariatur?</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1  ' >
                    <img className='bg-[#0b2743] outline-none border-none' src={instructor} alt="" />
                </div>

            </div>
        </>
    )
}

export default About