import React from 'react';
import './Home.css'
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import home2 from '../../images/home2.png'
import home3 from '../../images/home3.png'
import home4 from '../../images/home4.png'
import education1 from '../../images/educationboy2.png'
import education from '../../images/educationboy.png'
import CourseHeader from '../CourseHeader/CourseHeader';
const Home = () => {
    return (
        <div> 
        <CourseHeader></CourseHeader>
            
             <div className='home-color'>
  <CardGroup>
  <Card className='student-card'>
    <Card.Img variant="top" src={home2} />
    <Card.Body>
      <Card.Text>
      Initial Vocational Education and Training prepares young men and women with the relevant knowledge, skills and attitudes to successfully enter the world of work or continue higher education.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className='student-card'>
    <Card.Img variant="top" src= {home3} />
    <Card.Body>
      <Card.Text>
      Initial Vocational Education and Training prepares young men and women with the relevant knowledge, skills and attitudes to successfully enter the world of work or continue higher education.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className='student-card'>
    <Card.Img variant="top" src= {home4} />
    <Card.Body>
      <Card.Text>
      Initial Vocational Education and Training prepares young men and women with the relevant knowledge, skills and attitudes to successfully enter the world of work or continue higher education.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
             </div>
             <div className='d-flex bg-color education-border'>
               <Container>
                 <h3 style={{marginTop: "50px"}} className="home-head-text" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, repellat! Lorem ipsum dolor sit amet.</h3>
               </Container>
               <Container className='education-img'>
                 <img src={education} alt="" width={'450px'}  />
               </Container>
           
             </div>
           
        </div>
    );
};

export default Home;