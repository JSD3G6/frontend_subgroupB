/* eslint-disable no-unused-vars */
import { useState } from 'react';
import LineChart from '../LineChart/LineChart';
import ActivityAllSummary from '../ActivityAllSummary/ActivityAllSummary';

function Statistics() {
  const [type, setType] = useState('');
  const [active, setActive] = useState('w');

  const handleClick = (event) => {
    setActive(event.target.id);
  };
  return (
    <div className="d-flex flex-column align-items-center col-xl-4 col-md-6 col-12 order-2 order-md-2 order-xl-3">
      <div className="d-flex gap-3 align-items-center">
        <div className="d-flex flex-column align-items-center">
          <h6>Distance</h6>
          <h6>0 km</h6>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h6>Time</h6>
          <h6>0 Hr</h6>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h6>Calories</h6>
          <h6>0 cal</h6>
        </div>
        <div className="d-flex flex-column align-items-center mb-2">
          <select
            className="bg-button"
            onChange={(e) => setType(e.target.value)}
            defaultValue="Select Type"
          >
            <option value="select" hidden>
              Select Type
            </option>
            <option value="bicycling">bicycling</option>
            <option value="hiking">hiking</option>
            <option value="running">running</option>
            <option value="walking">walking</option>
            <option value="swimming">swimming</option>
          </select>
          <div className="d-flex w-100">
            <button
              type="button"
              className={active === 'w' ? 'active' : 'w-100 bg-button'}
              onClick={handleClick}
              id="w"
            >
              W
            </button>
            <button
              type="button"
              className={active === 'm' ? 'active' : 'w-100 bg-button'}
              onClick={handleClick}
              id="m"
            >
              M
            </button>
            <button
              type="button"
              className={active === 'y' ? 'active' : 'w-100 bg-button'}
              onClick={handleClick}
              id="y"
            >
              Y
            </button>
          </div>
        </div>
      </div>
      <LineChart active={active} />
      <div className="activity-all-summary mb-4 mb-md-0">
        <ActivityAllSummary />
      </div>
    </div>
  );
}

export default Statistics;
