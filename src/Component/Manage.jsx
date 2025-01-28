import React from 'react'
import apple from "../assest/Subtract.svg"
import play from "../assest/Vector.svg"
import phone from "../assest/Phone.svg"
import tick from "../assest/check.svg"
import coinbase from "../assest/company/coinbase.svg"
import dropbox from "../assest/company/dropbox.svg"
import slake from "../assest/company/slake.svg"
import spotify from "../assest/company/spotify.svg"
import webflow from "../assest/company/webflow.svg"
import zoom from "../assest/company/zoom.svg"



const Manage = () => {
    return (
        <div className=''>
            <div className='bg-[#1C4670] -z-20 flex p-10 py-20 relative flex-col md:flex-row overflow-hidden mt-10' >
                <div className='flex flex-col gap-10 flex-[.7]' >
                    <h2 className='text-[#FFA229] md:text-white font-bold text-3xl'>Manage our Services by your Mobile Phone</h2>
                    <p className='text-gray-500' > Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.</p>

                    <div className='flex gap-4 flex-col z-10'>
                        <p className='text-white font-bold'>Get the App</p>
                        <div className='flex gap-2'>
                            <button className='py-2 px-6 rounded-md flex items-center gap-4 border bg-white border-[#A5C937]'>
                                <img src={apple} alt="apple" />
                                <div>
                                    <p className='font-semibold'>Get it on</p>
                                    <p className='font-bold'>App Store</p>
                                </div>
                            </button>

                            <button className='py-2 px-6 rounded-md flex items-center gap-4 border bg-white border-[#A5C937]' >
                                <img src={play} alt="apple" />
                                <div>
                                    <p className='font-semibold'>Get it on</p>
                                    <p className='font-bold'>Google Play</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex'>
                    <div className='md:absolute hidden md:block right-60 top-50 w-[300px]'>
                        <img className='' src={phone} alt="" />
                    </div>
                    <div className='absolute -z-10  right-0 top-0 md:opacity-100 opacity-50 w-[300px]'>
                        <img src={phone} alt="" />
                    </div>
                </div>

            </div>
            <div className='flex  flex-col items-center my-10 p-10 gap-4'>
                <h2 className='text-[#FFA229] font-semibold text-md' >WHY REGISTER KARO</h2>
                <h2 className='font-bold text-3xl'>Some Numbers are important</h2>
                <div className='flex gap-10 mt-5 justify-around w-full flex-wrap'>
                    <div className='text-center' >
                        <p className=' relative text-4xl font-bold  bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent  ' >

                            1M <span className='absolute top-[-8px] bg-red-400 font-bold text-2xl bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent '>+</span>
                        </p>
                        <p className='font-bold' >CUSTOMERS</p>
                    </div>
                    <div className='text-center' >
                        <p className=' relative text-4xl font-bold  bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent  ' >

                            12 <span className='absolute top-[-8px] bg-red-400 font-bold text-2xl bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent '>+</span>
                        </p>
                        <p className='font-bold' >YEARS OF EXCELLENCE</p>
                    </div>
                    <div className='text-center' >
                        <p className=' relative text-4xl font-bold  bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent  ' >

                            41 <span className='absolute top-[-8px] bg-red-400 font-bold text-2xl bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent '>+</span>
                        </p>
                        <p className='font-bold' >R&D ENGINEERS</p>
                    </div>
                    <div className='text-center' >
                        <p className=' relative text-4xl font-bold  bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent  ' >

                            78 <span className='absolute top-[-8px] bg-red-400 font-bold text-2xl bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent '>+</span>
                        </p>
                        <p className='font-bold' >COUNTRIES</p>
                    </div>
                    <div className='text-center' >
                        <p className=' relative text-4xl font-bold  bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent  ' >

                            3287 <span className='absolute top-[-8px] bg-red-400 font-bold text-2xl bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent '>+</span>
                        </p>
                        <p className='font-bold' >PARTNERS</p>
                    </div>
                    <div className='text-center' >
                        <p className=' relative text-4xl font-bold  bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent  ' >

                            42 <span className='absolute top-[-8px] bg-red-400 font-bold text-2xl bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent '>+</span>
                        </p>
                        <p className='font-bold' >AWARDS RECEIVED</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-8 flex-col p-10 justify-center items-center text-center  bg-gradient-to-l to-[#FFA229] from-[#1C4670] '>
                <div>
                    <p className='text-white text-sm font-semibold ' >1% OF THE INDUSTRY</p>
                </div>
                <h2 className='text-white font-bold text-3xl' >Welcome to your new digital reality.Now</h2>
                <div className='flex'>
                    <input type="text" className=' p-1 h-[40px] rounded-l-md bg-white focus:outline' placeholder='Enter Your Email' />
                    <button type="" className='bg-[#FFA229] p-2 rounded-r-md text-white'>Submit</button>
                </div>
                <div className='flex justify-evenly w-full flex-wrap' >
                    <div className='flex items-center justify-center gap-3'>
                        <img src={tick} alt="" />
                        <p className='text-white font-semibold'>Instant results</p>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <img src={tick} alt="" />
                        <p className='text-white font-semibold'>User-friendly</p>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <img src={tick} alt="" />
                        <p className='text-white font-semibold'>Personalized  customization</p>
                    </div>

                </div>

            </div>
            <div className='p-10'>
                <div className='flex gap-5 items-center justify-center flex-wrap'>
                    <img src={coinbase} alt="" />
                    <img src={dropbox} alt="" />
                    <img src={slake} alt="" />
                    <img src={spotify} alt="" />
                    <img src={webflow} alt="" />
                    <img src={zoom} alt="" />



                </div>

            </div>
        </div>
    )
}

export default Manage