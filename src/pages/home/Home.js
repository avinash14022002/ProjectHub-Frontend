import React from 'react';
import LandingPage from '../landing-page/LandingPage';
import AllProjects from '../all-projects/AllProjects';
import ProjectDetails from '../project-detailed-page/ProjectDetails';
import UploadStudents from '../upload-students/UploadStudents';
import UploadTeachers from '../upload-teachers/UploadTeachers';
import ExistingTeachers from '../existing-teachers/ExistingTeachers';
import ExistingStudents from '../existing-students/ExistingStudents';

const Home = () => {
    if(true) {
        return(
            <div>
                {/* <AllProjects /> */}
                {/* <UploadStudents/> */}
                {/* <UploadTeachers/> */}
                {/* <ExistingTeachers/> */}
                {/* <ExistingStudents/> */}
            </div>
        );
        
    }

    return <LandingPage />
};

export default Home;