import React from 'react';
import './About.css';

const Founder = (props) => {
    return (
        <div>
            
            <section className="common-section about-us">
            <h1 className="mini-title">Our Team</h1>
                <div className="container mb-5">
                        <div className="row">
                            <div className="col-12 col-lg-5 text-center about-us-img">
                                <img src={props.DP} alt="aboutusImg1" />
                            </div>
                            <div className="col-12 col-lg-7 about-us-list">
                                <h2 className="main-heading">{props.firstName + " " + props.lastName}</h2>
                                    <div className="row about-us-info">
                                        <div className="col-10 about-us-data">
                                            <h3>{props.branch}</h3>
                                            <p className="main-hero-para">
                                            {props.description}
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                    </div>
                                <br />
                                <button className="btn-style btn-style-border" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href=`${props.linkedInURL}`;
                                    }}>LinkedIn
                                </button>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
};   

export default Founder;