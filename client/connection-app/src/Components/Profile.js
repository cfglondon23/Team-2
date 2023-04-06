import React, { useState } from 'react';
import "../../Styling/Main.css";
import ProfileCard from './Profile/ProfileCard';
import ProfileInformation from './Profile/ProfileInformation';
import Navbar from './Navbar';
export default function Profile() {

  return (

    <>
    
        
        <div className="profile">
            
            <ProfileCard/>
            <ProfileInformation/>
          
          
        </div>


    </>  
  );
}