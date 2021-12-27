import React, { useState, useEffect } from 'react';
import {
    Link,
} from "react-router-dom";
import Project from '../project-card/Project';

const ProjectsList = ({ projects }) => {  
    const [listOfProjects, setListOfProjects] = useState([]);

    useEffect(() => {
        setListOfProjects(projects);
    });
   
    const listItems = listOfProjects.map((project) =>
        <Link to={`/project-details/${project.projectId}`}>
            <li key={project.projectId.toString()}>
                <Project projectData = {project} />
            </li>
        </Link>
    );
    
    return (
        <div>
            <ul className="list-unstyled">
                {listItems}
            </ul>
        </div>
    );
};

export default ProjectsList;