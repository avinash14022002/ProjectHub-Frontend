import React from 'react';
import LandingPage from '../landing-page/LandingPage';
import AllProjects from '../all-projects/AllProjects';
import ProjectDetails from '../project-detailed-page/ProjectDetails';

const Home = () => {
    if(true) {
        return(
            <div>
                {/* <AllProjects/> */}
                <ProjectDetails/>
            </div>
        );
        
    }
    
    
    return <LandingPage />
};

export default Home;