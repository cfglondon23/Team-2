import React, { useState } from 'react';
import "../../Styling/DashboardHeader.css";
import {Button, Row, Col} from 'react-bootstrap';

export default function ReccomendationsHeader() {


  return (

    <>
 
        <div className="header reccomendations">
          
            <Row className="Left">
                <Col>
                <h4>Your Recomendations</h4> 
                <h5>Based on your profile interests and previous extra-curriculars.</h5> 
                
                </Col>
            </Row>
          



        </div>      
        
        

    </>  
  );
}