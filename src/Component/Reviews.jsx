import React, { useRef } from 'react';
import quote from "../assest/quote.svg";
import avatar from "../assest/client-review-image.png";
import rightArrow from "../assest/Arrow Right.svg"
import leftArrow from "../assest/Arrow Left.svg"

const Reviews = () => {
    const testimonials = [
        {
            id: 1,
            name: "Alex",
            title: "Founder, XYZ Corp, USA",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
            rating: 4,
            avatar: avatar,
        },
        {
            id: 2,
            name: "Samantha",
            title: "CTO, ABC Inc, USA",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
            rating: 5,
            avatar: avatar,
        },
        {
            id: 3,
            name: "Alex",
            title: "Founder, XYZ Corp, USA",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
            rating: 4,
            avatar: avatar,
        },
        {
            id: 4,
            name: "Alex",
            title: "Founder, XYZ Corp, USA",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
            rating: 4,
            avatar: avatar,
        },
        {
            id: 5,
            name: "Alex",
            title: "Founder, XYZ Corp, USA",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
            rating: 5,
            avatar: avatar,
        },
    ];

    // Create a ref for the testimonials container
    const testimonialContainerRef = useRef(null);

    // Handle the scroll to left
    const handleScrollLeft = () => {
        if (testimonialContainerRef.current) {
            testimonialContainerRef.current.scrollBy({ left: -480, behavior: 'smooth' });
        }
    };

    // Handle the scroll to right
    const handleScrollRight = () => {
        if (testimonialContainerRef.current) {
            testimonialContainerRef.current.scrollBy({ left: 520, behavior: 'smooth' });
        }
    };



    return (
        <div className="testimonial-container relative p-8 pr-0 bg-[#1C4670]">
            <div className="mb-8">
                <h1 className="text-4xl justify-items-start text-white font-semibold">
                    What People Say About Us
                </h1>
            </div>
            {/* Left and Right Buttons */}
            <div className="flex justify-center mb-4 absolute top-10 right-5">
                <button
                    onClick={handleScrollLeft}
                    className=" bg-white p-2 rounded-full hover:bg-[#FFA229] cursor-pointer mx-2"
                >
                    <img src={leftArrow} alt="" />
                </button>
                <button
                    onClick={handleScrollRight}
                    className="bg-white p-2 rounded-full hover:bg-[#FFA229] cursor-pointer mx-2"
                >
                    <img src={rightArrow} alt="" />
                </button>
            </div>


            <div className="slick-slider mx-10rem ">
                <div
                    ref={testimonialContainerRef}
                    className="flex gap-10 overflow-x-hidden  ml-[-11rem]  py-4  px-8
                    "
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`testimonial-card bg-white p-6 rounded-lg shadow-lg flex flex-col gap-5 min-w-[480px] ${index === 0 ? 'ml-0' : ''} `}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div className="testimonial-quote">
                                    <img
                                        src={quote}
                                        alt="Quote"
                                        className="w-6 h-6"
                                    />
                                </div>
                                <div className="testimonial-rating text-yellow-400">
                                    {"★".repeat(testimonial.rating)}
                                    {"☆".repeat(5 - testimonial.rating)}
                                </div>
                            </div>
                            <p className="testimonial-text text-gray-600 mb-4">
                                {testimonial.text}
                            </p>
                            <div className="testimonial-info flex items-center">
                                <img
                                    className="testimonial-avatar w-12 h-12 rounded-full"
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    loading="lazy"
                                />
                                <div className="ml-4">
                                    <h5 className="text-lg font-semibold">{testimonial.name}</h5>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
