import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* column1 */}
            <div className="col">
              <h4>LOCATION</h4>
              <ul className="list-unstyled">
                <li>Vishwakarma Institute of Technology</li>
                <li>666, Upper Indira Nagar</li>
                <li>Bibwewadi, Pune, Maharashtra</li>
              </ul>
            </div>
            {/* column2 */}
            <div className="col">
              <h4>CONTACT US</h4>
                <ul className="list-unstyled">
                  <li>+91-20-24283001</li>
                  <li>Office Timing :- Monday to Friday 10.00 am to 05.00 pm</li>
                  <li>91-20-24202180/190</li>
                </ul>
            </div>
            {/* column3 */}
            <div className="col">
              <h4>SOCIAL MEDIA</h4>
                <ul className="list-unstyled">
                  <li><i class="bi bi-linkedin"></i> LinkedIn</li>
                  <li><i class="bi bi-instagram"></i> Instagram</li>
                  <li><i class="bi bi-facebook"></i> Facebook</li>
                </ul>
            </div>
          </div>
          <hr/>
          <div className="row">
            <p className="col-sm" align="center">
              &copy;{new Date().getFullYear()} VIT PUNE | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    );
  }
  
export default Footer;