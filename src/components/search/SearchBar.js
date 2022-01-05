import React, { useState } from 'react';
import './SearchBar.css';
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ projectsData, setSearchProjects }){
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedProjects, setSearchedProjects] = useState([]);
    
    // const handleSearch = () => {
    //     // event.preventDefault();

    //     const search = searchTerm.trim();
    //     console.log(search, searchTerm);

        
    //     // if the search term is empty
    //     if(search === '') {
    //         setSearchedProjects(projectsData);
    //         setSearchProjects(projectsData);
    //     } else {
    //         const searchedProjects = projectsData.filter((project) => {
    //             if(project.projectTitle.toLowerCase().includes(search.toLowerCase())) {
    //                 return project;
    //             }
    //         });

    //         console.log(projectsData);

    //         console.log(searchedProjects);

    //         setSearchedProjects(searchedProjects);
    //     }
    // }

    // const handleSearch = (event) => {
    //     const searchWord = event.target.value;
    //     setSearchTerm(searchWord);
        
    //     const newFilter = projectsData.filter((project) => {
    //         return project.projectTitle.toLowerCase().includes(searchWord.toLowerCase());
    //     });
        
    //     console.log(newFilter);
        
    //     if (searchTerm === "") {
    //       setSearchedProjects([]);
    //       setSearchProjects([]);
    //     } else {
    //       setSearchedProjects(newFilter);
    //       setSearchProjects(newFilter);
    //     }
    //   };
    
    // const clearInput = () => {
    //     setSearchedProjects([]);
    //     setSearchProjects([]);
    //     setSearchTerm("");
    // };

    const handleSearch = (event) => {
        const searchWord = event.target.value;
        setSearchTerm(searchWord);
    }
    
    return (
        <div className="search">
            <div className="searchInputs">
                <input 
                    type="text" 
                    placeholder="Search Projects..." 
                    onChange={handleSearch}
                />
                <div className="searchIcon">
                    {/* 
                     */}
                </div>
                {/* <button 
                    className="searchIcon"
                    onClick={searchProjects}
                >
                   <SearchIcon color="white" />     
                </button> */}
            </div>
        </div>
    )
}

export default SearchBar;