/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import Joi from 'joi';
import { useState, useRef } from 'react';
import axios from 'axios';
import './register.css';
import logoImg from '../../images/user-Reg.png';

function RegisterPage() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmpassword] = useState('');
  const [birthDate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/auth/register', {
        firstName,
        lastName,
        password,
        email,
        confirmPassword,
        birthDate,
        gender,
        weight,
        height,
      });
      res.data && window.location.replace('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="container mt-3 p-4 text-white bg-black w-50">
        <form onSubmit={handleSubmitForm} className="row g-3 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={logoImg} className="img-fluid img-user" alt="logo" />
            <h2>Register</h2>
          </div>

          <div className="col-md-6 col-12 d-flex flex-md-row flex-column w-75 gap-3">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Firstname"
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              className="form-control text-center"
              placeholder="Lastname"
              required
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <input
              type="email"
              className="form-control text-center w-75"
              id="inputAddress"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <input
              type="password"
              className="form-control text-center w-75"
              id="inputAddress"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <input
              type="password"
              className="form-control text-center w-75"
              id="inputAddress"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </div>
          <div className="col-md-6 col-12 d-flex w-75 gap-3 flex-md-row flex-column">
            <input
              type="date"
              className="form-control text-center text-white"
              placeholder="Birthdate"
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
            <select onChange={(e) => setGender(e.target.value)} className="form-select text-white" aria-label="Default select example" defaultValue="Gender" required>
              <option value="Gender" disabled hidden>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="not-specified">Not-Specified</option>
            </select>
          </div>
          <div className="col-md-6 col-12 d-flex w-75 gap-3 flex-md-row flex-column">
            <input
              type="number"
              className="form-control text-center"
              placeholder="Weight(KG)"
              required
              onChange={(e) => setWeight(e.target.value)}
            />
            <input
              type="number"
              className="form-control text-center"
              placeholder="Height(CM)"
              required
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="col-12  d-flex align-items-center justify-content-center">
            <button type="submit" className="btn-sign w-75 mt-3">
              Submit
            </button>
          </div>
          <div className="col-12 d-flex align-items-center justify-content-center">
            <Link to="/" className="text-white">Back To Home</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default RegisterPage;
