import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import "../../Styling/Main.css";
import Header from './DashboardComponents/Header';
import Reccomendations from './DashboardComponents/Reccomendations';
import ReccomendationsHeader from './DashboardComponents/ReccomendationsHeader';
import Navbar from './Navbar'
import AvailableClubs from './LandingPageComponents/AvailableClubs';

export default function Dashboard() {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Access count value from session storage
        var user = sessionStorage.getItem("user_session");
        if (user != null) {
            setUser(user)
        }
        else{
            navigate("/")
        }

      }, []); 

  return (

    <>
        <Navbar/>
      
        <Header/>
        
        <ReccomendationsHeader/>
        <AvailableClubs/>
      
 



    </>  
  );
}