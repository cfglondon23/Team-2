import React, { useState } from 'react';
import "../../Styling/Header.css";
import logo from '../../img/blank-profile.jpg'; // Tell webpack this JS file uses this image
import {Container, Button, Row, Col, Image, Form, Card} from 'react-bootstrap';
import Navbar from '../Navbar';
export default function ProfileCard(){

    const searchParams = new URLSearchParams(document.location.search)
    const id = searchParams.get("id")
    console.log(id)
    


    const [clubs, setClubs] = useState([
        {
            "name": "Lewisham Junior Coding Club",
            "description": "A coding club in Lewisham",
            "location": "Lewisham",
            "tags": "Coding, Maths, Lewisham",
            "age_range": "Primary",
            "contact_person": "Nandini",
            "lessons":["Lesson 1:  Coding is fun!!!"],
            "id": 0
        },
        {
            "name": "Croydon Coders",
            "description": "Come join to code with us in Croydon",
            "location": "Croydon",
            "tags": "CS, Math, South London, Croydon",
            "age_range": "Secondary",
            "contact_person": "Miranda",
            "id": 1,
            "lessons": ["Lesson 1: Creating Arrays on Python - https://www.w3schools.com/python/python_arrays.asp"]

        },
        {
            "name": "Dagenham Debuggers",
            "description": "Come debug DAG's with us in Dagenham",
            "location": "Dagenham",
            "tags": "CS, Math, East London",
            "age_range": "Primary",
            "contact_person": "Fabian",
            "id": 2,
            "lessons":["Introduction: JavaScript variables"]
        },
        {
            "name": "Hammersmith Hackers",
            "description": "Learn hacking in West London",
            "location": "West London",
            "tags": "CS, Math, West London",
            "age_range": "Secondary",
            "contact_person": "Ishab",
            "id":3,
            "lessons": ["Lesson 1: Setting up your environment", "Lesson 2: Data Types on Haskell"]
        }
    ]);

    console.log(clubs[id])

    

    return(
        <>
        <Navbar/>

        <Row className="row profile">
            <Col className="card col-md-3 full center">
            <div style={{height:"900px"}}>

                <div className="title">
                    <p> <span style={{fontWeight: 'bold'}}>{clubs[id].name}</span></p>
                    
                </div>

                <div>
                    <p>Description: </p><p></p>
                        <p>{clubs[id].description}</p>
                    <p>Contact us: </p><p></p>
                        <p>{clubs[id].contact}</p>
                    <a href={clubs[id].url} >{clubs[id].url}</a>
                  
                </div>

                <Button> Like </Button>
                    
                </div>



      
                
            


            </Col>
          


            <Col className="col-md-9">
                <h1 className="title">Lessons and Resources</h1>

                <Row>
                        {clubs[id].lessons.map((lesson) => {
                        return (
                            <Col>
                         
                                <div class="CardContainer">

                                    <Card>
                                       

                                        <Card.Body>
            

                                            <p>{lesson}</p>
                                        
                                        </Card.Body>
                                     

                                        
                                    </Card>

                                </div>
                            
                       
                            </Col>
                        );
                        })}
                    </Row>
                
            </Col>
        </Row>
    

        </>
    );
}