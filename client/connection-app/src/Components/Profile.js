import React, { useState } from 'react';
import "../../Styling/Main.css";
import ProfileCard from './Profile/ProfileCard';
import ProfileInformation from './Profile/ProfileInformation';

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