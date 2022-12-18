/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import './ProfileSummary.css';

function ProfileSummary() {
  const defaultAvatar = 'https://images.unsplash.com/photo-1626245550585-0b8d640da77f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80';

  const [imageSrc, setImageSrc] = useState(defaultAvatar);
  const [imageAlt, setImageAlt] = useState('profile');

  const getData = (src, alt) => {
    setImageSrc(src);
    setImageAlt(alt);
  };

  return (
    <div className="profile-summary-container">
      <div className="edit-avatar-container">
        <Link className="link-edit-profile" to="/profile">
          <img className="avatar" src={imageSrc || defaultAvatar} alt={imageAlt} />
        </Link>
      </div>
      <div className="profile-box">
        <div className="profile-info">
          <h1>
            <span>firstName</span>
            <span>lastName</span>
          </h1>
          <div className="profile-details">
            <div className="box weight-box">
              <p>80 kg</p>
              <p className="box-title">Weight</p>
            </div>
            <div className="box height-box">
              <p>170 cm</p>
              <p className="box-title">Height</p>
            </div>
            <div className="box age-box">
              <p>25 yrs</p>
              <p className="box-title">Age</p>
            </div>
          </div>
        </div>
      </div>
      <div className="weekly-goal">
        <div className="goal-text">
          <span>Weekly Goal (Cal)</span>
          <span className="cal">2,000/4,000</span>
        </div>

        <ProgressBar className="progress-bar" percent={90} />
      </div>
    </div>
  );
}

export default ProfileSummary;
