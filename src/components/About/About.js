import React from 'react';
import './About.css'
import student1 from '../../images/jesica.png'
import student2 from '../../images/rebica.png'
import student3 from '../../images/alex.png'
import CourseHeader from '../CourseHeader/CourseHeader';
import educationboy2 from '../../images/educationboy2.png'
import { Card, CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <CourseHeader></CourseHeader>
                  <h3 className='brand-name bg-dark p-2'>𝓐𝓫𝓸𝓾𝓽 𝓛𝓮𝓪𝓻𝓷𝓸𝓵𝓸𝓰𝔂</h3>
                 <Container className='d-flex'>
                     <div>
                         <h4> <small>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum quo delectus est quos? Modi at pariatur maiores nemo ea! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iste.
                         </small>
                         </h4>
                     </div>
                     <div>
                         <img src={educationboy2} alt="" width={"450px"} height={'250px'} />
                     </div>
                 </Container>
                    <div className='student-review'>
                        <h3 >𝓗𝓪𝓹𝓹𝔂 𝓢𝓽𝓾𝓭𝓮𝓷𝓽𝓼</h3>
 <CardGroup>
  <Card>
    <Card.Img variant="top" src={student1} />
    <Card.Body>
      <Card.Title> <b>Jesica</b> </Card.Title>
      <Card.Text>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente quasi aliquid excepturi velit corrupti dolorem modi ab unde reiciendis.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={student2} />
    <Card.Body>
      <Card.Title> <b>Rebica</b> </Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto odio quae ut fuga voluptatem mollitia quas facere fugiat minima voluptatibus!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={student3} />
    <Card.Body>
      <Card.Title> <b>Alex</b> </Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nobis aspernatur voluptate voluptatem optio ducimus inventore ut impedit exercitationem nulla?
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
                    </div>
        </div>
    );
};

export default About;