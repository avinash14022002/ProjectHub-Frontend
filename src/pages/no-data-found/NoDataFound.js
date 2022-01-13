import React from 'react';
import NoDataImage from "../../assets/no-data-found/noDataFound.png";
import './NoDataFound.css';

const NoDataFound = ({ props }) => {
    
    return(
        <div>
            <img className="noDataImage" src={NoDataImage} height={350} width={560} alt='No Data Found'/>
            <h1 className="messageToDisplay">{props}</h1>
        </div>
    );
};

export default NoDataFound;