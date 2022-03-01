import React from 'react';
import './Contact.css'
import phoneIcon from '../../images/phone.png'
import emailIcon from '../../images/email.png'
import addIcon from '../../images/address.png' 
import { Button, Container, Form } from 'react-bootstrap';


const Contact = () => {
    return (
       <div>
     <div className='contact-info'>
          <div className='container-fluid'>
              <div className="row">
  <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
             {/* phone number  */}
                <div className="contact-info-item d-flex justify-content-start align-items-center">
                    <img src={phoneIcon}  alt="phone" width={'30px'} />
                    <div className="contact-info-content">
                        <div className="contact-info-tittle">
                           <b> Phone</b>
                        </div>
                   <div className="contact-info-text">
                            +88019********
                                 </div>
                             </div>
                         </div>
                         {/* email address */}
                        <div className="contact-info-item d-flex justify-content-start align-items-center">
                             <img src={emailIcon} alt="email" width={'30px'} />
                             <div className="contact-info-content">
                 <div className="contact-info-tittle">
                                   <b>  Email</b>
                                 </div>
                                 <div className="contact-info-text">
                                    learnlogoy@gmail.com
                                 </div>
                             </div>
                         </div>
                         {/* Location  */}
                       <div className="contact-info-item d-flex justify-content-start align-items-center">
                             <img src={addIcon} alt="location" width={'30px'} />
                             <div className="contact-info-content">
                                 <div className="contact-info-tittle">
                                   <b>  Address</b>
                                 </div>
                                 <div className="contact-info-text">
                                     Vatara,Gulshan,Dhaka-12/12
                                 </div>
                             </div>
                         </div>
                  </div>
              </div>
          </div>
     </div>

     {/* contact from */}
        <div className="contact-form">
             <Container>
             <div className="row">
                <div className="col-lg-10 offest-lg-1 ">
                 <div className="contact-form-container py-5">
                  <div className="contact-form-title">
                   <h4> <b>Get In Touch</b> </h4>
                  </div>
                         <Form id='contact-form'>
                    <div className="contact-form-name d-flex justify-content-between align-items-between">
                        <input type="text"  id="form-name" className='contact-form-name' placeholder='Your Name' required="true" />
                        
                        <input type="email"  id="form-email" className='contact-form-email' placeholder='Your Email' required="true" />
                      
                        <input type="number"  id="form-phone" className='contact-form-phone' placeholder='Your Phone Number' required="true" />
                        </div>
                        <div className="contract-form-text mt-4">
                            <textarea className='text-field contact-form-message ' placeholder='Message Here' cols='90' rows='6'>

                            </textarea>
                        </div>

                        <div className='contact-form-button'>
                        <Button variant="primary" type='submit'>Send Message</Button>
                        </div>
                         </Form>

                  
                    </div>
                    </div>
                </div>
             </Container>
        </div>
       </div>
    );
};

export default Contact;