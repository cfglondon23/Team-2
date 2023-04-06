import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import {Form, Button, Container, Row }from 'react-bootstrap'
import "../Styling/Login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function MainNavbar() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()


    const handleChangeEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(email, password);
        const formObject = {
            email: email,
            password: password
        }
        axios.post('ec2-34-248-188-110.eu-west-1.compute.amazonaws.com:8000/login', formObject)
        .then((res) => {
            console.log(res.data)
            navigate("/dashboard")
            
                
        }).catch((error) => {
            console.log(error)
        });
        console.log(formObject)

        // Access value associated with the key
        let userSession = {
            userEmail: email
        }
        window.sessionStorage.setItem("user_session", userSession);
        
        setEmail('');
        setPassword('');


    }

  return (
    <>
        <div class="loginContainer">
            <Row>
            <h3>Login: </h3>
            <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleChangeEmail} placeholder="Enter Email" />
               
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="email" value={password} onChange={handleChangePassword} placeholder="Enter Password" />
               
                </Form.Group>


                <Button className="btn-decor" variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            </Row>

        </div>
       
            
   
    </>  
  );
}