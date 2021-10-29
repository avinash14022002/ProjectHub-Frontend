import React from 'react';
import LandingPage from '../landing-page/LandingPage';
import AllProjects from '../all-projects/AllProjects';
import ProjectDetails from '../project-detailed-page/ProjectDetails';

const Home = () => {
    if(false) {
        return(
            <div>
                <AllProjects />
            </div>
        );
        
    }

    return <LandingPage />
};

export default Home;