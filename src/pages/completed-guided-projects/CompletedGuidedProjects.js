import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProfilePage from '../../components/profile/Profile';
import ProjectsList from '../../components/projects-list/ProjectsList';
import NoDataFound from '../../pages/no-data-found/NoDataFound';

const CompletedGuidedProjects = ({ url, role }) => { 
    const { userId } = useParams();

    const [userProfile, setUserProfile] = useState({});
    const [userProjects, setUserProjects] = useState([]);

    useEffect(() => {
        const jwtToken = JSON.parse(sessionStorage.getItem('login')).token;

        const userProjectsUrl = `${url}/${userId}`;

        axios.get(userProjectsUrl, {
            headers: { 
                "Authorization" : `${jwtToken}`,
            }
        }).then((response) => {
            return response.data;
        }).then((data) => {
            if(role === 'student') {
                setUserProfile((prevUserProfileData) => {
                    return {...prevUserProfileData, role: role, userId: data.username, firstName: data.firstName, lastName: data.lastName, collegeEmail: data.emailId, personalEmail: data.personalEmail, department: data.department}
                });
            } else {
                setUserProfile((prevUserProfileData) => {
                    return {...prevUserProfileData, role: role, userId: data.employeeId, firstName: data.firstName, lastName: data.lastName, collegeEmail: data.emailId, department: data.department};
                });
            }

            const completedStudentProjects = filterProjects(data.projects);
            setUserProjects(completedStudentProjects);
        });
    }, [url, role, userId]);

    const filterProjects = (projects) => {
        const filteredProjects = projects.filter(project => project !== null)
        return filteredProjects;
    };

    return (
        <div>
            <ProfilePage userProfile={userProfile}/>
            <center><h2><b>Completed Projects</b></h2></center>
            <br/>
            {userProjects.length === 0 
                ? <NoDataFound displayMessage="You have no accomplished projects." /> 
                :   <div className="Cards">
                        <ProjectsList projects={userProjects} />
                    </div>
            }
        </div>
    );
};

export default CompletedGuidedProjects;