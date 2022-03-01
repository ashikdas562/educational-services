import React from 'react';
import notfound  from '../../images/notfound.png'
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
           <Container>
               <div className="notfound mt-5">
                   <img src={notfound} alt=""  />
               </div>
               <div className="mt-5">
                   <p>The page you finding are not avilable Right Now !!!!!</p>
               </div>
           </Container>
        </div>
    );
};

export default NotFound;