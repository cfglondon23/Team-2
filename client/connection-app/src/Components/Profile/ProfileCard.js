import React, { useState } from 'react';
import "../../Styling/Header.css";
import logo from '../../img/blank-profile.jpg'; // Tell webpack this JS file uses this image
import {Container, Button, Row, Col, Image, Form, Card} from 'react-bootstrap';

export default function ProfileCard(){

    const [company, setCompany] = useState({"name": "Company Name", "description": "Description", "contact":"coding@lewisham.com",
            "tags": ["Lewisham", "tech", "computer science"], "url": "https://www.lewishamcoding.com", "lessons":[
                "Lesson 1: Arrays \n Arrays are like lists."]
            });


    return(
        <>
        <Row className="row profile">
            <Col className="card col-md-3 full center">
            <div style={{height:"900px"}}>
                <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
                <div className="title">
                    <p> <span style={{fontWeight: 'bold'}}>{company.name}</span></p>
                    
                </div>

                <div>
                    <p>Description: </p><p></p>
                        <p>{company.description}</p>
                    <p>Contact us: </p><p></p>
                        <p>{company.contact}</p>
                    <a href={company.url} >{company.url}</a>
                    <p></p>
                    <p>Tags:  {"  "}
                    {company.tags.map((tag) => {
                                            return ( <>#{tag} </> 


                                            )})}
                    </p>
                </div>

                <Button> Like </Button>
                    
                </div>



      
                
            


            </Col>
          

            <Col className="col-md-9">
                <h1 className="title">Lessons and Resources</h1>

                <Row>
                        {company.lessons.map((lesson) => {
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