import React from 'react'
import email from "../assest/Email.svg"
import phone from "../assest/phone-icon.svg"

import Socials from './utils/socials'

const HeaderNav = () => {
    return (
        <div className='bg-[#1C4670] w-full text-white'>
            <div className='w-full max-w-[1440px] '>
                <ul className='flex justify-end gap-6 '>
                    <li className='flex justify-center items-center gap-1 '>
                        <div><img src={email} alt="" /></div>
                        <div className=' hidden md:block mb-1.5'> www.registerkaro.in</div>


                    </li>
                    <div className='w-[.5px]  bg-gradient-to-t from-[#1c4670]  via-slate-50 to-[#1c4670]'  ></div>
                    <li className='flex items-center justify-center p-1 gap-1'>
                        <div><img src={phone} alt="" /></div>
                        <div className='mb-1 hidden md:block' >+918447746183</div>
                    </li>
                    <div className='w-[.5px] bg-red-500 bg-gradient-to-t from-[#1c4670]  via-slate-50 to-[#1c4670]'  ></div>

                    <li className='flex mr-15'>
                        <Socials />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderNav