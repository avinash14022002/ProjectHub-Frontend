import React, { useState, useEffect } from 'react';
import Project from '../project-card/Project';

const ProjectsList = (props) => {  
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(props.projectsList);
    }, []);
   
    const listItems = projects.map((project) =>
        <li key={project.name.toString()}>
            <Project projectData = {project} />
        </li>
    );
    
    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    );
};

export default ProjectsList;