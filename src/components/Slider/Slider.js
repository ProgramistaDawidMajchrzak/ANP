import React, { useState } from 'react';
import './Slider.css';
import slider1 from '../../images/slider-1.jpg';
import slider2 from '../../images/slider-2.jpg';
import slider3 from '../../images/slider-3.jpg';

const sliderObjects = [
    {
        imageSource: slider1,
        text: "Części zamienne?",
        subtext: "U nas kupisz najtaniej"
    },
    {
        imageSource: slider2,
        text: "Czas na wymianę opon!",
        subtext: "Postaw na bezpieczeństwo już teraz"
    },
    {
        imageSource: slider3,
        text: "Zadbaj o silnik",
        subtext: "Wymiana oleju już od 100zł"
    },
]



function Slider() {
    // const [number, setNumber] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const changeSlide = () => {
        setInterval(() => {
            const islastSlide = activeSlide === sliderObjects.length - 1;
            const newIndex = islastSlide ? 0 : activeSlide + 1;
            setActiveSlide(newIndex);
        }, 7000);
    }
    changeSlide();
    return (
        <div className="slider-container">
            <img src={sliderObjects[activeSlide].imageSource} alt="slider_image" />
            <div className="text-content">
                <h2>{sliderObjects[activeSlide].text}</h2>
                <h5>{sliderObjects[activeSlide].subtext}</h5>
            </div>
        </div>
    )
}

export default Slider