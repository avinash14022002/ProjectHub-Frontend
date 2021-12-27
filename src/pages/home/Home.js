import React from 'react';
import LandingPage from '../landing-page/LandingPage';
import AllProjects from '../all-projects/AllProjects';
import CompletedGuidedProjects from '../completed-guided-projects/CompletedGuidedProjects'

const Home = () => {
    if(false) {
        return(
            <div>
                <AllProjects url="http://localhost:8080/api/studentProject" />
            </div>
        );
    }

    return <LandingPage />
    // return <CompletedGuidedProjects url={`https://localhost:8080/api/studentProfileDetails/1`}/>
};

export default Home;