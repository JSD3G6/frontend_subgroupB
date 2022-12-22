/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useActivity } from '../../contexts/activityContext';
import { useAuth } from '../../contexts/authContext';
import LineChart from '../LineChart/LineChart';
import ActivityAllSummary from '../ActivityAllSummary/ActivityAllSummary';
import ActivityCard from '../ActivityCard/ActivityCard';
import ProfileSummary from '../ProfileSummary/ProfileSummary';
import './item.css';
import ButtonPurple from '../buttons/ButtonPurple';
import { useLoading } from '../../contexts/loadingContext';
import * as ActAPI from '../../api/activityApi';

function ActivityList() {
  const navigate = useNavigate();
  const [active, setActive] = useState('');
  const [count, setCount] = useState(0);
  const [type, setType] = useState('');
  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [tmpList, setTmpList] = useState([]);
  const { user } = useAuth();
  const { startLoading, stopLoading } = useLoading();
  const { allActivity, getAllActivityUser } = useActivity();

  const handleClick = (event) => {
    setActive(event.target.id);
  };

  const addNewActivity = () => {
    console.log('change to page add a activity');
    navigate('/activity/create');
  };

  useEffect(() => {
    // getAllActivityUser(user?._id, page);
    const fetchNewActivity = async () => {
      try {
        const res = await ActAPI.getAllLazyLoad(user?._id, page);
        const newList = res.data.activities;
        setTmpList([...newList]);
        if (newList.length > 0) {
          setList((p) => [...p, ...newList]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        stopLoading();
      }
    };
    fetchNewActivity();
  }, [page]);

  const shouldFetch = () => {
    if (page !== 0 && tmpList.length !== 0) {
      setPage((p) => p + 1);
    }
  };
  const deleteActivityById = (id) => {
    const newActivityList = list.filter((item) => item._id !== id);
    setList(newActivityList);
  };

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      console.log('result', window.innerHeight + window.scrollY > document.body.offsetHeight + 400);
      if (window.innerHeight + window.scrollY > document.body.offsetHeight + 400 && startLoading) {
        shouldFetch();
      }
    });
    return () => window.removeEventListener('scroll', event);
  }, []);

  return (
    <div className="container-fluid mt-10">
      <div className="row">
        <div className="d-flex flex-column align-items-center col-xl-3 col-md-6 col-12 order-1 order-md-1 order-xl-1">
          <ProfileSummary />
        </div>
        <div className="mt-5 mt-md-0 d-flex flex-column align-items-center col-xl-5 col-md-12 col-12 order-3 order-md-3 order-xl-2">
          <ButtonPurple
            text="create new activity"
            className="w-100 mb-4"
            onClick={addNewActivity}
          />
          {list.map((item) => (
            <ActivityCard {...item} key={item._id} onDelete={deleteActivityById} />
          ))}
        </div>
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
      </div>
    </div>
  );
}

export default ActivityList;
