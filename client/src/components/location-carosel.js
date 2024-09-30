import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/location-carosel.css';

const countries = ['Paris', 'Vienna', 'Rome', 'Berlin']

const LocationsCarosel = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-container">
            <h1> Popular Places </h1>
            <Slider {...settings}>
                {countries.map((country, index) => (
                    <div className="carousel-item" key={index}>
                        <div className="circle">
                            <p>{country}</p>
                        </div>
                  </div>
                ))}
            </Slider>
        </div>
    );
};

export default LocationsCarosel;