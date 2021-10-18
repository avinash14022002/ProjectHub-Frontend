import React from 'react';
// import SearchBar from '../../components/search/SearchBar';
// import Filter from '../../components/filter/Filter';
// import ProjectsList from '../../components/projects-list/ProjectsList'
import { Search, FilterProjects, Projects } from './AllProjectsElements';


const AllProjects = () => { 
    
    const projectsList = [
        {
            name : "Project Hub",
            domain : "Smart Education",
            description : "One place to find all projects that have been born in the prestigious institute of Bibwewadi- Vishwakarma Institute of Technology.",
            technologyUsed : ["Java", "JavaScript", "React", "SpringBoot", "PostgreSQL"]
        },
        {
            name : "Project Hubs",
            domain : "Smart Education",
            description : "One place to find all projects that have been born in the prestigious institute of Bibwewadi- Vishwakarma Institute of Technology.",
            technologyUsed : ["Java", "JavaScript"]
        },
        {
            name : "Project Hubbby",
            domain : "Education",
            description : "One place to find all projects that have been born in the prestigious institute of Bibwewadi- Vishwakarma Institute of Technology.",
            technologyUsed : ["SpringBoot", "PostgreSQL"]
        },
        {
            name : "Projects Hubs",
            domain : "Smart",
            description : "One place to find all projects that have been born in the prestigious institute of Bibwewadi- Vishwakarma Institute of Technology.",
            technologyUsed : ["Java", "PostgreSQL"]
        }, 
    ]
    
    return (
        <div>
            <Search placeholder="Enter a Project Name..." />
            <FilterProjects />
            <Projects projectsList = {projectsList} />
        </div>
    );
};

export default AllProjects;