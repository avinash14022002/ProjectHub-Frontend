import React from 'react';
import { MDBCard, MDBCardBody} from 'mdb-react-ui-kit';
import './ProjectDetails.css';

export default function ProjectDetails() { 
  return (
    <MDBCard className="card">
      <MDBCardBody>
        <div className="MainContainer">
            <div className="ProjectPreview">
                <img className="ProjectPreviewImg" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" alt="Project Preview"/>
            </div>

            <div className="ProjectData">
                <h1 className="ProjectTitle">Project Hub</h1>
                <div>
                  <p className="ProjectDomain">Domain : <button className="ProjectDomainName">Education</button></p>
                </div>
                
                <h3 className="ProjectTechnology">Technology : </h3>
                <div>
                  <button className="ProjectTechnologyTag">ReactJS</button>
                  <button className="ProjectTechnologyTag">Java</button>
                  <button className="ProjectTechnologyTag">SpringBoot</button>
                  <button className="ProjectTechnologyTag">JavaScript</button>
                  <button className="ProjectTechnologyTag">PostgreSQL</button>
                </div>

                <button className="PaperButton">Paper <i class="bi bi-download"></i> </button>
                <button className="PPTButton">PPT <i class="bi bi-download"></i> </button>
            </div>
        </div>
        <div className="DescriptionContainer">
          <p className="ProjectDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p> 
        </div>

        <div class="GuidedContainer">
          <h2><b>Guided By :</b></h2>
          <div className="GuideDetails">
            <h5><i class="bi bi-person-square"></i> Ashwini Shingare</h5>
          </div>
          
        </div>

        <div class="ContributedByContainer">
          <h2><b>Contributed By :</b></h2>
          <ul className="list-unstyled">
            <li><h5><i class="bi bi-person-square"></i> Anubhav Pabby</h5></li>
            <li><h5><i class="bi bi-person-square"></i> Anjali Asolkar</h5></li>
            <li><h5><i class="bi bi-person-square"></i> Avinash Vijayvargiya</h5></li>
            <li><h5><i class="bi bi-person-square"></i> Dhanshree Pajankar</h5></li>
          </ul>
        </div>        
      </MDBCardBody>
    </MDBCard>
  );
}