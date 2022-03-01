import React from 'react';
import './Login.css'
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import Registration from '../Registration/Registration';

const Login = () => {
    return (
        <div>
             <div>
              <h3 className='bg-danger p-2 '>WELLCOME TO LEARNOLOGY</h3>
              <Container className='login-container'>
                 <h4>
                     <b>Login</b>
                 </h4>
               <div>
               <input type="text" placeholder='Email or Phone Number' className='input' />
               </div>
              <div>
              <input type="text" placeholder='Password' type="password" className='input' />
              </div>
              <div>
              <Button variant="primary">Login</Button>
              </div>
              <div>
                  <p>Forgotten Password?</p>
              </div>
              </Container>
              <div>
                  <Registration></Registration>
              </div>
        </div>
        </div>
    );
};

export default Login;