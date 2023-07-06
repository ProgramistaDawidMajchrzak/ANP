import React from 'react';
import './Footer.css';

import FbIcon from '../../images/icons/fb-icon.png';
import IgIcon from '../../images/icons/ig-icon.png';

import { useTranslation } from 'react-i18next';


function Footer() {
    const { t } = useTranslation();
    return (
        <div className="footer_container">
            <div className="left-info">
                <a href="tel:+48 534 310 619">+48 534 310 619</a>
                <a href="tel:+48 888 759 846">+48 888 759 846</a>
                <p>anpserwis.office@gmail.com</p>
            </div>
            <div className="right-info">
                <p>ANP Serwis Sp. z o.o.</p>
                <p>ul. Kordeckiego 39, 60-123 Poznań</p>
                <p>NIP: 7792545953</p>
                <a href="https://www.facebook.com/profile.php?id=100086761292949" target="_blank" rel="noreferrer">
                    <img src={FbIcon} alt="fb-icon" />
                </a>
                <a href="https://instagram.com/autonaprawapoznan?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                    <img src={IgIcon} alt="ig-icon" />
                </a>
            </div>
            <h2>{t("footer1")} <br /> {t("footer2")}</h2>
        </div>
    )
}

export default Footer;