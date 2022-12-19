/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import { BiCycling, BiSwim } from 'react-icons/bi';
import { FaRunning, FaWalking } from 'react-icons/fa';
import { GiHiking } from 'react-icons/gi';
import ProgressBar from '../ProgressBar/ProgressBar';
import './ActivityAllSummary.css';

function ActivityAllSummary() {
  const count = 6;
  const totalDurationMin = (700 / 60).toFixed(2);
  const percent = 75;
  return (
    <div className="activity-all-container">
      <div className="summary-container bicycling">
        <BiCycling className="activity-icon" />
        <span>{`Total: ${count} times`}</span>
        <span className="total-duration-span">{`${totalDurationMin} hours`}</span>
        <div className="acitivity-bar">
          <ProgressBar
            className="bicycling-bar"
            percent={percent}
            barColor="var(--purple)"
            barWidth="18rem"
            barHeight="0.75rem"
          />
          <span>{`${percent}%`}</span>
        </div>
      </div>
      <div className="summary-container hiking">
        <GiHiking className="activity-icon" />
        <span>{`Total: ${count} times`}</span>
        <span className="total-duration-span">{`${totalDurationMin} hours`}</span>
        <div className="acitivity-bar">
          <ProgressBar
            className="hiking-bar"
            percent={percent}
            barColor="var(--purple)"
            barWidth="18rem"
            barHeight="0.75rem"
          />
          <span>{`${percent}%`}</span>
        </div>
      </div>
      <div className="summary-container running">
        <FaRunning className="activity-icon" />
        <span>{`Total: ${count} times`}</span>
        <span className="total-duration-span">{`${totalDurationMin} hours`}</span>
        <div className="acitivity-bar">
          <ProgressBar
            className="running-bar"
            percent={percent}
            barColor="var(--purple)"
            barWidth="18rem"
            barHeight="0.75rem"
          />
          <span>{`${percent}%`}</span>
        </div>
      </div>
      <div className="summary-container swimming">
        <BiSwim className="activity-icon" />
        <span>{`Total: ${count} times`}</span>
        <span className="total-duration-span">{`${totalDurationMin} hours`}</span>
        <div className="acitivity-bar">
          <ProgressBar
            className="swimming-bar"
            percent={percent}
            barColor="var(--purple)"
            barWidth="18rem"
            barHeight="0.75rem"
          />
          <span>{`${percent}%`}</span>
        </div>
      </div>
      <div className="summary-container walking">
        <FaWalking className="activity-icon" />
        <span>{`Total: ${count} times`}</span>
        <span className="total-duration-span">{`${totalDurationMin} hours`}</span>
        <div className="acitivity-bar">
          <ProgressBar
            className="walking-bar"
            percent={percent}
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
