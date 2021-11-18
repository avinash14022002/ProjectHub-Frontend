import React from 'react';
import LandingPage from '../landing-page/LandingPage';
import AllProjects from '../all-projects/AllProjects';

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