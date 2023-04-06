import React, { useState } from 'react';
import "../../Styling/Adverts.css";
import {Button, Row, Col, Card, CardGroup} from 'react-bootstrap';

export default function Adverts() {


  return (

    <>
        <CardGroup>
          <Card>
          <img src="https://www.thespruce.com/thmb/iM2xEDDbOczS87RkQicxDHCp1Yg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/wash-new-clothes-before-wearing-2146345-03-999483b3d51a435ba53c8d9ef5c2d5c4.jpg" class="rounded float-left"/>
          </Card>
          <Card>
          <img src="" class="rounded float-left"/>
          </Card>
          <Card>
          <img src="https://www.ikea.com/gb/en/images/products/djungelskog-soft-toy-brown-bear__1158437_pe888123_s5.jpg?f=xl" class="rounded float-left"/>
          </Card>
          <Card>
          <img src="" class="rounded float-left"/>
          </Card>
          <Card>
          <img src="https://c.ndtvimg.com/2019-05/j82aj5m_vegan-baking_650x400_20_May_19.jpg" class="rounded float-left"/>
          </Card>
        </CardGroup>
            


    </>  
  );
}