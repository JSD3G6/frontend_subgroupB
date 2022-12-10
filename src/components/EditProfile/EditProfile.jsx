/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EditAvatar from '../EditAvatar/EditAvatar';
import EditUserData from '../EdifUserData/EditUserData';
import './EditProfile.css';

function EditProfile() {
  return (
    <Container>
      <Container className="edit-profile">
        <h2 className="mt-5 mb-3 ms-5 ps-3">Edit Profile</h2>
        <Container className="mx-auto edit-profile-card">
          <Row>
            <Col className="col-lg-3 p-3 col-12 mt-5">
              <EditAvatar />
            </Col>
            <Col className="col-lg-9 p-3 col-12">
              <EditUserData />
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default EditProfile;
