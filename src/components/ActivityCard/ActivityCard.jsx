/* eslint-disable */
import { useNavigate } from 'react-router-dom';
import * as ActAPI from '../../api/activityApi';
import { useLoading } from '../../contexts/loadingContext';
import './ActivityCard.css';
import ActivityImage from '../../images/activitycard-img.png';
import Edit from '../../images/edit.png';
import Delete from '../../images/delete.png';

function ActivityCard({ title, dateTime, durationMin, distanceKM, type, details, _id, onDelete }) {
  const { startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();
  const date = dateTime.split('T')[0];

  const editActivity = async () => {
    startLoading();
    await ActAPI.getActivity(_id);      
    navigate(`/activity/edit/${_id}`);    
    stopLoading();
  };

  const deleteActivity = async () => {
    if (window.confirm('Are you sure to delete ?')) {
      startLoading();
      await ActAPI.deleteActivity(_id);
      onDelete(_id);
      stopLoading();
    }
  };  
  return (
    <div className="container-fluid bg-card mb-3">
      <div className="row">
        <div className="col-sm-4 col-12">
          <img className="img-fluid img" src={ActivityImage} alt="" />
        </div>
        <div className="col-sm-8 col-12 bg-card text-white">
          <div className="fw-bolder d-flex justify-content-between">
            <h3 className="p-2">{title}</h3>
            <div className="d-flex justify-content-between p-2">
              <img src={Edit} alt="edit" className="img-edit p-2" onClick={editActivity} />
              <img src={Delete} alt="delete" className="img-edit p-2" onClick={deleteActivity} />
            </div>
          </div>
          <div className="ActC-info d-flex ">
            <div>
              <p className="ActC-date p-2">Date : {date}</p>
              <p className="ActC-type p-2">Type : {type}</p>
            </div>
            <div>
              <p className="ActC-distance p-2">Distance : {distanceKM} km.</p>
              <p className="ActC-Duration p-2">Duration : {durationMin} min.</p>
            </div>
          </div>
          <p className="ActC-shered"> {details}</p>
        </div>
      </div>
    </div>
  );
}
export default ActivityCard;
