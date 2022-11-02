import React, { useState, useEffect } from 'react';
import './Slider.css';
import slider1 from '../../images/slider-1.jpg';
import slider2 from '../../images/slider-2.jpg';
import slider3 from '../../images/slider-3.jpg';
import { useTranslation } from 'react-i18next';





function Slider() {

    const { t, i18n } = useTranslation();

    const sliderObjects = [
        {
            imageSource: slider1,
            text: t("sliderText1"),
            subtext: t("sliderSubText1"),
        },
        {
            imageSource: slider2,
            text: t("sliderText2"),
            subtext: t("sliderSubText2"),
        },
        {
            imageSource: slider3,
            text: t("sliderText3"),
            subtext: t("sliderSubText3"),
        }
    ]


    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const ChangeSlide = () => {
            setTimeout(() => {
                const islastSlide = activeSlide === sliderObjects.length - 1;
                const newIndex = islastSlide ? 0 : activeSlide + 1;
                setActiveSlide(newIndex);
            }, 15000);
        }
        ChangeSlide();
    }, [activeSlide])

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