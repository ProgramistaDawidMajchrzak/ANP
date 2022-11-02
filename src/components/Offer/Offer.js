import React from 'react';
import './offer.css';

import offer1 from "./offer_images/offer1.jpg";
import offer2 from "./offer_images/offer2.png";
import offer3 from "./offer_images/offer3.png";
import offer4 from "./offer_images/offer4.png";
import offer5 from "./offer_images/offer5.png";
import offer6 from "./offer_images/offer6.png";
import offer7 from "./offer_images/offer8.png";
import offer8 from "./offer_images/offer7.png";
import offer9 from "./offer_images/offer9.png";
import offer10 from "./offer_images/offer10.png";

import { useTranslation } from 'react-i18next';

function Offer() {
    const { t, i18n } = useTranslation();

    const offers = [
        {
            name: t("offer1"),
            img: offer1,
            id: 1
        },
        {
            name: t("offer2"),
            img: offer2,
            id: 2
        },
        {
            name: t("offer3"),
            img: offer3,
            id: 3
        },
        {
            name: t("offer4"),
            img: offer4,
            id: 4
        },
        {
            name: t("offer5"),
            img: offer5,
            id: 5
        },
        {
            name: t("offer6"),
            img: offer6,
            id: 6
        },
        {
            name: t("offer7"),
            img: offer7,
            id: 7
        },
        {
            name: t("offer8"),
            img: offer8,
            id: 8
        },
        {
            name: t("offer9"),
            img: offer9,
            id: 9
        },
        {
            name: t("offer10"),
            img: offer10,
            id: 10
        },
    ]
    return (
        <div className='offer_container'>
            <h2>{t("offers")}</h2>
            <ul>
                {offers.map(offer => (
                    <li key={offer.id}>
                        <img src={offer.img} alt="offer_img" />
                        <h4>{offer.name}</h4>
                    </li>
                ))}
                {/* <li>
                    <h4 >{t("offer1")}</h4>
                </li> */}
            </ul>
        </div>
    )
}

export default Offer