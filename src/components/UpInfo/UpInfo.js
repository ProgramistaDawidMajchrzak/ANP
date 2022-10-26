import React, { useState } from 'react';
import './UpInfo.css';
import phoneIcon from '../../images/icons/phone.png';
import locationIcon from '../../images/icons/location.png';
import PLLang from '../../images/icons/PL-lang.png';
import RULang from '../../images/icons/RU-lang.png';
import FBIcon from '../../images/icons/fb-icon.png';
import IGIcon from '../../images/icons/ig-icon.png';

function UpInfo() {
    const [polish, setPolish] = useState(true);
    return (
        <div className='up-info_container'>
            <div className='up-info-content'>


                {/* 

                telefon
                języki
                adres
                social ikony

            */}
                <div className="phone-line">
                    <img src={phoneIcon} alt="phone_icon" />
                    <p>+48 999999999</p>
                </div>
                <div className="language-line">
                    <img
                        src={PLLang}
                        onClick={() => setPolish(true)}
                        className={polish ? "active" : ""}
                        alt="polish-lang"
                    />
                    <img
                        src={RULang}
                        onClick={() => setPolish(false)}
                        className={polish ? "" : "active"}
                        alt="russian-lang"
                    />
                </div>
                <div className="location-line">
                    <img src={locationIcon} alt="location_icon" />
                    <p>ul. Kowalskiego 54, 62-090 Poznań</p>
                </div>
                <div className="social-line">
                    <img src={FBIcon} alt="fb-icon" />
                    <img src={IGIcon} alt="ig-icon" />
                </div>
            </div>
        </div>
    )
}

export default UpInfo