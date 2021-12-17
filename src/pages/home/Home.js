import React from 'react';
import LandingPage from '../landing-page/LandingPage';
import AllProjects from '../all-projects/AllProjects';
import ProjectDetails from '../project-detailed-page/ProjectDetails';
import UploadStudents from '../upload-students/UploadStudents';
import UploadTeachers from '../upload-teachers/UploadTeachers';

const Home = () => {
    if(true) {
        return(
            <div>
                {/* <AllProjects /> */}
                {/* <UploadStudents/> */}
                <UploadTeachers/>
            </div>
        );
        
    }

    return <LandingPage />
};

export default Home;