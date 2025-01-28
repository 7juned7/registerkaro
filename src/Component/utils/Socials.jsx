import React from 'react'
import instagram from "../../assest/Insta-icon.svg"
import facebook from "../../assest/facebook-icon.svg"
import twitter from "../../assest/twiiter.svg"
import pinterest from "../../assest/pinterest.svg"
const Socials = () => {
    return (
        <div className='flex'>
            <ul className='flex items-center justify-center gap-5'>
                <li><img src={instagram} alt="" /></li>
                <li><img src={facebook} alt="" /></li>
                <li><img src={twitter} alt="" /></li>
                <li><img src={pinterest} alt="" /></li>
            </ul>
        </div>
    )
}

export default Socials;