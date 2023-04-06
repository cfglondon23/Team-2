import React, { useState } from 'react';
import "../../Styling/Main.css";
import { Container, Card, CardGroup, Spinner, Col, Row } from 'react-bootstrap';

export default function Reccomendations() {

    const [loading, setLoading] = useState(false);
    const [availableClubs, setAvailableClubs] = useState([
        {
            "name": "Lewisham Coding Club",
            "description": "A coding club in Lewisham"
        },
        {
            "name": "Ealing Environmentalists",
            "description": " 'Reduce, Reuse & Recycle!' with us this Thursday."
        },
        {
            "name": "Richmond Readers",
            "description": "Read new genres every week at this club!"
        },
        
    ]);


    return (

    <>

        <div className="AvailableClubs">

            <Container>
                {loading ? (<Spinner/>):(
                    
                    <>
                    <Row>
                        {availableClubs.map((club, index) => {
                        return (
                            <Col md={4} lg={4} sm={4} xs={12} key={index}>
                            <Card>
                                <Card.Header>{club.name} </Card.Header>

                                <Card.Body> {club.description}</Card.Body>
                            </Card>
                            </Col>
                        );
                        })}
                    </Row>
                    </>
                       
                )}
            </Container>

        
            
            
        </div>


    </>  
    );
}