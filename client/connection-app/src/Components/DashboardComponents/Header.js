import React, { useState } from 'react';
import "../../Styling/DashboardHeader.css";
import {Button, Row, Col} from 'react-bootstrap';

export default function Header() {


  return (

    <>
 
        <div className="header center">
          
            <Row className="center">
                <Col>
                <h1 id="title">Welcome Home</h1>
                <h3 id=""> Search for a new opportunity and adventure anywhere across the UK.</h3>
                
                </Col>
            </Row>
          



        </div>      
        
        

    </>  
  );
}