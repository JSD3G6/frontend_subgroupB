/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import { BiCycling } from 'react-icons/bi';
import ProgressBar from '../ProgressBar/ProgressBar';
import './ActivityAllSummary.css';

function ActivityAllSummary() {
  const count = 8;
  const totalDurationMin = (400 / 60).toFixed(2);
  const percent = 50;
  return (
    <div className="activity-all-container">
      <div className="summary-container">
        <BiCycling className="activity-icon" />
        <span>{`Total: ${count} times`}</span>
        <span className="total-duration-span">{ `${totalDurationMin} hours`}</span>
        <div className="acitivity-bar">
          <ProgressBar
            className="bicycling-bar"
            percent={50}
            barColor="var(--purple)"
            barWidth="18rem"
            barHeight="0.75rem"
          />
          <span>{`${percent}%`}</span>
        </div>
      </div>
    </div>
  );
}

export default ActivityAllSummary;
