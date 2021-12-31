import React from 'react';
import { useHistory } from 'react-router-dom';
import ErrorImage from "../../assets/404-error/404_error.png";
import './ResourceNotFound.css';

const ResourceNotFound = () => {
    const history = useHistory();

    return (
        <div>
            <img className="errorImage" src={ErrorImage} height={600} width={600} alt='404 Resource Not Found'/>
            <button className="btn-grad" onClick={history.goBack}>Back</button>
        </div>
    );
};

export default ResourceNotFound;