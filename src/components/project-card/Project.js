import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import {
  Link,
} from "react-router-dom";
import './Project.css';

const Project = ({ projectData }) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    setProject(projectData);
  }, [projectData]);

  return (
    <Link to={`/project-details/${project.projectId}`} style={{ textDecoration: 'none' }}>
      <Card className="card" border="primary" style={{ width: '60rem' , backgroundColor:'#E7E7E7'}}>
        <Card.Header as="h5" style={{ color: "black", fontWeight: "bold"}}>{project.projectTitle}</Card.Header>
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{project.projectDomain}</Card.Title>
          <Card.Text style={{ color: "black" }}>{project.description}</Card.Text>
          <button className="ProjectTechnologyTag" style={{ color: "black" }}>{project.projectTag1}</button>
          <button className="ProjectTechnologyTag" style={{ color: "black" }}>{project.projectTag2}</button>
          <button className="ProjectTechnologyTag" style={{ color: "black" }}>{project.projectTag3}</button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Project;