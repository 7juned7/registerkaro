import React from 'react'
import oracle from "../assest/Trusted By/oracle.svg"
import Morpheus from "../assest/Trusted By/Morpheus.svg"
import samsung from "../assest/Trusted By/samsung.svg"
import monday from "../assest/Trusted By/monday.svg"

import formation from "../assest/services/formation.svg"
import secretarial from "../assest/services/secretarial.svg"
import address from "../assest/services/address.svg"
import compilence from "../assest/services/compilence.svg"
import payroll from "../assest/services/payroll.svg"
import bookkeeping from "../assest/services/book-keeping.svg"
import rightArrow from "../assest/arroe.svg"
const Services = () => {
    const services = [
        {
            id: 1,
            title: "Company Formation",
            description: "Build web-based solutions that enhance customer experience.",
            imgSrc: formation,
            buttonText: "Learn More"
        },
        {
            id: 2,
            title: "Company Secretarial Services",
            description: "Make data-driven decisions and utilize technology to reach business goals.",
            imgSrc: secretarial,
            buttonText: "Learn More"
        },
        {
            id: 3,
            title: "Virtual Office Address",
            description: "Foster customer relationships by effectively serving your market.",
            imgSrc: address,
            buttonText: "Learn More"
        },
        {
            id: 4,
            title: "Annual Compliance Services",
            description: "Turn your ideas into modern products with our design experts.",
            imgSrc: compilence,
            buttonText: "Learn More"
        },
        {
            id: 5,
            title: "Payroll Services",
            description: "Expand your business across the globe with minimal effort.",
            imgSrc: payroll,
            buttonText: "Learn More"
        },
        {
            id: 6,
            title: "Bookkeeping Services",
            description: "Steering user behaviours with creative design, data insights & technology.",
            imgSrc: bookkeeping,
            buttonText: "Learn More"
        }
    ];
    return (
        <div className='flex items-center flex-col text-center bg-[#FAFAFA] mb-10'>
            <div className='flex flex-col items-center m-auto my-20 gap-6'>
                <p className='font-bold text-lg'>Trusted By Over 100+ Startups and freelancs buisness</p>
                <div className='flex gap-5 justify-center flex-wrap'>
                    <img src={oracle} alt="company" />
                    <img src={Morpheus} alt="company" />

                    <img src={Morpheus} alt="company" />

                    <img src={samsung} alt="company" />
                    <img src={monday} alt="company" />


                </div>
            </div>
            <div>
                <div>
                    <p className='text-[#EB8D15] font-medium' >WELCOME TO REGISTERKARO.IN</p>
                    <h3 className='font-bold' >EXPLORE OUR SERVICES</h3>
                </div>
                <div className='flex flex-wrap justify-center mt-10'>
                    {services.map((service, index) => (
                        <div key={service.id} className={`flex relative flex-col justify-between items-center  mb-15  h-62 gap-5
                        ${index === 1 || index === 4 ?
                                " border-x-1 border-gray-300  before:content-[''] before:absolute before:left-[-2px] before:h-[20px] before:w-1 before:top-10 before:bg-[#BB162B] after:content-[''] after:absolute after:right-[-2.5px] after:bottom-10 after:h-[20px] after:w-1 after:bg-[#BB162B]  "
                                : ""} `}>
                            <img
                                src={service.imgSrc}
                                alt={service.title}
                                className="w-[60px]"
                            />
                            <h2 className="font-bold mb-[-15px]">{service.title}</h2>
                            <p className=" text-[#282728] w-66">{service.description}</p>
                            <button className="font-bold flex gap-2    items-center">
                                <div className='text-base flex' >{service.buttonText}</div>
                                <img className=' w-4 border-[1.4px] rounded-full ' src={rightArrow} alt="arrow" />
                            </button>
                        </div>
                    ))}

                </div>
                <button className='bg-[#1C4670] rounded-[4px] text-white py-3 px-6 align-center justify-center' > See All Services</button>
            </div>
        </div>
    )
}

export default Services;