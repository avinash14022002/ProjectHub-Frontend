import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import ProjectsList from '../../components/projects-list/ProjectsList'
import './AllProjects.css';

const AllProjects = ({ studentUrl, teacherUrl }) => { 
    const [searchTerm, setSearchTerm] = useState("");
    
    const [projectsData, setProjectsData] = useState([]);
    const [filteredProjectsData, setFilteredProjectsData] = useState([]);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('login'));

        const fetchProjects = (url, token) => {
            axios.get(url, {
                headers: { 
                    "Authorization" : token
                } 
            }).then((response) => {
                return response.data;
            }).then((data) => {
                const filteredProjectsData = filterProjects(data);
                
                setProjectsData(filteredProjectsData);
                setFilteredProjectsData(filteredProjectsData);
            }); 
        }

        if(user.role === 'student') {
            fetchProjects(studentUrl, user.token);
        } else if(user.role === 'teacher') {
            fetchProjects(teacherUrl, user.token);
        }
    }, [studentUrl, teacherUrl]);
    
    const filterProjects = (projects) => {
        const filteredProjects = projects.filter(project => project.closed === '1')
        return filteredProjects;
    };

    const handleSearch = (event) => {
        const searchWord = event.target.value;
        setSearchTerm(searchWord);

        const newFilter = projectsData.filter((project) => {
            return project.projectTitle.toLowerCase().includes(searchWord.trim().toLowerCase());
        });

        if (searchWord.trim() === "") {
          setFilteredProjectsData(projectsData);
        } else {
          setFilteredProjectsData(newFilter);
        }
    };

    const clearInput = () => {
        setSearchTerm("");
        setFilteredProjectsData(projectsData);
    };

    return (
        <div>
            <div className="SearchBar">
                <div className="search">
                    <div className="searchInputs">
                        <input 
                            type="text" 
                            placeholder="Search Projects..." 
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <div className="searchIcon">
                            {searchTerm.trim() === '' ? (
                                <SearchIcon />
                            ) : (
                                <CloseIcon id="clearBtn" onClick={clearInput} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="MainContainer">
                <div className="Cards">
                    <ProjectsList projects={filteredProjectsData} />
                </div>
            </div>
        </div>
    );
};

export default AllProjects;