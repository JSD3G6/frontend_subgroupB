/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './EditUserData.css';
import {
  Container, Row, Col, Form,
} from 'react-bootstrap';
import ButtonPurple from '../buttons/ButtonPurple';
import ButtonPurpleOutline from '../buttons/ButtonPurpleOutline';

function EditUserData() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Form className="user-data" onSubmit={handleSubmitForm}>
        <h2>Edit Profile</h2>
        <Row className="row my-3">
          <Col className="col-lg-6 col-12">
            <Form.Label>First Name</Form.Label>
            <Form.Control id="firstNameInput" type="text" />
          </Col>
          <Col className="col-lg-6 col-12">
            <Form.Label>Last Name</Form.Label>
            <Form.Control id="lastNameInput" type="text" />
          </Col>
        </Row>
        <Row className="row my-3">
          <Col>
            <Form.Label>Bio</Form.Label>
            <Form.Control
              id="bioInput"
              type="text"
              placeholder="say something about yourself"
            />
          </Col>
        </Row>

        <h2 className="mt-5">Athlete information</h2>

        <Row className="row my-3">
          <Col className="col-lg-6 col-12">
            <Form.Label>Birthdate</Form.Label>
            <Form.Control id="birthDateInput" type="date" />
          </Col>
          <Col className="col-lg-6 col-12">
            <Form.Label>Gender</Form.Label>
            <Form.Select id="genderInput">
              <option>Female</option>
              <option>Male</option>
              <option>Gender-neutral</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="row my-3">
          <Col className="col-lg-6 col-12">
            <Form.Label>Height (cm)</Form.Label>
            <Form.Control id="heightInput" type="number" />
          </Col>
          <Col className="col-lg-6 col-12">
            <Form.Label>Weight (kg)</Form.Label>
            <Form.Control id="weightInput" type="number" />
          </Col>
        </Row>

        <h2 className="weekly-goal-title mt-5">Weekly Goal</h2>
        <Row className="row my-3">
          <Col className="col-lg-6 col-12">
            <Form.Label>Weekly Calories to burn (Cal)</Form.Label>
            <Form.Control id="caloriesInput" type="number" placeholder="2,000" />
          </Col>
          <Col className="col-lg-3 col-12 mt-3 pt-3 text-center">
            <Link to="/dashboard" className="">
              <ButtonPurpleOutline className="btn-cancel-profile " text="Cancel" style={{ background: 'var(--black)' }} />
            </Link>
          </Col>
          <Col className="col-lg-3 col-12 mt-3 pt-3 d-flex align-items-center justify-content-center">
            <ButtonPurple className="btn-update-profile" text="Update Profile" />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default EditUserData;
