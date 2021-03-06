import React from 'react';
import Founder from './Founder';
import './About.css'

const About = () => {
    const foundersData = [
        {   
            founderNo : 1,
            founderId : "11911404",
            firstName : "Anubhav",
            lastName : "Pabby", 
            branch : "Computer Engineering",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            linkedInUrl : "https://www.linkedin.com/in/anubhav-pabby-657a36161/",
            githubUrl : "https://github.com/AnubhavPabby",
            displayPicture : "anubhav.jfif"
        },
        {   
            founderNo : 2,
            founderId : "11910219",
            firstName : "Anjali",
            lastName : "Asolkar", 
            branch : "Computer Engineering",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            linkedInUrl : "https://www.linkedin.com/in/anjali-asolkar/",
            githubUrl : "https://github.com/amethyst-39",
            displayPicture : "anjali.jfif"
        },
        {   
            founderNo : 3,
            founderId : "11911407",
            firstName : "Avinash",
            lastName : "Vijayvargiya", 
            branch : "Computer Engineering",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            linkedInUrl : "https://www.linkedin.com/in/avinash14022002/",
            githubUrl : "https://github.com/avinash14022002",
            displayPicture : "avinash.jfif"
        },
        {   
            founderNo : 4,
            founderId : "11911391",
            firstName : "Dhanshree",
            lastName : "Pajankar", 
            branch : "Computer Engineering",
            description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            linkedInUrl : "https://www.linkedin.com/in/dhanshree-pajankar-74105b1a0/",
            githubUrl : "https://github.com/dhanshreep18",
            displayPicture : "dhanshree.jfif"
        }
    ];

    const imagesSrc = require.context('../../assets/about-us', true);

    const listOfFounders = foundersData.map((founder) => {
            const founderImgSrc = imagesSrc(`./${founder.displayPicture}`).default;

            return <Founder 
                key={founder.founderNo}
                founderNo={founder.founderNo}
                founderId={founder.founderId}
                firstName={founder.firstName} 
                lastName={founder.lastName} 
                branch={founder.branch} 
                description={founder.description}
                linkedInUrl={founder.linkedInUrl}
                githubUrl={founder.githubUrl}
                displayPicture={founderImgSrc}
            />
        }
    );

    return (
        <div className="common-section about-us">
            <h1 style={{color:"white", textAlign:"center", margin:"20px", fontWeight:"bold"}} className="mini-title">Our Team</h1>
            <section className="our-team-section">
                <div className="container">
                    <div className="row">
                        {listOfFounders} 
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;