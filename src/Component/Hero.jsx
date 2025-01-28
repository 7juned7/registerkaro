import React from 'react'
import hero from "../assest/sitting-person.svg"
import background from "../assest/background.svg"
import star from "../assest/star.svg"
import yellowstar from "../assest/yellow-star.svg"
import persons from "../assest/persons.svg"
import handShake from "../assest/collab.svg"
import play from "../assest/play.svg"
import teeer from "../assest/teeer.svg"

const Hero = () => {

    return (
        <section>
            <div className='bg-contain relative md:flex-row flex flex-col'
                style={{ background: `url(${background})` }}>


                <div className=' flex flex-col md:ml-22 gap-7 md:pr-10 ml-2 '
                >
                    <div className='flex gap-2 mt-8'>
                        <img src={star} alt="start" />
                        Google Rating
                        <div className='flex'>
                            <img src={yellowstar} alt="start" />
                            <img src={yellowstar} alt="start" />
                            <img src={yellowstar} alt="start" />
                            <img src={yellowstar} alt="start" />
                            <img src={yellowstar} alt="start" />
                        </div>

                    </div>
                    <div className=' flex-col flex gap-7'>
                        <div>
                            <h1 className=' text-4xl font-medium leading-14.5'>Your trusted partner</h1>

                            <h1 className='font-medium text-4xl '  >for compliance business needs</h1>
                        </div>
                        <p className='h-[1px] w-[50px] '></p>
                        <div>

                            <p className=' text-[#333333]'>An online business compliance platform that helps entrepreneurs and other individuals with various,<span className='font-semibold text-[#4F4F4F]'>registrations</span> ,<span className='text-[#4F4F4F] font-semibold' >tax filings</span> , and other <span className='font-semibold text-[#4F4F4F]' >legal matters</span> .</p>
                        </div>
                    </div>
                    <div className='flex align-center flex-wrap gap-2  justify-between'>
                        <div className='flex gap-2'>
                            <div className='flex align-center '>
                                <div className=' flex justify-center flex-col'>
                                    <div className='w-[18.74px] m-[2px] h-[18.67px] border-2 rounded-t-[5px] rounded-bl-[5px] border-[#4F4F4F]' ></div>
                                    <div className='w-[18.74px] m-[2px] h-[18.67px] border-2 rounded-tl-[5px] rounded-b-[5px] border-[#4F4F4F]' ></div>

                                </div>
                                <div className='flex justify-center flex-col'>
                                    <div className='w-[18.74px] m-[2px] h-[18.67px] border-2 rounded-t-[5px] rounded-br-[5px] border-[#4F4F4F]' ></div>
                                    <div className='w-[18.74px] m-[2px] h-[18.67px] border-2 rounded-tr-[5px] rounded-b-[5px] border-[#4F4F4F]' ></div>

                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='font-bold text-2xl bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent '>4.5+</h2>
                                <p className='text-[#4F4F4F] text-'>Customer Rating</p>
                            </div>

                        </div>
                        <div className='flex gap-2'>
                            <div className='flex justify-center flex-col'><img src={persons} alt="persons" /></div>
                            <div>
                                <h2 className='font-bold text-2xl bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent '>20,000+</h2>
                                <p className='text-[#4F4F4F] text-'>Clients</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex justify-center flex-col'><img src={handShake} alt="persons" /></div>
                            <div>
                                <h2 className='font-bold text-2xl bg-gradient-to-tl from-[#FFA229] to-[#1C4670] bg-clip-text text-transparent '>99.8+</h2>
                                <p className='text-[#4F4F4F] text-'>Financial Stability</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-10  items-center'>
                        <button className='bg-[#1C4670] cursor-pointer text-white px-10 py-3 rounded-[5px] font-semibold' >Talk An Expert</button>
                        <div className='flex gap-2'>
                            <div>

                                <img className='w-[30px]  align-center justify-center ' src={play} alt="play" />
                            </div>
                            <div className=' flex text-[#282828] font-medium' >See how it works</div>
                        </div>
                    </div>
                </div>
                <div className='relative  mt-10'>

                    <img
                        className="md:absolute -z-10 right-0 bottom-0"

                        src={hero}
                        alt="hero"
                    />
                    <img src={teeer}
                        className=" absolute   md:bottom-0 bottom-0 right-0" alt=""
                    />
                </div>
            </div>
        </section >
    )
}

export default Hero