import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container m-10">
                <footer>
                   <div className="brand-name">
                  <h3 className='p-2'> 𝐿𝑒𝒶𝓇𝓃𝑜𝓁𝑜𝑔𝓎</h3>
                   </div>
                   <div className="footer-infrom">
                       <div className="footer-contact">
                           <div className="footer-phone">
                           <b>phone:</b> +880199
                           </div>
                          <div className="footer-eamil">
                          <b>Email:</b>ashikdas0199@gmail.com
                          </div>
                          <div className="footer-locaction">
                              <p>Vatara,Ghulshan,Dhaka:12-12</p>
                          </div>
                       </div>
                   </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;