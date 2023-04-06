import React, { useEffect, useState } from 'react';
import "../../Styling/AvailableClubs.css";
import { Container, Card, CardGroup, Spinner, Col, Row, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';
export default function Template() {

    const [loading, setLoading] = useState(false);
    const [availableClubs, setAvailableClubs] = useState([]);

   
     useEffect(async () => {
      const result = await axios(
        'http://ec2-34-248-188-110.eu-west-1.compute.amazonaws.com:8000/get/',
      );
  
      setAvailableClubs(result.data);
      console.log(result.data)
    },[]);

    return (

    <>

        <div className="AvailableClubs">

            <Container>

                <div class="titleText">Top 3 Recommended Clubs of the Week! </div>
                {loading ? (<Spinner/>):(
                    
                    <>
                    <Row>
                        {availableClubs.map((club, index) => {
                        return (
                            <Col md={4} lg={4} sm={4} xs={12} key={index}>
                                <div class="CardContainer">
                                <Card>
               

                                <Card.Header>{club.name} </Card.Header>

                                        <Card.Body>
            

                                            <ListGroupItem>
                                                {club.description}
                                            </ListGroupItem>

                                            <ListGroupItem>
                                                {club.contact_person}
                                            </ListGroupItem>
                                        




                                        </Card.Body>
                               
                                         <Card.Footer>
                                        {
                                            club.tags.split(',').map((tag, index) => {
                                                return (
                                                    <>#{tag.replace(' ','')} </>)
                                            })
                                        }
                                        </Card.Footer>

                                        
                                    </Card>

                                </div>
                       
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