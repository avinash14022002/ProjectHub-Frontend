import React from 'react';
import LandingPage from '../landing-page/LandingPage';
import SearchBar from '../../search/SearchBar';
import Filter from '../../filter/Filter';
import Card from '../../card/Card';

const Home = () => {
    return (
        <div>
            <SearchBar placeholder="Enter a Project Name..."/>
            <Filter/>
            <Card/>
            <LandingPage />
        </div>
    )
};

export default Home;