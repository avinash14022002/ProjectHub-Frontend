import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import './Card.css';

const Card = () => {
  return (
    <MDBCard className="card">
      <MDBCardHeader><h5>Title</h5></MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Domain</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content. Lorem Ipsum hill place station road to heaven jungle. River solitaire monkey eaarth you.</MDBCardText>
        <MDBBtn href=''>Go somewhere</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Card;