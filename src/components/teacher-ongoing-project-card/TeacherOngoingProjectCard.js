import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import {
  Link,
} from "react-router-dom";
import './TeacherOngoingProjectCard.css';

const TeacherOngoingProjectCard = ({ projectData }) => {
  const [ongoingProject, setOngoingProject] = useState({});

  useEffect(() => {
    setOngoingProject(projectData);
  }, [projectData]);

  return (
    <Link to={`/teacher/ongoing-projects/project-details/${ongoingProject.projectId}`} style={{ textDecoration: 'none' }}>
      <Card className="Card" style={{ width: '25rem' }}>
          <Card.Body>
            <div className="CardTitle">
                {ongoingProject.projectInfo && <h4 style={{ color: "black", fontWeight:"bold"}}>{ongoingProject.projectInfo.groupInfo.replaceAll('-', ' ')}</h4>}
                <div className="CardProjectName">
                    <p className="mb-2 text-muted">{ongoingProject.projectTitle}</p>
                </div> 
            </div>
            <div className="CardYear">
                {ongoingProject.projectInfo && <h6 style={{ color: "black" }}>{ongoingProject.projectInfo.yearInfo}</h6>}
            </div>
          </Card.Body>
      </Card>
    </Link>
  );
}

export default TeacherOngoingProjectCard;