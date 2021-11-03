import React, {useState, useEffect} from 'react';
import { MDBCard, MDBCardBody} from 'mdb-react-ui-kit';
import axios from 'axios';
import {
  useParams,
} from "react-router-dom";
import './ProjectDetails.css';

const ProjectDetails = () => { 
  // This is a react-router hook used for getting the projectId of the project
  const { projectId } = useParams();
  
  const [projectUrl, setProjectUrl] = useState(`http://localhost:8080/api/projects/${projectId}`);
  
  const[projectDetails, setProjectDetails] = useState({});

  useEffect(()=>{
    axios.get(projectUrl).then(response => {
      return response.data;
    })
    .then(projectData => {
      setProjectDetails(projectData);
    });
  }, [projectUrl])

  return (
    <MDBCard className="card">
      <MDBCardBody>
        <div className="MainContainer">
            <div className="ProjectPreview">
                <img className="ProjectPreviewImg"  style={{ color: "black"}} src={projectDetails.imageUrl} alt="Project Preview"/>
            </div>

            <div className="ProjectData">
                <h1 className="ProjectTitle" style={{ color: "black"}}>{projectDetails.projectTitle}</h1>
                <div>
                  <p className="ProjectDomain" style={{ color: "black"}}>Domain : <button className="ProjectDomainName" style={{ color: "black"}}>{projectDetails.projectDomain}</button></p>
                </div>
                
                <h3 className="ProjectTechnology" style={{ color: "black"}}>Technology : </h3>
                <div>
                  <button className="ProjectTechnologyTag" style={{ color: "black"}}>{projectDetails.projectTag1}</button>
                  <button className="ProjectTechnologyTag" style={{ color: "black"}}>{projectDetails.projectTag2}</button>
                  <button className="ProjectTechnologyTag" style={{ color: "black"}}>{projectDetails.projectTag3}</button>
                  {/* <button className="ProjectTechnologyTag">JavaScript</button>
                  <button className="ProjectTechnologyTag">PostgreSQL</button> */}
                </div>

                <button className="PaperButton" onClick={event => window.open(projectDetails.paperUrl, '_blank')}>Paper <i className="bi bi-download"></i> </button>
                <button className="PPTButton" onClick={event => window.open(projectDetails.pptUrl, '_blank')}>PPT <i className="bi bi-download"></i> </button>
            </div>
        </div>
        <div className="DescriptionContainer" style={{ color: "black"}}>
          <p className="ProjectDescription" style={{ color: "black"}}> {projectDetails.description} </p> 
        </div>
        
        {/* {REMOVE HARDCODED DATA} */}
        <div className="GuidedContainer" >
          <h2><b style={{ color: "black"}}>Guided By :</b></h2>
          <div className="GuideDetails" style={{ color: "black"}}>
            <h5 style={{ color: "black"}}><i className="bi bi-person-square" style={{ color: "black"}}></i> Ashwini Shingare</h5>
          </div>
          
        </div>

        <div className="ContributedByContainer" style={{ color: "black"}}>
          <h2><b style={{ color: "black"}}>Contributed By :</b></h2>
          <ul className="list-unstyled">
            <li><h5 style={{ color: "black"}}><i className="bi bi-person-square" style={{ color: "black"}}></i> Anubhav Pabby</h5></li>
            <li><h5 style={{ color: "black"}}><i className="bi bi-person-square" style={{ color: "black"}}></i> Anjali Asolkar</h5></li>
            <li><h5 style={{ color: "black"}}><i className="bi bi-person-square" style={{ color: "black"}}></i> Avinash Vijayvargiya</h5></li>
            <li><h5 style={{ color: "black"}}><i className="bi bi-person-square" style={{ color: "black"}}></i> Dhanshree Pajankar</h5></li>
          </ul>
        </div>        
      </MDBCardBody>
    </MDBCard>
  );
};

export default ProjectDetails;