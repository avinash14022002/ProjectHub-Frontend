import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import {
  Link,
} from "react-router-dom";
import './Project.css';

const Project = (props) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    setProject(props.projectData);
  }, []);
  
  // <MDBCard className="card">
  //     <MDBCardHeader><h5>{project.name}</h5></MDBCardHeader>
  //     <MDBCardBody>
  //       <MDBCardTitle>{project.domain}</MDBCardTitle>
  //       <MDBCardText>{project.description}</MDBCardText> 
  //       <MDBBtn href=''>Go somewhere</MDBBtn>
  //     </MDBCardBody>
  // </MDBCard>

  return (
    <Card border="primary" style={{ width: '75rem' }}>
      <Link to={`/project-details/${project.projectId}`}><Card.Header>{project.projectTitle}</Card.Header></Link>
      <Card.Body>
        <Card.Title>{project.projectDomain}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Project;