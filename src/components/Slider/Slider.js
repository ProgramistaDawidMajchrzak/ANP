import React, { useState, useEffect } from 'react';
import './Slider.css';
import slider1 from '../../images/slider-1.jpg';
import slider2 from '../../images/slider-2.jpg';
import slider3 from '../../images/slider-3.jpg';

const sliderObjects = [
    {
        imageSource: slider1,
        text: "Zadzwoń i umów się na wizytę do końca listopada ",
        subtext: "otrzymaj zniżkę"
    },
    {
        imageSource: slider2,
        text: "Kup części zamienne ",
        subtext: "a na usługę dostaniesz rabat"
    },
    {
        imageSource: slider3,
        text: "Naprawa silnika, skrzyni biegów, rozrząd?",
        subtext: "Zajmiemy się tym!"
    }
]



function Slider() {
    const [activeSlide, setActiveSlide] = useState(0);
    // const changeSlide = () => {
    //     setInterval(() => {
    //         const islastSlide = activeSlide === sliderObjects.length - 1;
    //         const newIndex = islastSlide ? 0 : activeSlide + 1;
    //         setActiveSlide(newIndex);
    //     }, 15000);
    // }
    // changeSlide();

    // useEffect(() => {
    //     setInterval(() => {
    //         const islastSlide = activeSlide === sliderObjects.length - 1;
    //         const newIndex = islastSlide ? 0 : activeSlide + 1;
    //         setActiveSlide(newIndex);
    //     }, 15000);
    // }, [activeSlide])

    return (
        <div className="slider-container">
            <img src={sliderObjects[activeSlide].imageSource} alt="slider_image" />
            <div className="text-content">
                <h2>{sliderObjects[activeSlide].text}</h2>
                <h2>{sliderObjects[activeSlide].subtext}</h2>
            </div>
        </div>
    )
}

export default Slider