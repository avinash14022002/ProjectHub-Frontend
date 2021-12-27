import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../../components/search/SearchBar';
import Filter from '../../components/filter/Filter';
import ProjectsList from '../../components/projects-list/ProjectsList'
import './AllProjects.css';

const AllProjects = ({ url }) => { 
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const jwtToken = JSON.parse(localStorage.getItem('login')).token;

        axios.get(url, {
            headers: { 
                "Authorization" : `${jwtToken}`
            } 
        }).then((response) => {
            return response.data;
        }).then((data) => {
            const filteredProjectsData = filterProjects(data);
            setProjects(filteredProjectsData);
        });
    }, []);
    
    const filterProjects = (projects) => {
        const filteredProjects = projects.filter(project => project.closed === '1')
        return filteredProjects;
    };
    
    return (
        <div>
            <div className="SearchBar">
                <SearchBar placeholder="Enter a Project Name..." />
            </div>
            <div className="MainContainer">
                <div className="Filter">
                    <Filter />
                </div>
                <div className="Cards" style={{ color: "black" }}>
                    <ProjectsList projects={projects} />
                </div>
            </div>
        </div>
    );
};

export default AllProjects;