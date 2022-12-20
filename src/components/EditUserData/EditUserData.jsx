/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './EditUserData.css';
import {
  Container, Row, Col, Form,
} from 'react-bootstrap';
import ButtonPurple from '../buttons/ButtonPurple';
import ButtonPurpleOutline from '../buttons/ButtonPurpleOutline';

const defaultUserData = {
  firstName: null,
  lastName: null,
  bio: null,
  birthDate: null,
  gender: 'default',
  height: null,
  weight: null,
  weeklyGoalCal: null,
};

function EditUserData() {
  const [userData, setUserData] = useState(defaultUserData);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    console.log(event.target.name);
  };
  return (
    <Container>
      <Form className="user-data" onSubmit={handleFormSubmit}>
        <h2>Edit Profile</h2>
        <Row className="row my-3">
          <Col className="col-lg-6 col-12">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id="firstNameInput"
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
            />
          </Col>
          <Col className="col-lg-6 col-12">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              id="lastNameInput"
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Row className="row my-3">
          <Col>
            <Form.Label>Bio</Form.Label>
            <Form.Control
              id="bioInput"
              type="text"
              name="bio"
              placeholder="say something about yourself"
              value={userData.bio}
              onChange={handleInputChange}
            />
          </Col>
        </Row>

        <h2 className="mt-5">Athlete information</h2>

        <Row className="row my-3">
          <Col className="col-lg-6 col-12">
            <Form.Label>Birthdate</Form.Label>
            <Form.Control
              id="birthDateInput"
              type="date"
              name="birthDate"
              value={userData.birthDate}
              onChange={handleInputChange}
            />
          </Col>
          <Col className="col-lg-6 col-12">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              id="genderInput"
              name="gender"
              value={userData.gender}
              onChange={handleInputChange}
            >
              <option value="defualt" disabled hidden>
                Select a gender
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="notSpecified">Not-specified</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="row my-3">
          <Col className="col-lg-6 col-12">
            <Form.Label>Height (cm)</Form.Label>
            <Form.Control
              id="heightInput"
              type="number"
              name="height"
              value={userData.height}
              onChange={handleInputChange}
            />
          </Col>
          <Col className="col-lg-6 col-12">
            <Form.Label>Weight (kg)</Form.Label>
            <Form.Control
              id="weightInput"
              type="number"
              name="weight"
              value={userData.weight}
              onChange={handleInputChange}
            />
          </Col>
        </Row>

        <h2 className="weekly-goal-title mt-5">Weekly Goal</h2>
        <Row className="row my-3">
          <Col className="col-lg-6 col-12">
            <Form.Label>Weekly Calories to burn (Cal)</Form.Label>
            <Form.Control
              id="caloriesInput"
              type="number"
              name="weeklyGoalCal"
              placeholder="2,000"
              value={userData.weeklyGoalCal}
              onChange={handleInputChange}
            />
          </Col>
          <Col className="col-lg-3 col-12 mt-3 pt-3 text-center">
            <Link to="/dashboard" className="">
              <ButtonPurpleOutline
                className="btn-cancel-profile "
                text="Cancel"
                style={{ background: 'var(--black)' }}
              />
            </Link>
          </Col>
          <Col className="col-lg-3 col-12 mt-3 pt-3">
            <ButtonPurple className="btn-update-profile " text="Update Profile" />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default EditUserData;
