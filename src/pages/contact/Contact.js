import React from 'react';
import ContactUs from "../../assets/contact-us/contactUs.png";
import { Card } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <img className="contactImg" src={ContactUs} height={600} width={650} style={{marginLeft: '100px'}} alt='Contact Details'/>
            <Card className="contactCard" style={{width: '40%', height:'350px', backgroundColor:'#CEECFF', float:'right', marginTop: '160px', marginRight: '100px'}}>
                <Card.Body >
                    <h3><b style={{color:'black', marginBottom:'30px'}}>Contact Us</b></h3>
                    <h5 style={{color:'black', marginBottom:'30px'}}><i className="bi bi-envelope-fill" style={{color:'black'}}></i> Email: enquiry@vit.edu </h5>
                    <h5 style={{color:'black', marginBottom:'30px'}}><i className="bi bi-telephone-fill" style={{color:'black'}}></i> Telephone: +91-20-24283001</h5>
                    <h5 style={{color:'black', marginBottom:'30px'}}><i className="bi bi-geo-alt-fill" style={{color:'black'}}></i> Address: VIT, Upper Indira Nagar Bibwewadi, Pune.</h5>
                </Card.Body>
            </Card>
        </div>
    )
};

export default Contact;