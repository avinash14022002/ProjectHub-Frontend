import React from 'react';
import Founder from './Founder';
import './About.css'

const About = () => {
    
    const foundersData = [
        {   
            id : "11911404",
            firstName : "Anubhav",
            lastName : "Pabby", 
            branch : "Computer Engineering",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            linkedInURL : "https://www.linkedin.com/in/anubhav-pabby-657a36161/",
            displayPicture : "AboutUS.png"
        },
        {   
            id : "11910219",
            firstName : "Anjali",
            lastName : "Asolkar", 
            branch : "Computer Engineering",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            linkedInURL : "https://www.linkedin.com/in/anjali-asolkar/",
            displayPicture : "AboutUS.png"
        },
        {   
            id : "11911407",
            firstName : "Avinash",
            lastName : "Vijayvargiya", 
            branch : "Computer Engineering",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            linkedInURL : "https://www.linkedin.com/in/avinash14022002/",
            displayPicture : "AboutUS.png"
        },
        {   
            id : "11911391",
            firstName : "Dhanshree",
            lastName : "Pajankar", 
            branch : "Computer Engineering",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            linkedInURL : "https://www.linkedin.com/in/dhanshree-pajankar-74105b1a0/",
            displayPicture : "AboutUS.png"
        }
    ];
    
    const imagesSrc = require.context('../../assets/about-us', true);

    const listOfFounders = foundersData.map((founder) => {
            const founderImgSrc = imagesSrc(`./${founder.displayPicture}`).default;

            return <Founder 
                key = {founder.id}
                firstName = {founder.firstName} 
                lastName = {founder.lastName} 
                branch = {founder.branch} 
                description = {founder.description}
                linkedInURL = {founder.linkedInURL}
                displayPicture = {founderImgSrc}
            />
        }
    );

    return (
        <div className="common-section about-us">
            <h1 className="mini-title">Our Team</h1>
            {listOfFounders}              
        </div>
    );
};

export default About;