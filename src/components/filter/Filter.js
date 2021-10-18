import React from 'react';
import { MDBContainer, MDBInput} from "mdbreact";
import './Filter.css';

class Filter extends React.Component{
    state={
        radio:2
    }
    onClickType = (nr) => () => {
        this.setState({
          radio: nr
        });
    }

    onClickDepartment = (nr) => () => {
        this.setState({
          radio: nr
        });
    }

    onClickDomain = (nr) => () => {
        this.setState({
          radio: nr
        });
    }
    
    render() {
    return (
        <div className="filterDiv">
            <MDBContainer className="mt-5 Type">
                <h5>Type</h5>
                <MDBInput gap onClick={this.onClickType(1)} checked={this.state.radio===1 ? true : false} label="Hardware" type="radio"
                    id="radio1" />
                <MDBInput gap onClick={this.onClickType(2)} checked={this.state.radio===2 ? true : false} label="Software" type="radio"
                    id="radio2" />
                <MDBInput gap onClick={this.onClickType(3)} checked={this.state.radio===3 ? true : false} label="Hardware + Software" type="radio"
                    id="radio3" />   
            </MDBContainer>

            <MDBContainer className="mt-5 Department" >
            <h5>Department</h5>
                <MDBInput gap onClick={this.onClickDepartment(4)} checked={this.state.radio===4 ? true : false} label="CS/IT" type="radio"
                    id="radio4" />
                <MDBInput gap onClick={this.onClickDepartment(5)} checked={this.state.radio===5 ? true : false} label="ENTC/ELEX" type="radio"
                    id="radio5" />
                <MDBInput gap onClick={this.onClickDepartment(6)} checked={this.state.radio===6 ? true : false} label="PROD" type="radio"
                    id="radio6" />
            </MDBContainer>

            <MDBContainer className="mt-5 Domain">
                <h5>Domain</h5>
                <MDBInput gap onClick={this.onClickDomain(7)} checked={this.state.radio===7 ? true : false} label="App Development" type="radio"
                    id="radio7" />
                <MDBInput gap onClick={this.onClickDomain(8)} checked={this.state.radio===8 ? true : false} label="Web Development" type="radio"
                    id="radio8" />
                <MDBInput gap onClick={this.onClickDomain(9)} checked={this.state.radio===9 ? true : false} label="Machine Learning" type="radio"
                    id="radio9" />
            </MDBContainer>
        
            <MDBContainer className="mt-5 TeckStack">
                <h5>Tech-Stack</h5>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUnchecked"/>
                    <label class="custom-control-label" for="defaultUnchecked">HTML/CSS/JS</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultChecked"/>
                    <label class="custom-control-label" for="defaultChecked">ReactJS/Angular/Vue/Next.js</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultChecked"/>
                    <label class="custom-control-label" for="defaultChecked">NoSQLDB</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultChecked"/>
                    <label class="custom-control-label" for="defaultChecked">SQL</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultChecked"/>
                    <label class="custom-control-label" for="defaultChecked">Kotlin/Java</label>
                </div>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultChecked"/>
                    <label class="custom-control-label" for="defaultChecked">Python</label>
                </div>
            </MDBContainer>

        </div>
        );
    }
}

export default Filter;