import React from 'react';
import NoDataImage from "../../assets/no-data-found/noDataFound.png";
import './NoDataFound.css';

const NoDataFound = ({ displayMessage }) => {
    
    return(
        <div>
            <img className="noDataImage" src={NoDataImage} height={350} width={560} alt='No Data Found'/>
            <h1 className="messageToDisplay">{displayMessage}</h1>
        </div>
    );
};

export default NoDataFound;