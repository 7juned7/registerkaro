import React from 'react'
import Socials from './utils/socials'

const Footer = () => {
    const footerLinks = {
        startBusiness: ["Features", "Solutions", "Integrations", "Enterprise"],
        solutions: ["GOVERNMENT REGISTRATION", "Partners", "Community", "Developers"],
        appAndBlog: ["App", "Blog"],
        complianceAndTax: ["Channels", "Scale", "Watch the Demo", "Our Competition", "BIS & CDSCO"],
        aboutUs: ["About Us", "News", "Leadership", "Media Kit"]
    };

    return (
        <div className='bg-[#011B5B] p-10'>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
                {/* Intro Section */}
                <div className="footer-intro col-span-1 sm:col-span-2 lg:col-span-1">
                    <p className='text-gray-400 mb-4'>
                        Design outstanding interfaces with advanced Figma features in a matter of minutes.
                    </p>
                    <Socials />
                </div>

                {/* Start a Business Section */}
                <div className="footer-section">
                    <h5 className="font-semibold text-[#FFA229] mb-4">START A BUSINESS</h5>
                    <ul>
                        {footerLinks.startBusiness.map((item, index) => (
                            <li key={index} className="mb-2">
                                <a href="#" className="text-gray-400 hover:underline">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Solutions Section */}
                <div className="footer-section">
                    <h5 className="font-semibold text-[#FFA229] mb-4">Solutions</h5>
                    <ul>
                        {footerLinks.solutions.map((item, index) => (
                            <li key={index} className="mb-2">
                                <a href="#" className="text-gray-400 hover:underline">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>



                {/* Compliance & Tax Section */}
                <div className="footer-section">
                    <h5 className="font-semibold text-[#FFA229] mb-4">COMPLIANCE & TAX</h5>
                    <ul>
                        {footerLinks.complianceAndTax.map((item, index) => (
                            <li key={index} className="mb-2">
                                <a href="#" className="text-gray-400 hover:underline">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* About Us Section */}
                <div className="footer-section">
                    <h5 className="font-semibold text-[#FFA229] mb-4">About Us</h5>
                    <ul>
                        {footerLinks.aboutUs.map((item, index) => (
                            <li key={index} className="mb-2">
                                <a href="#" className="text-gray-400 hover:underline">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
