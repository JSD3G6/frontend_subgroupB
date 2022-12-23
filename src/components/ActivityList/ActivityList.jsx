/* eslint-disable import/no-named-as-default */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */

import { useNavigate } from 'react-router-dom';

import Statistics from '../Statistics/Statistics';

import ProfileSummary from '../ProfileSummary/ProfileSummary';
import './item.css';
import ButtonPurple from '../buttons/ButtonPurple';
import ScrollLists from './Scrollist';

function ActivityList() {
  const navigate = useNavigate();

  const addNewActivity = () => {
    navigate('/activity/create');
  };

  return (
    <div className="container-fluid mt-10">
      <div className="row">
        {/* LEFT */}
        <div className="d-flex flex-column align-items-center col-xl-3 col-md-6 col-12 order-1 order-md-1 order-xl-1">
          <ProfileSummary />
        </div>
        {/* FEED-CENTER */}

        <div className="mt-5 mt-md-0 d-flex flex-column align-items-center col-xl-5 col-md-12 col-12 order-3 order-md-3 order-xl-2">
          <div className="relative w-full">
            <ButtonPurple text="create new activity" className="w-100" onClick={addNewActivity} />
          </div>
          <ScrollLists />
        </div>
        {/* STAT-RIGHT */}
        <Statistics />
      </div>
    </div>
  );
}

export default ActivityList;
