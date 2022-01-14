import React from 'react';
import './About.css';

const Founder = ({founderNo, firstName, lastName, linkedInUrl, githubUrl, displayPicture}) => {
    const onLinkedInClick = (e) => {
        e.preventDefault();
        
        if(linkedInUrl !== '') {
            window.open(linkedInUrl);
        } else {
            window.alert(`Link to LinkedIn profile doesn't exist for the founder ${firstName + " " + lastName}`);
        }
    }

    const onGithubClick = (e) => {
        e.preventDefault();
        
        if(githubUrl !== '') {
            window.open(githubUrl);
        } else {
            window.alert(`Link to Github profile doesn't exist for the founder ${firstName + " " + lastName}`);
        }
    }

    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="our-team">
                <div className="pic">
                    <img src={displayPicture} />
                </div>
                <div className="team-content">
                    <h3 className="title">{'Founder ' + founderNo}</h3>
                    <span className="post">{`${firstName} ${lastName}`}</span>
                </div>
                <ul className="social">
                    <li>
                        <i style={{color:"white", marginRight:"15px"}} className="bi bi-linkedin fa-2x" onClick={onLinkedInClick} />
                    </li>
                    <li>
                        <i style={{color:"white"}} className="bi bi-github fa-2x" onClick={onGithubClick}/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Founder;