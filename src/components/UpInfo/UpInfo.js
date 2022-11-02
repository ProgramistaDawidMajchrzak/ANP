import React, { useState } from 'react';
import './UpInfo.css';
import { useTranslation } from 'react-i18next'
import phoneIcon from '../../images/icons/phone.png';
import locationIcon from '../../images/icons/location.png';
import PLLang from '../../images/icons/PL-lang.png';
import UCLang from '../../images/icons/UC-lang.png';
import FBIcon from '../../images/icons/fb-icon.png';
import IGIcon from '../../images/icons/ig-icon.png';


function UpInfo() {
    const { i18n } = useTranslation();

    const changeLanguageForRus = (lang) => {
        i18n.changeLanguage("ru")
    };
    const changeLanguageForPL = (lang) => {
        i18n.changeLanguage("pl")
    };

    const [polish, setPolish] = useState(true);
    return (
        <div className='up-info_container'>
            <div className='up-info-content'>
                <div className="phone-line">
                    <img src={phoneIcon} alt="phone_icon" />
                    <p>+48 534 310 619</p>
                    <p className='second_phone'>+48 537 277 895</p>
                </div>
                <div className="language-line">
                    <img
                        src={PLLang}
                        onClick={() => {
                            setPolish(true)
                            changeLanguageForPL()
                        }}
                        className={polish ? "active" : ""}
                        alt="polish-lang"
                    />
                    <img
                        src={UCLang}
                        onClick={() => {
                            setPolish(false)
                            changeLanguageForRus()
                        }}
                        className={polish ? "" : "active"}
                        alt="russian-lang"
                    />
                </div>
                <div className="location-line">
                    <img src={locationIcon} alt="location_icon" />
                    <p>ul. Kordeckiego 39, 60-123 Poznań</p>
                </div>
                <div className="social-line">
                    <a href="https://www.facebook.com/profile.php?id=100086761292949" target="_blank" rel="noreferrer">
                        <img src={FBIcon} alt="fb-icon" />
                    </a>
                    <a href="https://instagram.com/autonaprawapoznan?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                        <img src={IGIcon} alt="ig-icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default UpInfo