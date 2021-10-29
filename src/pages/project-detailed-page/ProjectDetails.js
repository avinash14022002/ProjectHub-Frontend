import React, {useState, useEffect} from 'react';
import { MDBCard, MDBCardBody} from 'mdb-react-ui-kit';
import './ProjectDetails.css';
import axios from 'axios';

export default function ProjectDetails() { 
  //ADD PROPS FOR ID
  //ADD CONNECTIVITY FROM ALL PROJECTS TO DETAILED PAGE
  const url = 'http://localhost:8080/api/studentProject?id=20'
  const[projectDetails, setProjectDetails] = useState({})

  useEffect(()=>{
    axios.get(url).then(response => {
      setProjectDetails(response.data[0])
    })
  }, [url])

  if(projectDetails){
    return (
      <MDBCard className="card">
        <MDBCardBody>
          <div className="MainContainer">
              <div className="ProjectPreview">
                  <img className="ProjectPreviewImg" src={projectDetails.imageUrl} alt="Project Preview"/>
              </div>
  
              <div className="ProjectData">
                  <h1 className="ProjectTitle">{projectDetails.projectTitle}</h1>
                  <div>
                    <p className="ProjectDomain">Domain : <button className="ProjectDomainName">{projectDetails.projectDomain}</button></p>
                  </div>
                  
                  <h3 className="ProjectTechnology">Technology : </h3>
                  <div>
                    <button className="ProjectTechnologyTag">{projectDetails.projectTag1}</button>
                    <button className="ProjectTechnologyTag">{projectDetails.projectTag2}</button>
                    <button className="ProjectTechnologyTag">{projectDetails.projectTag3}</button>
                    {/* <button className="ProjectTechnologyTag">JavaScript</button>
                    <button className="ProjectTechnologyTag">PostgreSQL</button> */}
                  </div>
  
                  <button className="PaperButton" onClick={event=> window.open(projectDetails.paperUrl, '_blank')}>Paper <i className="bi bi-download"></i> </button>
                  <button className="PPTButton" onClick={event=> window.open(projectDetails.pptUrl, '_blank')}>PPT <i className="bi bi-download"></i> </button>
              </div>
          </div>
          <div className="DescriptionContainer">
            <p className="ProjectDescription"> {projectDetails.description} </p> 
          </div>
          
          {/* {REMOVE HARDCODED DATA} */}
          <div className="GuidedContainer">
            <h2><b>Guided By :</b></h2>
            <div className="GuideDetails">
              <h5><i className="bi bi-person-square"></i> Ashwini Shingare</h5>
            </div>
            
          </div>
  
          <div className="ContributedByContainer">
            <h2><b>Contributed By :</b></h2>
            <ul className="list-unstyled">
              <li><h5><i className="bi bi-person-square"></i> Anubhav Pabby</h5></li>
              <li><h5><i className="bi bi-person-square"></i> Anjali Asolkar</h5></li>
              <li><h5><i className="bi bi-person-square"></i> Avinash Vijayvargiya</h5></li>
              <li><h5><i className="bi bi-person-square"></i> Dhanshree Pajankar</h5></li>
            </ul>
          </div>        
        </MDBCardBody>
      </MDBCard>
    );
  }
  return(
    <div></div>
  )

  
}