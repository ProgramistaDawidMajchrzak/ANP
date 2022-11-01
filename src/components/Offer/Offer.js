import React from 'react';
import './offer.css';

import offer1 from "./offer_images/offer1.jpg";
import offer2 from "./offer_images/offer2.png";
import offer3 from "./offer_images/offer3.png";
import offer4 from "./offer_images/offer4.png";
import offer5 from "./offer_images/offer5.png";
import offer6 from "./offer_images/offer6.png";
import offer7 from "./offer_images/offer7.png";
import offer8 from "./offer_images/offer8.png";
import offer9 from "./offer_images/offer9.png";
import offer10 from "./offer_images/offer10.png";

const offers = [
    {
        name: "naprawa silników",
        img: offer1,
        id: 1
    },
    {
        name: "naprawa skrzyni biegów",
        img: offer2,
        id: 2
    },
    {
        name: "konserwacja systemu hamulcowego",
        img: offer3,
        id: 3
    },
    {
        name: "diagnostyka zawieszenia",
        img: offer4,
        id: 4
    },
    {
        name: "wymiana oleju i filtrów",
        img: offer5,
        id: 5
    },
    {
        name: "naprawa układu kierowniczego",
        img: offer6,
        id: 6
    },
    {
        name: "wymiana termostatu i lamp",
        img: offer7,
        id: 7
    },
    {
        name: "naprawa układu wydechowego",
        img: offer8,
        id: 8
    },
    {
        name: "wymiana paska rozrządu",
        img: offer9,
        id: 9
    },
    {
        name: "elektryka samochodowa",
        img: offer10,
        id: 10
    },
]

function Offer() {
    return (
        <div className='offer_container'>
            <h2>Usługi</h2>
            {/* <ul>
                <li>naprawa silników</li>
                <li>naprawa skrzyni biegów</li>
                <li>konserwacja systemu hamulcowego</li>
                <li>diagnostyka zawieszenia</li>
                <li>wymiana olejów i filtrów</li>
                <li>naprawa układu kierowniczego</li>
                <li>wymiana/naprawa układu wydechowego</li>
                <li>wymiana termostatu, lamp</li>
                <li>wymiana paska rozrządu</li>
                <li>elektryka samochodowa</li>
            </ul> */}
            <ul>
                {offers.map(offer => (
                    <li key={offer.id}>
                        <img src={offer.img} alt="offer_img" />
                        <h4>{offer.name}</h4>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Offer