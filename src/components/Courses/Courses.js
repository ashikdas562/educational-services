import React, { useEffect, useState } from 'react';
import './Courses.css'
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import CourseHeader from '../CourseHeader/CourseHeader';
import Cart from '../Cart/Cart';

const Courses = () => {
    const [courses,setCourses] = useState([]);
     const [cart, setCart] = useState([]);
    useEffect(()=>{
   fetch('./course.JSON')
   .then(res => res.json())
   .then(data => setCourses(data));

    },[]);

    const handelAddToCart = (course) => {
      const newCart = [...cart , course];
      setCart(newCart)
    }
    return (
      <div>
          <CourseHeader></CourseHeader>
          <div className='courses'>
            <div className='courses-container'>
            <h1 style={{color: "rgba(73, 73, 107, 0.959)"}}>Our Course</h1>
            <div className="courses-container">
            <Row xs={1} md={3} className="g-4">

     {
        courses.map(course => <Course
        key={course.key}
        course={course}
        handelAddToCart = {handelAddToCart}
        ></Course>)
    }
</Row>
          
            </div>
        </div>
        <div className='cart-container'>
          <Cart cart={cart}></Cart>
        </div>
        </div>
      </div>
    );
};

export default Courses;