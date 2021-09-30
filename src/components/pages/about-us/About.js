import React from 'react';
import Founder from './Founder';
import DP from "../../../assets/aboutus.png"
import styles from './About.css';

const About = () => {
    return (
        <div>
            
            {/* <h1 className={styles.miniTitle}>Our Team</h1> */}
            <Founder 
                firstName="Anubhav" 
                lastName="Pabby" 
                branch="Computer Engineering" 
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                linkedInURL ="https://www.linkedin.com/in/anubhav-pabby-657a36161/"
                DP={DP}
            />
            <Founder 
                firstName="Anjali" 
                lastName="Asolkar" 
                branch="Computer Engineering" 
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                linkedInURL ="https://www.linkedin.com/in/anjali-asolkar/"
                DP={DP}
            />
            <Founder 
                firstName="Avinash" 
                lastName="Vijayvargiya"
                branch="Computer Engineering" 
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                linkedInURL ="https://www.linkedin.com/in/avinash14022002/"
                DP={DP}
            />
            <Founder 
                firstName="Dhanshree" 
                lastName="Pajankar" 
                branch="Computer Engineering" 
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                linkedInURL ="https://www.linkedin.com/in/dhanshree-pajankar-74105b1a0/"
                DP={DP}
            />
            
            {/* <section className="common-section about-us">
                <h1 className="mini-title">Our Team</h1>
                <div className="container mb-5">
                        <div className="row">
                            <div className="col-12 col-lg-5 text-center about-us-img">
                                <img src={DP} alt="aboutusImg1" />
                            </div>
                            <div className="col-12 col-lg-7 about-us-list">
                                <h2 className="main-heading">Name Surname</h2>
                                    <div className="row about-us-info">
                                        <div className="col-10 about-us-data">
                                            <h3>Branch</h3>
                                            <p className="main-hero-para">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                    </div>
                                <br />
                                <button className="btn-style btn-style-border">LinkedIn</button>
                            </div>
                        </div>
                    </div>
            </section>
            */}
        </div>
    )
};

export default About;