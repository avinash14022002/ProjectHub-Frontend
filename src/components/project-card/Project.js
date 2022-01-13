import React from 'react';
import Card from 'react-bootstrap/Card'
import {
  Link,
} from "react-router-dom";
import './Project.css';

const Project = ({ projectData }) => {
  return (
    <Link to={`/project-details/${projectData.projectId}`} style={{ textDecoration: 'none' }}>
      <Card className="card" border="primary" style={{ width: '60rem' , backgroundColor:'#E7E7E7'}}>
        <Card.Header as="h5" style={{ color: "black", fontWeight: "bold"}}>{projectData.projectTitle}</Card.Header>
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{projectData.projectDomain}</Card.Title>
          <Card.Text style={{ color: "black" }}>{projectData.description}</Card.Text>
          {projectData.projectTag1 != null && <button className="ProjectTechnologyTag" style={{ color: "black" }}>{projectData.projectTag1}</button>}
          {projectData.projectTag2 != null && <button className="ProjectTechnologyTag" style={{ color: "black" }}>{projectData.projectTag2}</button>}
          {projectData.projectTag3 != null && <button className="ProjectTechnologyTag" style={{ color: "black" }}>{projectData.projectTag3}</button>}
          {projectData.projectTag1 === null && projectData.projectTag2 === null && projectData.projectTag3 === null && <p className="mb-2 text-muted">[ Tags are not defined yet ]</p>}
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Project;