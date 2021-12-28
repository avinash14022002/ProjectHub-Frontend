import React, {useState, useEffect} from 'react';
import MaterialTable from '@material-table/core';
import { makeStyles } from '@material-ui/core/styles';
import './ExistingTeachers.css';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
    },
}));

const ExistingTeachers = ({ fetchUrl, downloadUrl }) => {

    const classes = useStyles();

    const [data, setData] = useState([])
    const columns = [
        {title: "EmployeeID", field: "employeeID"},
        {title: "Password", field: "password"},
        {title: "FirstName", field: "firstName"},
        {title: "LastName", field: "lastName"},
        {title: "Department", field: "department"},
        {title: "EmailID", field: "emailId"},
        {title: "Roles", field: "roles"},
    ]

    useEffect(()=>{
        const jwtToken = JSON.parse(localStorage.getItem('login')).token;

        axios.get(fetchUrl, {
            headers: {
                "Authorization" : jwtToken
            }
        }).then((response) => {
            return response.data;
        }).then((data) => {
            setData(data)
        });
    }, [fetchUrl])

    const download=(e)=>{
        e.preventDefault()

        const jwtToken = JSON.parse(localStorage.getItem('login')).token;

        axios.get(downloadUrl, {
            headers: {
                "Authorization" : jwtToken
            },
            responseType: "blob",
        }).then((response) => {
            return response.data;
        }).then((data) => {
            fileDownload(data, "teachers.csv")
        });
    }

    return(
        <div>
            <h1 align="center" style={{margin:'20px'}} >Existing Teachers Data</h1>
            <div>
                <MaterialTable className={classes.tableContainer}
                    title="Existing Teachers Data" 
                    data={data} 
                    columns={columns}
                    
                    options={{
                        rowStyle: {
                            color: 'black'
                        },
                        headerStyle:{
                            backgroundColor: '#018be7',
                        }
                    }}
                    style={{backgroundColor:'#9A9A9A', margin:'20px'}}
                />
                
            </div>
            <div className='button'>
                <Link to = "/admin/upload-teachers">
                    <button className='uploadButton'>Upload New Data</button>
                </Link>
                <button className='downloadButton' onClick={(e)=>download(e)}>Download Data</button>
            </div>

        </div>
    );
};

export default ExistingTeachers;