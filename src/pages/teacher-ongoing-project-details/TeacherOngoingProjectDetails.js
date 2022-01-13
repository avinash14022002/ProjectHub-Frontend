import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import DatePicker from "react-multi-date-picker"
import { useParams } from 'react-router-dom';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import "react-multi-date-picker/styles/backgrounds/bg-gray.css"
import './TeacherOngoingProjectDetails.css';
 
const TeacherOngoingProjectDetails = ({ projectDetailsUrl, updateDeadlineUrl, closeProjectUrl}) => {
    const history = useHistory();
    
    const { projectId } = useParams();
    
    const [project, setProject] = useState({})

    const [deadline, setDeadline] = useState(new Date());
    
    useEffect(() => {
        const jwtToken = JSON.parse(sessionStorage.getItem('login')).token;

        const projectUrl = `${projectDetailsUrl}/${projectId}`;

        axios.get(projectUrl, {
            headers : {
                "Authorization" : jwtToken
            }
        }).then((response) => { 
            return response.data;
        }).then((data) => {
            setProject(data);
            setDeadline(data.deadline);
        });
    }, [projectDetailsUrl, projectId]);

    const [props, setProps] = useState({ 
        value: deadline,
        format: "YYYY-MM-DD",
        onChange:(date)=>setDeadline(date)
    });

    const updateDeadline = (e) => { 
        e.preventDefault();
        
        const user = JSON.parse(sessionStorage.getItem('login'));

        axios.put(updateDeadlineUrl, {
                projectID: projectId,
                deadline: deadline.toString()
            }, {
            headers : {
                "Authorization" : user.token
            }
        });
    }

    const updateStatus = (e)=>{
        e.preventDefault();
        
        const user = JSON.parse(sessionStorage.getItem('login'));

        const closeProject = `${closeProjectUrl}/${projectId}`;

        axios.put(closeProject, { }, {
            headers : {
                "Authorization" : user.token
            }
        });

        history.replace(`/teacher/ongoing-projects/${user.userNo}`);
    }
    
    return (
        <MDBCard className="card">
            <MDBCardBody>
                <div className="MainContainer">
                    <div className="SemesterTitle">
                        {project.projectInfo && <h2><b style={{ color: "black"}}>{project.projectInfo.yearInfo}</b></h2>}
                        {project.guide && <h4 style={{ color: "black"}}>Guide Name: {project.guide.name}</h4>}
                    </div>

                    <div className="ProjectDueDate">
                        <h5 style={{ color: "black"}}>Project Due Date : <h5 style={{ display: 'inline-block'}}>
                            
                            <DatePicker 
                                {...props} 
                                onPropsChange={setProps} 
                                value= {deadline}
                                className="bg-gray"
                                style={{
                                    backgroundColor: "aliceblue",
                                    height: "24px",
                                    borderRadius: "8px",
                                    fontSize: "14px",
                                    padding: "3px 10px",
                                    color: "red"
                                }}
                            >
                            </DatePicker>
                            </h5>
                        </h5>
                        {project.projectInfo && <h4 style={{ color: "black"}}>Group: {project.projectInfo.groupInfo}</h4>}
                    </div>
                </div>

                <div className = "InfoContainer" >
                    <div className="GrNo">
                        <h4 style={{ color: "black"}}>GR. Number</h4>
                        <ul className="list-unstyled">
                            {project.student1 && <li> <h5 style={{ color: "black"}}>{project.student1.id}</h5></li>}
                            {project.student2 && <li> <h5 style={{ color: "black"}}>{project.student2.id}</h5></li>}
                            {project.student3 && <li> <h5 style={{ color: "black"}}>{project.student3.id}</h5></li>}
                            {project.student4 && <li> <h5 style={{ color: "black"}}>{project.student4.id}</h5></li>}
                            {project.student5 && <li> <h5 style={{ color: "black"}}>{project.student5.id}</h5></li>}
                        </ul>
                    </div>
                    <div className="Name">
                    <h4 style={{ color: "black"}}>Name</h4>
                        <ul className="list-unstyled">
                            {project.student1 && <li> <h5 style={{ color: "black"}}>{project.student1.name}</h5></li>}
                            {project.student2 && <li> <h5 style={{ color: "black"}}>{project.student2.name}</h5></li>}
                            {project.student3 && <li> <h5 style={{ color: "black"}}>{project.student3.name}</h5></li>}
                            {project.student4 && <li> <h5 style={{ color: "black"}}>{project.student4.name}</h5></li>}
                            {project.student5 && <li> <h5 style={{ color: "black"}}>{project.student5.name}</h5></li>}
                        </ul>
                    </div>
                </div>

                <div className="TextInput">
                    <div className="TextFieldTitleWrapper" style={{ width: '100%' }}>
                        <div >
                            <Box
                                sx={{
                                    display: 'grid',
                                    columnGap: 0,
                                    rowGap: 2,
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                }}
                            >
                                <h5 style={{ color: "black", margin: "20px", float:"left"}}>Title </h5>
                                <TextField 
                                    id="projectTitle" 
                                    value={project.projectTitle}
                                    placeholder="Title" 
                                    variant="filled"
                                    disabled="true" 
                                    style ={{margin: '10px', width:"240px", float:"right"}}/> 
                                
                                <h5 style={{ color: "black", margin: "20px", float:"left"}}>Domain </h5>
                                <TextField 
                                    id="projectDomain"
                                    value={project.projectDomain}
                                    placeholder="Domain" 
                                    variant="filled"
                                    disabled="true" 
                                    style ={{margin: '10px', width:"240px", float:"right"}}/>

                                <h5 style={{ color: "black", margin: "20px",float:"left"}}>Tech-Stack </h5>
                                <div>
                                    <button className="ProjectTechnologyTag" style={{ color: "black",display:"inline-block"}}>{project.projectTag1}</button>
                                    <button className="ProjectTechnologyTag" style={{ color: "black", display:"inline-block"}}>{project.projectTag2}</button>
                                    <button className="ProjectTechnologyTag" style={{ color: "black", display:"inline-block"}}>{project.projectTag3}</button>
                                </div>
                            </Box>
                        </div>
                    </div>
                        
                    <div className="Description" style={{ width: '100%' }}>
                        <TextField 
                           id="description"
                           value={project.description}
                           placeholder="Description" 
                           variant="filled" 
                           multiline="true" 
                           rows ="15"
                           disabled="true" 
                           style ={{width: '100%'}}/>
                    </div>
                </div>

                <div className="DownloadButtons"> 
                    <button className="DownloadIndividualButton" onClick={event => window.open(project.imageUrl, '_blank')} >Image <i className="bi bi-download"></i></button>
                    <button className="DownloadIndividualButton" onClick={event => window.open(project.paperUrl, '_blank')} >Paper <i className="bi bi-download"></i></button>
                    <button className="DownloadIndividualButton" onClick={event => window.open(project.pptUrl, '_blank')} >PPT <i className="bi bi-download"></i></button>
                </div>

                <button className="UpdateDeadlineButton" onClick={updateDeadline}>UPDATE DUE DATE </button>
                <br/>

                <button 
                    className="CloseButton"
                    onClick={(e)=>{
                        const confirmBox = window.confirm(
                            "Do you want to close project ?"
                        )
                        if(confirmBox === true){
                            updateStatus(e)
                        }
                    }}
                >CLOSE PROJECT </button>
                
        </MDBCardBody>
    </MDBCard>
    )
};

export default TeacherOngoingProjectDetails;