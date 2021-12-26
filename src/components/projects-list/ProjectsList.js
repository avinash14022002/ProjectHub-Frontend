import React, { useState, useEffect } from 'react';
import Project from '../project-card/Project';

const ProjectsList = ({ projects }) => {  
    const [listOfProjects, setListOfProjects] = useState([]);

    useEffect(() => {
        console.log(projects)
        setListOfProjects(projects);
    });
   
    const listItems = listOfProjects.map((project) =>
        <li key={project.projectId.toString()}>
            <Project projectData = {project} />
        </li>
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