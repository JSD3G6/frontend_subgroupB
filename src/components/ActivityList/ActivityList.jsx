/* eslint-disable import/no-named-as-default */
/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/authContext';

import Statistics from '../Statistics/Statistics';
import ActivityCard from '../ActivityCard/ActivityCard';
import ProfileSummary from '../ProfileSummary/ProfileSummary';
import './item.css';
import ButtonPurple from '../buttons/ButtonPurple';
import { useLoading } from '../../contexts/loadingContext';
import * as ActAPI from '../../api/activityApi';

function ActivityList() {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [list, setList] = useState([]);
  const [tmpList, setTmpList] = useState([]);
  const { user } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const addNewActivity = () => {
    navigate('/activity/create');
  };

  useEffect(() => {
    // getAllActivityUser(user?._id, page);
    const fetchNewActivity = async () => {
      try {
        startLoading();
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
    console.log('NEW FETCH');
  }, [page]);

  const shouldFetch = () => {
    if (page !== 0 && tmpList.length !== 0) {
      setPage((p) => p + 1);
    }
  };
  const deleteActivityById = (id) => {
    const newActivityList = list.filter((item) => item._id !== id);
    setList(newActivityList);
    toast.success('Delete Succesfully!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      // console.log('result', window.innerHeight + window.scrollY > document.body.offsetHeight + 400);
      if (window.innerHeight + window.scrollY > document.body.offsetHeight + 400 && startLoading) {
        shouldFetch();
      }
    });
    return () => window.removeEventListener('scroll', event);
  }, []);

  return (
    <div className="container-fluid mt-10">
      <div className="row">
        {/* LEFT */}
        <div className="d-flex flex-column align-items-center col-xl-3 col-md-6 col-12 order-1 order-md-1 order-xl-1">
          <ProfileSummary />
        </div>
        {/* FEED-CENTER */}
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
        {/* STAT-RIGHT */}
        <Statistics />
      </div>
    </div>
  );
}

export default ActivityList;
