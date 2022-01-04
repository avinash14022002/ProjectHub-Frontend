import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from "react-multi-date-picker";
import Box from '@mui/material/Box';
import { Form } from 'react-bootstrap';
import "react-multi-date-picker/styles/backgrounds/bg-gray.css";
import './TeacherCreateProject.css';

const TeacherCreateProject = ({ url }) => { 
    const [formValues, setFormValues] = useState([{ grNo: ""}]);

    const [academicYear, setAcademicYear] = useState('');
    const [semester, setSemester] = useState('');
    const [deadline, setDeadline] = useState(new Date());

    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const [division, setDivision] = useState('');
    const [groupNo, setGroupNo] = useState('');

    const [student1ID, setStudent1ID] = useState('');
    const [student2ID, setStudent2ID] = useState('');
    const [student3ID, setStudent3ID] = useState('');
    // const [student4ID, setStudent4ID] = useState('');
    // const [student5ID, setStudent5ID] = useState('');
    
    const projectInfo = academicYear + '#' + semester + '#' + year + '-' + branch + '-' + division + '-' + groupNo ;

    const handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    const student4ID = formValues[0] && formValues[0].grNo;
    const student5ID = formValues[1] && formValues[1].grNo;
    
    const addFormFields = () => {
        setFormValues([...formValues, { grNo: ""}]);
    }
    
    const removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
    }

    const [props, setProps] = useState({ 
        format: "YYYY-MM-DD",
        onChange:(date)=>setDeadline(date)
    });

    const postData = () => {
        const user = JSON.parse(localStorage.getItem('login'));

        axios.post(url, {
            guideID: user.userData.userNo,
            projectInfo,
            student1ID,
            student2ID,
            student3ID,
            student4ID,
            student5ID,
            deadline: deadline.toString()
        }, {
            headers : {
                "Authorization" : user.token
            }
        });
    }

    return (
        <div className="MainContainerCreateProject">
            <div className="AddInfoLine1">
                <h1 className="PageTitle"><b>Create Projects</b></h1>
                <Box
                    sx={{
                    display: 'grid',
                    columnGap: 0,
                    rowGap: 2,
                    gridTemplateColumns: 'repeat(3, 0.2fr)',
                }}>
                    <Form.Select aria-label="Default select example" style={{width:'250px', height:'50px'}}
                        onChange={(e)=>setAcademicYear(e.target.value)}>
                        <option style={{color:'black'}}>Academic Year</option>
                        <option style={{color:'black'}} value="2020-21">2020-21</option>
                        <option style={{color:'black'}} value="2021-22">2021-22</option>
                        <option style={{color:'black'}} value="2022-23">2022-23</option>
                        <option style={{color:'black'}} value="2023-24">2023-24</option>
                        <option style={{color:'black'}} value="2024-25">2024-25</option>
                        <option style={{color:'black'}} value="2025-26">2025-26</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example" style={{width:'250px'}}
                        onChange={(e)=>setSemester(e.target.value)}
                    >
                        <option style={{color:'black'}}>Semester</option>
                        <option style={{color:'black'}} value="Sem 1">Sem 1</option>
                        <option style={{color:'black'}} value="Sem 2">Sem 2</option>
                    </Form.Select>

                    <DatePicker 
                        {...props} 
                        onPropsChange={setProps} 
                        className="bg-gray"
                        placeholder='Deadline'
                        style={{
                            backgroundColor: "aliceblue",
                            height: "48px",
                            borderRadius: "3px",
                            fontSize: "16px",
                            padding: "3px 10px",
                            color: "red"
                        }}
                    />
                </Box>
            </div>

            <div className="AddInfoLine2">
                <Box
                    sx={{
                    display: 'grid',
                    columnGap: 0,
                    rowGap: 2,
                    gridTemplateColumns: 'repeat(4, 0.2fr)',
                    }}
                    >
                    <Form.Select aria-label="Default select example" style={{width:'250px', height:'50px'}}
                        onChange={(e)=>setYear(e.target.value)}
                    >
                        <option style={{color:'black'}}>Year</option>
                        <option style={{color:'black'}} value="FY">FY</option>
                        <option style={{color:'black'}} value="SY">SY</option>
                        <option style={{color:'black'}} value="TY">TY</option>
                        <option style={{color:'black'}} value="BTech">BTech</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example" style={{width:'250px'}}
                        onChange={(e)=>setBranch(e.target.value)}
                    >
                        <option style={{color:'black'}}>Branch</option>
                        <option style={{color:'black'}} value="CS">CS</option>
                        <option style={{color:'black'}} value="IT">IT</option>
                        <option style={{color:'black'}} value="ENTC">ENTC</option>
                        <option style={{color:'black'}} value="EXTC">EXTC</option>
                        <option style={{color:'black'}} value="INDUS">INDUS</option>
                        <option style={{color:'black'}} value="PROD">PROD</option>
                        <option style={{color:'black'}} value="AI">AI</option>
                        <option style={{color:'black'}} value="MECH">MECH</option>
                        <option style={{color:'black'}} value="CHEM">CHEM</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example" style={{width:'250px'}}
                        onChange={(e)=>setDivision(e.target.value)}
                    >
                        <option style={{color:'black'}}>Division</option>
                        <option style={{color:'black'}} value="A" >A</option>
                        <option style={{color:'black'}} value="B">B</option>
                        <option style={{color:'black'}} value="C">C</option>
                        <option style={{color:'black'}} value="D">D</option>
                        <option style={{color:'black'}} value="E">E</option>
                        <option style={{color:'black'}} value="F">F</option>
                        <option style={{color:'black'}} value="G">G</option>
                        <option style={{color:'black'}} value="H">H</option>
                        <option style={{color:'black'}} value="I">I</option>
                    </Form.Select>
                    <input aria-label="Default select example"  placeholder='Group No.' style={{width:'250px', color:"black"}} type="number" min="1"
                        onChange={(e)=>setGroupNo(e.target.value)}
                    ></input>
                </Box>
            </div>
            
            <form>
                <div>
                    <div className="student1">
                        <h4 className="student1Title">Student 1 Gr. no :</h4>
                        <input style={{ color: 'black'}} className="student1GrNo" type="text"
                            name="grNo"
                            label="Gr No."
                            onChange={(e)=>setStudent1ID(e.target.value)}
                        />
                    </div>

                    <div className="student2">
                        <h4 className="student2Title">Student 2 Gr. no :</h4>
                        <input style={{ color: 'black'}} className="student2GrNo" type="text"
                            name="grNo"
                            label="Gr No."
                            onChange={(e)=>setStudent2ID(e.target.value)}
                        />
                    </div>

                    <div className="student3">
                        <h4 className="student3Title">Student 3 Gr. no :</h4>
                        <input style={{ color: 'black'}} className="student3GrNo" type="text"
                            name="grNo"
                            label="Gr No."
                            onChange={(e)=>setStudent3ID(e.target.value)}
                        />
                    </div>

                </div>
                {formValues.map((element, index)=>(
                    <div className="studentMapForm" style={{marginTop:'160px'}} key={index}>
                    <h4 className="studentMapFormTitle">Student {index+4} Gr. no :</h4>
                    <input style={{ color: 'black'}} className="studentMapFormGrNo" type="text"
                        name="grNo"
                        label="Gr No."
                        value={element.grNo || ""}
                        onChange={event => handleChange(index, event)}
                    />
            
                    {
                        formValues.length > 0 && 
                        index ?
                        <i style={{marginLeft:'520px'}} className="bi bi-dash-circle fa-2x" onClick={() => removeFormFields(index)}></i> 
                        : null
                    }
                    </div>
                ))}
                {
                    formValues.length < 2 && 
                    <i style={{ marginLeft:'900px'}} className="bi bi-plus-circle fa-2x" onClick={() => addFormFields()}></i>
                }
                
                <button className="saveButton"
                    onClick={(e)=>{
                        e.preventDefault();

                        const confirmBox = window.confirm(
                            "Do you want to submit data ?"
                        )
                        if(confirmBox === true){
                            postData();
                        }
                    }}
                >Save</button>
                <br/>
            </form>
        </div>
    );
};

export default TeacherCreateProject;