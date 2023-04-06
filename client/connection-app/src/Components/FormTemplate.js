import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import {Form, Button, Container }from 'react-bootstrap'

export default function MainNavbar() {

    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');

    const handleChangeField1 = (e) => {
        setField1(e.target.value);
    }


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(field1, field2);
        const formObject = {
            field1: field1,
            field2: field2
        }
        // axios.post('http://localhost:4000/users/create', formObject)
        // .then((res) => {
        //     console.log(res.data)
        // }).catch((error) => {
        //     console.log(error)
        // });
        console.log(formObject)

        setField1('');
        setField2('');
    }

  return (
    <>
        <Container>

            <Form>
                <Form.Group className="mb-3" controlId="formField1">
                    <Form.Label>Field1</Form.Label>
                    <Form.Control type="text" value={field1} onChange={handleChangeField1} placeholder="Enter Field1" />
                    <Form.Text className="text-muted">
                    Extra muted information
                    </Form.Text>
                </Form.Group>


                <Button variant="primary" onSubmit={handleSubmit}>
                    Submit
                </Button>
            </Form>

        </Container>
       
            
   
    </>  
  );
}