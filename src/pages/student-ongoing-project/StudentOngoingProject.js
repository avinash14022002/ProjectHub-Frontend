import React, { useState, useEffect } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Multiselect from "multiselect-react-dropdown";
import { MDBCard, MDBCardBody} from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';
import './StudentOngoingProject.css';

const StudentOngoingProjects = ({ projectIdUrl, projectDetailsUrl, updateProjectDetailsUrl}) => {
    const customStyles = {
        option: () => {
            return{
                color:'black',
            };
        },
        width: () => {
            return{
                width:'240px'
            };
        }   
    }

    const optionTags = ["AI/ML", "App Development", "AR/VR", "Blockchain", "Cloud", "CyberSecurity", "IOT", "Mechatronics", "Robotics", "Web Development"];
    const [selectedProjectTags, setSelectedProjectTags] = useState([]);

    const [projectId, setProjectId] = useState(null);
    const [projectData, setProjectData] = useState({});
    const [projectOutputData, setProjectOutputData] = useState({});

    const [imageSelected, setImageSelected] = useState("");
    const [paperSelected, setPaperSelected] = useState("");
    const [pptSelected, setPptSelected] = useState("");

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('login'));

        const fetchProjectIdUrl = `${projectIdUrl}?username=${user.userNo}`;

        axios.get(fetchProjectIdUrl, {
            headers: { 
                "Authorization" : `${user.token}`
            } 
        }).then((response) => {
            return response.data;
        }).then((projectId) => {
            setProjectId(projectId);
        }); 
        
        const fetchProjectDetailsUrl = `${projectDetailsUrl}/${projectId}`  

        axios.get(fetchProjectDetailsUrl, {
            headers: { 
                "Authorization" : `${user.token}`
            } 
        }).then((response) => {
            return response.data;
        }).then((projectData) => {
            setProjectData(projectData);
            
            const data = {
                projectID: projectId,
                projectTitle: projectData.projectTitle,
                projectDomain: projectData.projectDomain,
                description: projectData.description,
                projectTag1: projectData.projectTag1,
                projectTag2: projectData.projectTag2,
                projectTag3: projectData.projectTag3,
                imageUrl: projectData.imageUrl,
                pptUrl: projectData.pptUrl,
                paperUrl: projectData.paperUrl,
            }
            setProjectOutputData(data);

            if(data.projectTag1 !== null) {
                setSelectedProjectTags(oldTags=>[...oldTags, data.projectTag1]);
            }

            if(data.projectTag2 !== null) {
                setSelectedProjectTags(oldTags=>[...oldTags, data.projectTag2]);
            }

            if(data.projectTag3 !== null) {
                setSelectedProjectTags(oldTags=>[...oldTags, data.projectTag3]);
            }
        }); 
    }, [projectIdUrl, projectDetailsUrl, projectId]);

    const projectPostData = (e) =>{
        e.preventDefault();
        
        if(window.confirm("Are you sure you want to save this data ?")) {
            const jwtToken = JSON.parse(sessionStorage.getItem('login')).token;

            if(selectedProjectTags.length === 0) {
                setProjectOutputData({...projectOutputData, projectTag1: null, projectTag2: null, projectTag3: null});
            } else if(selectedProjectTags.length === 1) {
                setProjectOutputData({...projectOutputData, projectTag1: selectedProjectTags[0], projectTag2: null, projectTag3: null});
            } else if(selectedProjectTags.length === 2) {
                setProjectOutputData({...projectOutputData, projectTag1: selectedProjectTags[0], projectTag2: selectedProjectTags[1], projectTag3: null});
            } else if(selectedProjectTags.length === 3) {
                setProjectOutputData({...projectOutputData, projectTag1: selectedProjectTags[0], projectTag2: selectedProjectTags[1], projectTag3: selectedProjectTags[2]});
            }

            axios.post(updateProjectDetailsUrl, {...projectOutputData}, {
                headers: {
                    "Authorization" : jwtToken
                }
            }).then((response) => {
                window.alert("You have successfully saved the project data");
            }).catch((err) => { 
                console.log(err.response);
                window.alert("There was some error while saving the project data");
            });
        }
    }

    const uploadImage = (event) => {
        event.preventDefault();

        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "uh3yp0v2")

        axios.post("https://api.cloudinary.com/v1_1/drls2okca/image/upload", formData)
        .then((response) => {
            setProjectOutputData({...projectOutputData, imageUrl: response.data.url});
        }).catch((err) => { 
            console.log(err);
        });
    };

    const uploadPaper = (event) => {
        event.preventDefault();

        const formData = new FormData()
        formData.append("file", paperSelected)
        formData.append("upload_preset", "uh3yp0v2")

        axios.post( 
            "https://api.cloudinary.com/v1_1/drls2okca/auto/upload",
            formData
        ).then((response)=>{
            setProjectOutputData({...projectOutputData, paperUrl: response.data.url});
        }).catch((err) => { 
            console.log(err);
        });
    };

    const uploadPpt = (event) => {
        event.preventDefault();

        const formData = new FormData()
        formData.append("file", pptSelected)
        formData.append("upload_preset", "uh3yp0v2")

        axios.post(
            "https://api.cloudinary.com/v1_1/drls2okca/auto/upload", 
            formData
        ).then((response)=>{
            setProjectOutputData({...projectOutputData, pptUrl: response.data.url});
        }).catch((err) => { 
            console.log(err);
        });
    };

    const handleTextInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProjectOutputData({...projectOutputData, [name]:value});
    }

    return (
        <MDBCard className="card">
            <MDBCardBody>
            <Form>
                <div className="MainContainer">
                    <div className="SemesterTitle">
                        {projectData.projectInfo && <h2><b style={{ color: "black"}}>{projectData.projectInfo.yearInfo}</b></h2>}
                        {projectData.guide && <h4 style={{ color: "black"}}>Guide Name : {projectData.guide.name}</h4>}
                    </div>

                    <div className="ProjectDueDate">
                        {projectData.deadline && <h5 style={{ color: "red"}}>Project Due Date : {projectData.deadline}</h5>}
                        {projectData.projectInfo && <h4 style={{ color: "black"}}>Group : {projectData.projectInfo.groupInfo}</h4>}
                    </div>
                </div>

                <div className = "InfoContainer" >
                    <div className="GrNo">
                        <h4 style={{ color: "black"}}>GR. Number</h4>
                        <ul className="list-unstyled">
                            {projectData.student1 && <li> <h5 style={{ color: "black"}}>{projectData.student1.id} </h5></li>}
                            {projectData.student2 && <li> <h5 style={{ color: "black"}}>{projectData.student2.id} </h5></li>}
                            {projectData.student3 && <li> <h5 style={{ color: "black"}}>{projectData.student3.id} </h5></li>}
                            {projectData.student4 && <li> <h5 style={{ color: "black"}}>{projectData.student4.id} </h5></li>}
                            {projectData.student5 && <li> <h5 style={{ color: "black"}}>{projectData.student5.id} </h5></li>}
                        </ul>
                    </div>
                    <div className="Name">
                    <h4 style={{ color: "black"}}>Name</h4>
                        <ul className="list-unstyled">
                            {projectData.student1 && <li> <h5 style={{ color: "black"}}>{projectData.student1.name} </h5></li>}
                            {projectData.student2 && <li> <h5 style={{ color: "black"}}>{projectData.student2.name} </h5></li>}
                            {projectData.student3 && <li> <h5 style={{ color: "black"}}>{projectData.student3.name} </h5></li>}
                            {projectData.student4 && <li> <h5 style={{ color: "black"}}>{projectData.student4.name} </h5></li>}
                            {projectData.student5 && <li> <h5 style={{ color: "black"}}>{projectData.student5.name} </h5></li>}
                        </ul>
                    </div>
                </div>

                <div className="TextInput">
                    <div className="TitleDomainTech">
                        <div className="TextFieldTitleWrapper">
                            <div className="TextField">
                                <Box
                                    sx={{
                                        display: 'grid',
                                        columnGap: 0,
                                        rowGap: 2,
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                    }}
                                >
                                    <h5 style={{ color: "black", margin: "20px"}}>Title </h5>
                                    <input className='inputFields'
                                        id="projectTitle"
                                        name="projectTitle"
                                        value={projectOutputData.projectTitle || ''}
                                        onChange={handleTextInput}
                                        placeholder="Enter Title"
                                    />
                                    <h5 style={{ color: "black", margin: "20px"}}>Domain </h5>
                                    <input className='inputFields'
                                        id="projectDomain"
                                        name="projectDomain"
                                        value={projectOutputData.projectDomain || ''}
                                        onChange={handleTextInput}
                                        placeholder="Enter Domain" 
                                    />
                                    <h5 style={{ color: "black", margin: "20px"}}>Tech-Stack </h5>
                                    <Multiselect
                                        styles={customStyles}
                                        options={optionTags}
                                        selectedValues={selectedProjectTags}
                                        selectionLimit="3"
                                        placeholder="Select Tags"
                                        isObject={false}
                                        onRemove={(event) => {
                                            setSelectedProjectTags(event);
                                        }}
                                        onSelect={(event) => {
                                            setSelectedProjectTags(event);
                                        }}
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div className="Description">
                        <textarea className='inputFields'
                            id="description"
                            name="description"
                            value={projectOutputData.description || ''}
                            onChange={handleTextInput}
                            placeholder="Enter Description" 
                            style ={{width: '100%', height: "350px"}}
                        />
                    </div>
                </div>

                <div className="FileInputs">
                    <div className="InputForms">
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" onChange={(event)=>{setImageSelected(event.target.files[0]);}} accept=".png,.jpg,.jpeg,.webp,.jfif"/>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" onChange={(event)=>{setPaperSelected(event.target.files[0]);}} accept=".docx"/>
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" onChange={(event)=>{setPptSelected(event.target.files[0]);}} accept=".pptx"/>
                        </Form.Group>
                    </div>

                    <div className= "UploadButtons">
                        <button className="UploadIndividualButton" onClick={uploadImage}>Image <i className="bi bi-upload"></i></button><br/>
                        <button className="UploadIndividualButton" onClick={uploadPaper}>Paper <i className="bi bi-upload"></i></button><br/>
                        <button className="UploadIndividualButton" onClick={uploadPpt}>PPT <i className="bi bi-upload"></i></button><br/>
                    </div>
                </div>
                <button className="SaveButton" onClick={projectPostData}>Save </button><br/>
            </Form>    
        </MDBCardBody>
    </MDBCard>
    )
};

export default StudentOngoingProjects;