import React, { useState } from 'react';
import "../Styling/Main.css";
import Navbar from './Navbar';
import Header from './LandingPageComponents/Header';
import AvailableClubs from './LandingPageComponents/AvailableClubs';
import Adverts from './LandingPageComponents/Adverts';
import Images from './LandingPageComponents/Images';

export default function LandingPage() {

  return (

    <>
        
            
            <Navbar/>
            <Images/>
            <Header/>
            <AvailableClubs/>
            <Adverts/>

  

    </>  
  );
}