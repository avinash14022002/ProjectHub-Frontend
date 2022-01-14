import React from 'react';
import Founders from './Founders';
import './About.css'

const About = () => {
    
    return (
        <div className="common-section about-us">
            <h1 style={{color:"white", textAlign:"center", margin:"20px", fontWeight:"bold"}} className="mini-title">Our Team</h1>
                <section className="our-team-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src="https://i.ibb.co/8x9xK4H/team.jpg"/>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Team 1</h3>
                                        <span className="post">Inhaber & Geschäftsführer</span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            {/* <a href="#" class="fa fa-linkedin"></a> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src="https://i.ibb.co/8x9xK4H/team.jpg"/>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Team 2</h3>
                                        <span className="post">Stellvertretender  Geschäftsführer</span>
                                    </div>
                                    <ul class="social">
                                        <li>
                                            {/* <a href="#" class="fa fa-linkedin"></a> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src="https://i.ibb.co/8x9xK4H/team.jpg"/>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Team 3</h3>
                                        <span className="post">Dipl. Physiotherapeut </span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            <i style={{color:"white", marginRight:"15px"}} className="bi bi-linkedin fa-2x"/>
                                        </li>
                                        <li>
                                            <i style={{color:"white"}} className="bi bi-github fa-2x"/>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-team">
                                    <div className="pic">
                                        <img src="https://i.ibb.co/8x9xK4H/team.jpg"/>
                                    </div>
                                    <div className="team-content">
                                        <h3 className="title">Team 4</h3>
                                        <span className="post">Dipl. Physiotherapeut </span>
                                    </div>
                                    <ul className="social">
                                        <li>
                                            {/* <a href="#" class="fa fa-linkedin"></a> */}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
           
        </div>
    );
};

export default About;