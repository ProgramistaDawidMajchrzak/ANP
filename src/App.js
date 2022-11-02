import React from 'react'
import "./App.css";
import UpInfo from './components/UpInfo/UpInfo';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Offer from './components/Offer/Offer';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <UpInfo />
      <Navbar />
      <Slider />
      <Offer />
      <Contact />
      <Footer />
    </>
  );
};