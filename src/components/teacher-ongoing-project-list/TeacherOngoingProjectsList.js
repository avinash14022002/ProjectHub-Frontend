import React, { useState, useEffect } from 'react';
import TeacherOngoingProjectCard from '../teacher-ongoing-project-card/TeacherOngoingProjectCard';
import Box from '@mui/material/Box';

const TeacherOngoingProjectsList = ({ ongoingProjects }) => {  
    const [listOfOngoingProjects, setListOfOngoingProjects] = useState([]);

    useEffect(() => {
        setListOfOngoingProjects(ongoingProjects);
    }, [ongoingProjects]);
   
    const listItems = listOfOngoingProjects.map((project) =>
        <li key={project.projectId.toString()}>
            <TeacherOngoingProjectCard projectData={project} />
        </li>
    );
    
    return (
        <div style={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'grid',
                    columnGap: 0,
                    rowGap: 2,
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    // padding: '0 0 288px 288px'
                    paddingTop: '0px',
                    paddingRight: '200px',
                    paddingBottom: '0px',
                    paddingLeft: '200px'
                }}
            >
                {listItems}
            </Box>
    </div>
    );
};

export default TeacherOngoingProjectsList;