import React, {useState} from 'react';
import MaterialTable from '@material-table/core';
import { makeStyles } from '@material-ui/core/styles';
import XLSX from 'xlsx';
import './UploadTeachers.css';
import axios from 'axios';

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

const EXTENSIONS = ['xlsx', 'xls', 'csv']

const UploadTeachers = ({ uploadUrl }) => {
    const [colDefs, setColDefs] = useState();
    const [data, setData] = useState();
    const classes = useStyles();

    const getExention = (file) => {
        const parts = file.name.split('.');
        const extension = parts[parts.length - 1];
        return EXTENSIONS.includes(extension); // return boolean
    }

    const convertToJson = (headers, data) => {
        const rows = [];
        data.forEach(row => {
          let rowData = {};
          row.forEach((element, index) => {
            rowData[headers[index]] = element;
          })
          rows.push(rowData);
        });
        return rows;
    } 

    const importExcel = (e) => {
        const file = e.target.files[0];
        setFileSelected(e.target.files[0]);

        const reader = new FileReader();
        reader.onload = (event) => {
            //parse data
            const bstr = event.target.result;
            const workBook = XLSX.read(bstr, { type: "binary" });

            //get first sheet
            const workSheetName = workBook.SheetNames[0];
            const workSheet = workBook.Sheets[workSheetName];

            //convert to array
            const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
            
            const headers = fileData[0];
            const heads = headers.map(head => ({ title: head, field: head }));
            setColDefs(heads);
            
            //removing header
            fileData.splice(0, 1);
            
            setData(convertToJson(headers, fileData));
        }

        if (file) {
            if (getExention(file)) {
              reader.readAsBinaryString(file);
            }
            else {
              alert("Invalid file input, Select Excel, CSV file");
            }
        } 
        else {
            setData([]);
            setColDefs([]);
        }
    }

    const [fileSelected, setFileSelected] = useState('');

    const handleUpload = () => {
        let formData = new FormData();
        formData.append("file", fileSelected);

        const jwtToken = JSON.parse(sessionStorage.getItem('login')).token;

        axios.post(uploadUrl, formData, {
            headers: {
                "Authorization" : jwtToken
            }
        })
    }

    return(
       
        <div>
            <h1 align="center" style={{margin:'20px'}} >Upload Teachers Data</h1>
            <h4 align="center">Import Data from Excel, CSV</h4>
            <input style={{margin:'20px'}} type="file" onChange={importExcel}/>
            <div>
                <MaterialTable className={classes.tableContainer}
                    title="New Teachers Data" 
                    data={data} 
                    columns={colDefs}
                    
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
                <button className='saveButton' onClick={handleUpload}>Upload</button>
            </div>
            
        </div>
    );
    
};

export default UploadTeachers;