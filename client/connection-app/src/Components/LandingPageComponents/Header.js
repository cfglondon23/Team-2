import React, { useState } from 'react';
import "../../Styling/Header.css";
import {Container, Button, Row, Col} from 'react-bootstrap';
import Login from '../Login';
export default function Header() {


  return (

    <>
 
        <div className="header center">
        
        <Container>
            <Row className=" row">
                <Col className="col-md-8" >
                <h1 id="title">About Connect2</h1>
                <h2 id="">Start Learning and Engaging Now!</h2>
                <h3 id=""> Connect2 is about making it easier for children through primary school, 
                secondary school, and sixth form to find extra-curriculars and volunteering opportunities near them.
                <br/> Create your own profile where you can enter your interests and collect badges based on not only
                the number of experiences you take part in, but also the variety.</h3>

                <h4 id=""> To get started, sign up or login to begin finding different activities across the country provided by 
                a variety of companies and charities. </h4>
                
                </Col>
                <Col className="center col-md-4">
                    <div className="boxed">
                    <Login/>
                    </div>
                </Col>
            </Row>
        </Container>
          
            
          



        </div>      
        
        

    </>  
  );
}