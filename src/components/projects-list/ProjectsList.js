import React, { useState, useEffect } from 'react';
import Project from '../project-card/Project';
import axios from 'axios';

const ProjectsList = (props) => {  
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(props.url)
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                const projectsData = data.filter(project => project.closed === '1')
                console.log(projectsData);
            });
    }, []);
   
    const listItems = projects.map((project) =>
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