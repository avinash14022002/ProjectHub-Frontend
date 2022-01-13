import React, {useState, useEffect} from 'react';
import { MDBCard, MDBCardBody} from 'mdb-react-ui-kit';
import axios from 'axios';
import {
  Link,
  useParams,
} from "react-router-dom";
import './ProjectDetails.css';

const ProjectDetails = ({ url }) => { 
  const { projectId } = useParams();
  
  const[projectDetails, setProjectDetails] = useState({});

  useEffect(() => {
    const jwtToken = JSON.parse(sessionStorage.getItem('login')).token;

    const projectUrl = `${url}/${projectId}`

    axios.get(projectUrl, {
      headers: { 
        "Authorization" : `${jwtToken}`
    }}).then(response => {
      return response.data;
    }).then(projectData => {
      setProjectDetails(projectData)
    });
  }, [url, projectId]);

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
                </div>

                <button className="PaperButton" onClick={event => window.open(projectDetails.paperUrl, '_blank')}>Paper <i className="bi bi-download"></i> </button>
                <button className="PPTButton" onClick={event => window.open(projectDetails.pptUrl, '_blank')}>PPT <i className="bi bi-download"></i> </button>
            </div>
        </div>
        <div className="DescriptionContainer" style={{ color: "black" }}>
          <p className="ProjectDescription" style={{ color: "black" }}> {projectDetails.description} </p> 
        </div>
        
        <div className="GuidedContainer">
          <h2><b style={{ color: "black" }}>Guided By :</b></h2>
          <div className="GuideDetails" style={{ color: "black", textDecoration: "none" }}>
            {projectDetails.guide && <Link to={`/teacher/guided-projects/${projectDetails.guide.id}`} style={{ textDecoration: 'none' }}>
              <h5 style={{ color: "black" }}><i className="bi bi-person-square" style={{ color: "black" }}></i>  {projectDetails.guide.name}</h5>
            </Link>}
          </div>
        </div>

        <div className="ContributedByContainer" style={{ color: "black"}}>
          <h2><b style={{ color: "black" }}>Contributed By :</b></h2>
          <ul className="list-unstyled">
            {projectDetails.student1 && <Link to={`/student/completed-projects/${projectDetails.student1.id}`} style={{ textDecoration: 'none' }}>
              <h5 style={{ color: "black" }}><i className="bi bi-person-square" style={{ color: "black" }}></i>  {projectDetails.student1.name}</h5>
            </Link>}
            {projectDetails.student2 && <Link to={`/student/completed-projects/${projectDetails.student2.id}`} style={{ textDecoration: 'none' }}>
              <h5 style={{ color: "black" }}><i className="bi bi-person-square" style={{ color: "black" }}></i>  {projectDetails.student2.name}</h5>
            </Link>}
            {projectDetails.student3 && <Link to={`/student/completed-projects/${projectDetails.student3.id}`} style={{ textDecoration: 'none' }}>
              <h5 style={{ color: "black" }}><i className="bi bi-person-square" style={{ color: "black" }}></i>  {projectDetails.student3.name}</h5>
            </Link>}
            {projectDetails.student4 && <Link to={`/student/completed-projects/${projectDetails.student4.id}`} style={{ textDecoration: 'none' }}>
              <h5 style={{ color: "black" }}><i className="bi bi-person-square" style={{ color: "black" }}></i>  {projectDetails.student4.name}</h5>
            </Link>}
            {projectDetails.student5 && <Link to={`/student/completed-projects/${projectDetails.student5.id}`} style={{ textDecoration: 'none' }}>
              <h5 style={{ color: "black" }}><i className="bi bi-person-square" style={{ color: "black" }}></i>  {projectDetails.student5.name}</h5>
            </Link>}
          </ul>
        </div>        
      </MDBCardBody>
    </MDBCard>
  );
};

export default ProjectDetails;