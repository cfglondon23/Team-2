
import React, { useState } from 'react';
import "../Styling/Browse.css";
import {Container, Button, Row, Col, Spinner, ListGroupItem, Card} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';
import {Link, useNavigate} from 'react-router-dom'
import Adverts from './LandingPageComponents/AvailableClubs';
export default function Browse() {

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const [clubs, setClubs] = useState([
    {
        "name": "Lewisham Junior Coding Club",
        "description": "A coding club in Lewisham",
        "location": "Lewisham",
        "tags": "Coding, Maths, Lewisham",
        "age_range": "Primary",
        "contact_person": "Nandini",
        "id":0
    },
    {
        "name": "Croydon Coders",
        "description": "Come join to code with us in Croydon",
        "location": "Croydon",
        "tags": "CS, Math, South London, Croydon",
        "age_range": "Secondary",
        "contact_person": "Miranda",
        "id":1
    },
    {
        "name": "Dagenham Debuggers",
        "description": "Come debug DAG's with us in Dagenham",
        "location": "Dagenham",
        "tags": "CS, Math, East London",
        "age_range": "Primary",
        "contact_person": "Fabian",
        "id":2
    },
    {
        "name": "Hammersmith Hackers",
        "description": "Learn hacking in West London",
        "location": "West London",
        "tags": "CS, Math, West London",
        "age_range": "Secondary",
        "contact_person": "Ishab",
        "id":3

    }
]);

  const [validClubs, setValidClubs] = useState([]);

  const [ageGroup, setAgeGroup] = useState("Primary"); // [primary, secondary, sixthForm]
  const [tags, setTags] = useState(""); // Maths, Reading, Sports, Coding, Science, Arts, Drama, Music, 

  const handleAgeRangeChange = e => 
  {
    setAgeGroup(e.target.value)
    console.log(e.target.value)

  }

  function handleClick(clubID)
  {
    console.log(clubID)
    navigate("/club?id="+clubID)
  }

  const handleSearch = e =>
  {
    e.preventDefault();
    console.log(ageGroup)
    let valid = clubs.filter(club => club.age_range === ageGroup)
    console.log(valid)
    setValidClubs(valid)
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
               

                  

                </Col>
            </Row>

            <Row>

            </Row>


        </Container>
          
            
          



        </div>      
        <div>
        <Container>

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

<h3 id=""> Topic: </h3>
                <Form.Check
                    inline
                    label="Coding"
                    name="TopicRadios"
                    type={'checkbox'}
                    value={`Coding`}
                    defaultChecked
                  />
    
                <Form.Check
                    inline
                    label="Environmental"
                    name="TopicRadios"
                    type={'checkbox'}
                    value={`Environmental`}
                  />

                <Form.Check
                    inline
                    label="Drama"
                    name="TopicRadios"
                    type={'checkbox'}
                    value={`Drama`}
                  />
                <Form.Check
                    inline
                    label="Reading"
                    name="TopicRadios"
                    type={'checkbox'}
                    value={`Reading`}
                  />
                <Form.Check
                    inline
                    label="Football"
                    name="TopicRadios"
                    type={'checkbox'}
                    value={`Football`}
                  />
                <Form.Check
                    inline
                    label="Arts"
                    name="TopicRadios"
                    type={'checkbox'}
                    value={`Arts`}
                  />
                  <Form.Check
                    inline
                    label="Music"
                    name="TopicRadios"
                    type={'checkbox'}
                    value={`Music`}
                  />
                  <Form.Check
                    inline
                    label="Dance"
                    name="TopicRadios"
                    type={'checkbox'}
                    value={`Dance`}
                  />
                  <Form.Check
                    inline
                    label="Sports"
                    name="TopicRadios"
                    type={'checkbox'}
                    value={`Sports`}
                  />

<h3 id=""> Location: </h3>
<div class="form-group">
  <label for="usr">Postcode:</label>
  <input type="text" class="form-control" id="area" width = "20px"/ >
</div>

        <Button variant="primary" onClick = {handleSearch}>Search</Button>


        <div class="titleText">Clubs Recommended based on your preferences: </div>
        {loading ? (<Spinner/>):(
            
          
            
            <Row>
              {validClubs.map((club, index) => {
                return (

                  <>
                    <Col md={4} lg={4} sm={4} xs={12} key={index}>
                        <div class="CardContainer">
                  
                        

  
                        <Card onClick = {() => handleClick(club.id)}>

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
                                    club.tags.split(',').map((tag) => {
                                        return (
                                            <>#{tag.replace(' ','')} </>)
                                    })
                                }
                                </Card.Footer>

                                
                            </Card>
                     

                        </div>
              
                    </Col>

                    </>
                );
              })}
            </Row>
            
              
        )}
    </Container>
    </div>
        

    </>  
  );
}