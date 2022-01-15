import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import ProjectsList from '../../components/projects-list/ProjectsList'
import NoDataFound from '../../pages/no-data-found/NoDataFound'
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
                const filteredProjects = filterProjects(data);
                
                setProjectsData(filteredProjects);
                setFilteredProjectsData(filteredProjects);
            }); 
        }

        if(user.role === 'student') {
            fetchProjects(studentUrl, user.token);
        } else if(user.role === 'teacher' || user.role === 'admin') {
            fetchProjects(teacherUrl, user.token);
        }
    }, [studentUrl, teacherUrl]);
    
    const filterProjects = (projects) => {
        const filteredProjects = projects.filter(project => project.closed === '1' && project.projectTitle !== null);
        return filteredProjects;
    };

    const handleSearch = (event) => {
        const searchWord = event.target.value;
        setSearchTerm(searchWord);

        const newFilter = projectsData.filter((project) => {
            return project.projectTitle.includes(searchWord);
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

    if(projectsData.length === 0) {
        return <NoDataFound displayMessage="No projects available." />
    } else {
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
                    {projectsData.length !== 0 && filteredProjectsData.length === 0 
                        ? <NoDataFound displayMessage={`No projects available with this project name`} />
                        :   <div className="Cards">
                                <ProjectsList projects={filteredProjectsData} />
                            </div>
                    }
                </div>
            </div>
        );
    }
};

export default AllProjects;