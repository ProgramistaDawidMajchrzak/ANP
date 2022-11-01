import React from 'react'
import "./App.css";
import UpInfo from './components/UpInfo/UpInfo';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Offer from './components/Offer/Offer';
import Contact from './components/Contact/Contact';

// import React, { Component, Suspense } from "react";
// import { useTranslation, withTranslation, Trans } from "react-i18next";

{/* <Trans i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans> */}


export default function App() {
  return (
    <>
      <UpInfo />
      <Navbar />
      <Slider />
      <Offer />
      <Contact />

      {/* 
        -mapa
        z dojazdem

        -formularz kontaktowy
        imie,
        vin samochodu/,
        telefon /,
        adres mailowy,
        text,
        rodo
        anpserwis.office@gmail.com

        - footer
           - nazwa
           - nip
           - adres
           - poczta mailowa i kontakt
      */}
    </>
  );
};