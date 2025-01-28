import React from 'react'
import image1 from "../assest/buisness/buisness-1.png"
import image2 from "../assest/buisness/buisness-2.png"
import image3 from "../assest/buisness/buisness-3.png"
import image4 from "../assest/buisness/buisness-4.png"
import image5 from "../assest/buisness/buisness-5.png"
import image6 from "../assest/buisness/buisness-6.png"
import arrow from "../assest/arroe.svg"

const Buisiness = () => {
    const articles = [
        {
            image: image1,
            category: "Small Business & Startup",
            author: "Prabhash Mishra",
            date: "1 Jan 2023",
            title: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
            tags: [
                { name: "Tax & Audit", color: "blue" },
                { name: "Management", color: "green" },
            ],
        },
        {
            image: image2,
            category: "Scale-Up Company Offer",
            author: "Mahesh Kumar",
            date: "1 Jan 2023",
            title: "Mental models are simple expressions of complex processes or relationships.",
            tags: [
                { name: "Tax", color: "purple" },
                { name: "Research", color: "blue" },
                { name: "Compliance", color: "orange" },
            ],
        },
        {
            image: image3,
            category: "Growing Business Package",
            author: "Rakhi Verma",
            date: "1 Jan 2023",
            title: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
            tags: [
                { name: "Audit", color: "red" },
                { name: "Money Back", color: "green" },
            ],
        },
        {
            image: image4,
            category: "Scale-Up Company Offer",
            author: "Karan Kumar",
            date: "1 Jan 2023",
            title: "Collaboration can make our teams stronger, and our individual designs better.",
            tags: [
                { name: "Money", color: "yellow" },
                { name: "Management", color: "blue" },
            ],
        },
        {
            image: image5,
            category: "Scale-Up Company Offer",
            author: "Richa Singh",
            date: "1 Jan 2023",
            title: "JavaScript frameworks make development easy with extensive features and functionalities.",
            tags: [
                { name: "Tax Return", color: "green" },
                { name: "News", color: "purple" },
                { name: "Audit", color: "red" },
            ],
        },
        {
            image: image6,
            category: "Scale-Up Company Offer",
            author: "Miss Nora",
            date: "1 Jan 2023",
            title: "Starting a community doesn’t need to be complicated, but how do you get started?",
            tags: [
                { name: "Private Limited Company", color: "blue" },
                { name: "Customer Success", color: "orange" },
            ],
        },
    ];
    return (
        <div className='mt-10 flex flex-col gap-5 items-center'>
            <h3 className='text-lg text-[#EB8D15] text-center' >EXPLORE OUR BLOGS</h3>
            <h2 className='texr-[#3C2109] font-bold text-2xl text-center' >Accelerate Digital Transformation</h2>
            <div className='flex flex-wrap p-10 gap-10 justify-center' >
                {articles.map((article, index) => (
                    <div key={index} className="flex flex-col max-w-80 gap-2">
                        <img src={article.image} alt={`Article ${index + 1}`} className=" w-80 object-cover" />
                        <div className="">
                            <p className="text-xs text-gray-400 mt-1">
                                {article.author} • {article.date}
                            </p>
                            <p className="text-base text-black font-bold">{article.category}</p>
                            <h2 className=" text-gray-400 text-sm mt-2">{article.title}</h2>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {article.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className={`inline-block py-1 px-3 text-xs rounded-md  font-semibold mr-2 mt-2 
    ${tag.color === 'blue' ? 'bg-blue-100 text-blue-400' :
                                                tag.color === 'green' ? 'bg-green-100 text-green-400' :
                                                    tag.color === 'red' ? 'bg-red-100 text-red-400' :
                                                        tag.color === 'yellow' ? 'bg-yellow-100 text-yellow-400' :
                                                            tag.color === 'purple' ? 'bg-purple-100 text-purple-400' :
                                                                'bg-gray-100 text-gray-400'}`}
                                    >
                                        {tag.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <button className='w-fit gap-0.5  bg-[#1C4670] rounded-[4px] text-white py-3 px-6 flex items-center ' >
                <div className='mb-1'>

                    Show more blogs
                </div>
                <img className='' src={arrow} alt="" /></button>
        </div>
    )
}

export default Buisiness