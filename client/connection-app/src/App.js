
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Test from "./Components/Test";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Browse from "./Components/Browse";
import ProfileCard from './Components/Profile/ProfileCard';

export default function App() {
  return (
    <>
  
      <Router>

          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="/test" element={<Test/>} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route exact path="/browse" element={<Browse/>} />
            <Route exact path="/club" element={<ProfileCard/>}/>
            
          </Routes>
       
      </Router>
    </>
  
  );
}