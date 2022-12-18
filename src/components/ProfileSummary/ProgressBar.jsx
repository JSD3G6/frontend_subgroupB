/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
import './ProgressBar.css';

function ProgressBar({ percent }) {
  return (
    <div className="progress-bar" style={{ '--width': percent }}></div>
  );
}

export default ProgressBar;
