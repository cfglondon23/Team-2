import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import {Nav, Navbar, NavDropdown, Container, Button }from 'react-bootstrap'

export default function MainNavbar() {

  return (
    <>

         <Navbar class="color-nav" variant = "dark" bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="">Connect2Groups</Navbar.Brand>
                <Navbar.Toggle class = "navbar-toggler"aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    class="me-auto my-2 my-lg-0"
                > 
                </Nav>

                <Nav>

                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/browse">Browse Opportunities</Nav.Link>
                

   
                </Nav>

                </Navbar.Collapse>
            </Container>
            </Navbar>
            
   
    </>  
  );
}