import React from 'react';
import ProfilePage from '../../components/profile/Profile';
import ProjectsList from '../../components/projects-list/ProjectsList'

const CompletedGuidedProjects = () => { 
    //Changes to be done in profile and project list:
    //1. Hardcoded profile data to be removed
    //2. Data to be fetched for completed projects
    //3. Logic to be handled for both student and guide
    return (
        <div>
            <ProfilePage/>
            <center><h2><b>Completed Projects</b></h2></center>
            <br/>
            <div className="Cards" style={{ color: "black" }}>
                <ProjectsList url="http://localhost:8080/api/studentProject" />
            </div>
        </div>
    );
};

export default CompletedGuidedProjects;