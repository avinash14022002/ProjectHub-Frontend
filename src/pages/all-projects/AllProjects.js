import React from 'react';
import SearchBar from '../../components/search/SearchBar';
import Filter from '../../components/filter/Filter';
import ProjectsList from '../../components/projects-list/ProjectsList'
import './AllProjects.css';


const AllProjects = () => { 
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
                    <ProjectsList url="http://localhost:8080/api/studentProject" />
                </div>
            </div>
        </div>
    );
};

export default AllProjects;