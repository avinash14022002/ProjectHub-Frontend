import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import TeacherOngoingProjectsList from '../../components/teacher-ongoing-project-list/TeacherOngoingProjectsList';
import NoDataFound from '../../pages/no-data-found/NoDataFound'
import './TeacherOngoingProjects.css';

const TeacherOngoingProjects = ({ url }) => { 
    const [ongoingProjects, setOngoingProjects] = useState([]);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('login'));
        const projectUrl = `${url}/${user.userNo}`;

        axios.get(projectUrl, {
                headers: {
                    "Authorization" : `${user.token}`
                }
            }).then((response) => {
                return response.data;
            })
            .then((data) => {
                setOngoingProjects(data);
            });
    }, [url]);
    
    return (
        <div>
            <div style={{marginRight:'160px', marginTop:'15px', padding:'10px'}}>
                <Link to="/teacher/create-project">
                    <Fab color='primary' aria-label='add' style={{float:'right'}}>
                    <AddIcon />
                    </Fab>
                </Link>
            </div>
            <br/>
            <h1 className="PageTitle" style={{textAlign:'center'}}><b>On-going Projects</b></h1>
            {ongoingProjects.length === 0 
                ? <NoDataFound displayMessage="You have currently no ongoing projects." /> 
                :   <div className="Cards">
                        <TeacherOngoingProjectsList ongoingProjects={ongoingProjects} />
                    </div>
            }
        </div>
    );
};

export default TeacherOngoingProjects;