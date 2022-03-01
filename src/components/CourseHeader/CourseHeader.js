import React from 'react';
import { Container } from 'react-bootstrap';
import homeImg1 from '../../images/education.png'

const CourseHeader = () => {
    return (
        <div>
                <div className='bg-color'>
         <Container className='d-flex'>
          <div className='home-head-text'>
            <h6><b>DISCOVER RESEARCH</b></h6>
            <h1><b>  A better learning future starts here</b></h1>
          </div>
       <div className='home-head-img'>  <img src={homeImg1} alt="" className='img-fluid'/></div>
        </Container>
          </div>
        </div>
    );
};

export default CourseHeader;