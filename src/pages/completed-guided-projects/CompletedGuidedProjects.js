import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfilePage from '../../components/profile/Profile';
import ProjectsList from '../../components/projects-list/ProjectsList'

const CompletedGuidedProjects = ({ url }) => { 
    const [userProfile, setUserProfile] = useState({});
    const [userProjects, setUserProjects] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('login'));
        const requestUrl = `${url}?username=${user.userData.userNo}`;

        axios.get(requestUrl)
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                console.log(data);
                if(user.role === 'student') {
                    setUserProfile({...userProfile, role : user.role, userId: data.username, firstName : data.firstName, lastName : data.lastName, collegeEmail : data.emailId, personalEmail : data.personalEmail, department : data.department});
                } else {
                    setUserProfile({...userProfile, role : user.role, userId: data.employeeId, firstName : data.firstName, lastName : data.lastName, collegeEmail : data.emailId,  department : data.department});
                }

                const completedStudentProjects = filterProjects(data.projects);
                setUserProjects(completedStudentProjects);

                console.log(userProjects)
            }, []);
    });

    const filterProjects = (projects) => {
        const filteredProjects = projects.filter(project => project !== null)
        return filteredProjects;
    };

    //Changes to be done in profile and project list:
    //1. Hardcoded profile data to be removed
    //2. Data to be fetched for completed projects
    //3. Logic to be handled for both student and guide
    return (
        <div>
            <ProfilePage userProfile={userProfile}/>
            <center><h2><b>Completed Projects</b></h2></center>
            <br/>
            <div className="Cards" style={{ color: "black" }}>
                <ProjectsList projects={userProjects} />
            </div>
        </div>
    );
};

export default CompletedGuidedProjects;