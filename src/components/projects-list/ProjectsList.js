import React from 'react';
import Project from '../project-card/Project';

const ProjectsList = ({ projects }) => {  
    const listOfProjects = projects.map((project) =>
        <li key={project.projectId.toString()}>
            <Project projectData = {project} />
        </li>
    );
    
    return (
        <div>
            <ul className="list-unstyled">
                {listOfProjects}
            </ul>
        </div>
    );
};

export default ProjectsList;