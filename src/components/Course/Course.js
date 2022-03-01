import React from 'react';
import './Course.css'
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';

const Course = (props) => {
    const {title,img,course,like,price}= props.course;
    return (
        <div className='course-container'>
          <div>
      <Col>
      <Card className='course-card'>
        <Card.Img variant="top" src={img} className="course-img" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
             {course}
          </Card.Text>
           <p> People Likes: <b>{like}</b></p>  
           <p><b>Amount :</b>${price}</p>
           <Button variant="danger" onClick={()=> props.handelAddToCart(props.course)}>Enroll Now</Button>
        </Card.Body>
      </Card>
    </Col>
        </div>
        </div>
    );
};

export default Course;