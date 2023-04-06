
import React, { useState } from 'react';
import "../Styling/Browse.css";
import {Container, Button, Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';
export default function Browse() {

  const [clubs, setClubs] = useState([
    {
        "name": "Lewisham Junior Coding Club",
        "description": "A coding club in Lewisham",
        "location": "Lewisham",
        "tags": "Coding, Maths, Lewisham",
        "age_range": "Primary",
        "contact_person": "Nandini"
    },
    {
        "name": "Croydon Coders",
        "description": "Come join to code with us in Croydon",
        "location": "Croydon",
        "tags": "CS, Math, South London, Croydon",
        "age_range": "Secondary",
        "contact_person": "Miranda"
    },
    {
        "name": "Dagenham Debuggers",
        "description": "Come debug DAG's with us in Dagenham",
        "location": "Dagenham",
        "tags": "CS, Math, East London",
        "age_range": "Primary",
        "contact_person": "Fabian"
    },
    {
        "name": "Hammersmith Hackers",
        "description": "Learn hacking in West London",
        "location": "West London",
        "tags": "CS, Math, West London",
        "age_range": "Primary, Secondary",
        "contact_person": "Ishab"
    }
]);

  const [ageGroup, setAgeGroup] = useState("Primary"); // [primary, secondary, sixthForm]
  const [tags, setTags] = useState(""); // Maths, Reading, Sports, Coding, Science, Arts, Drama, Music, 

  const handleAgeRangeChange = e => 
  {
    setAgeGroup(e.target.value)
    console.log(e.target.value)
  }

  const handleSearch = e =>
  {
    e.preventDefault();
    let searchQuery = {
      ageGroup: ageGroup,
      clubs: clubs
    }
  }

  return (

    <>
      <Navbar/>
 
        <div className="header center">
        
        <Container fluid>
            <Row className="left">
                <Col >
                <h1 id="title">Extra-Curriculars and Other Events</h1>
                <h2 id="">Start Learning and Engaging Now! Use the filters or search bar to see specific events.</h2>
                
                <h3 id=""> Age Range: </h3>
                <Form.Check
                    inline
                    label="Primary School"
                    name="AgeRangeRadios"
                    type={'radio'}
                    value={`Primary`}
                    defaultChecked
                    onClick={handleAgeRangeChange}
                  />
    
                <Form.Check
                    inline
                    label="Secondary School"
                    name="AgeRangeRadios"
                    type={'radio'}
                    value={`Secondary`}
                    onClick={handleAgeRangeChange}
                  />

                <Form.Check
                    inline
                    label="Sixth Form"
                    name="AgeRangeRadios"
                    type={'radio'}
                    value={`SixthForm`}
                    onClick={handleAgeRangeChange}
                  />

                  

                </Col>
            </Row>


        </Container>
          
            
          



        </div>      
        
        

    </>  
  );
}