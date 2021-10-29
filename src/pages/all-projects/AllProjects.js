import React from 'react';
import SearchBar from '../../components/search/SearchBar';
import Filter from '../../components/filter/Filter';
import ProjectsList from '../../components/projects-list/ProjectsList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { Search, FilterProjects, Projects } from './AllProjectsElements';


const AllProjects = () => { 
    return (
        <Container fluid="sm">
            <Row className="justify-content-md-center">
                <SearchBar placeholder="Enter a Project Name..." />
            </Row>
            <Row>
                <Col sm={2}>
                    <Filter />
                </Col>
                <Col lg={6}>
                    <ProjectsList url="http://localhost:8080/api/studentProject" />
                </Col>
            </Row>
        </Container>
    );
};

export default AllProjects;