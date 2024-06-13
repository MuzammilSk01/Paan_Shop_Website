// import React from 'react'
import './About.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { assets, review } from "../../assets/assets"

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <div className="w-3/2 m-auto">
            <div className="mt-20">
                <Slider {...settings}>
                    {
                        review.map((R) => {
                            return (
                                <div className="bg-green h-[450px] w-200 text-black rounded-xl border-solid border-2 border-dark-500" key={R}>
                                    <div className="h-56 rounded-t-xl bg-green-700 flex justify-center items-center">
                                        <img src={R.Image} alt="" />
                                    </div>

                                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                                        <p className="text-xl font-semibold">{R.Name}</p>
                                        <img className='w-25' src={assets.Rating} alt="" />
                                        <p className="text-center">{R.Reviews}</p>
                                        
                                    </div>
                                </div>
                            )

                        })
                    }
                </Slider>
            </div>

        </div>
    )
}

export default About
