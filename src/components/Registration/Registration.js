import React from 'react';
import './Registration.css'
import { Button, Container, Form, FormGroup, FormLabel } from 'react-bootstrap';

const Registration = () => {
    return (
        <div>
              <section className='singup'>
                 <Container className='mt-5'>
                    <div className="singup-content">
                        <div className="singup-form">
                            <h2 className='form-title'>    Sing up</h2>
                            <Form>
                                <FormGroup >
                                    <div className='singup-form'>
                                        <input type="text" placeholder='Full Name' className='singup-form-input' />
                                    </div>
                                    <div className="singup-form">
                                        <input type="email" placeholder='Email'  className='singup-form-input'/>
                                        <div className="singup-form">
                                            <input type="password" placeholder='New passeord' className='singup-form-input' />
                                        </div>
                                        <div className="singup-form">
                                            <input type="password" placeholder='Comfirm password' className='singup-form-input' />
                                        </div>
                                        <div>
                                        <Button variant="success" className='singup-btn'> SingUp</Button>
                                        </div>
                                    </div>
                                    
                                </FormGroup>
                            </Form>
                        </div>

                    </div>
                 </Container>
            </section>
        </div>
    );
};

export default Registration;
