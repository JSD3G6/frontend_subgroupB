/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import {
  createContext, useContext, useState,
} from 'react';
import * as ActAPI from '../api/activityApi';
import { useAuth } from './authContext';

const ActivityContext = createContext();

function ActivityContextProvider({ children }) {
  const [allActivity, setAllActivity] = useState([]);
  const { user } = useAuth();

  const getAllActivityUser = async () => {
    try {
      const res = await ActAPI.getAllLazyLoad(user?._id);
      const data = res.data.activities;
      setAllActivity(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteActivityById = (id) => {
    const newActivityList = allActivity.filter((item) => item._id !== id);
    setAllActivity(newActivityList);
  };

  return (
    <ActivityContext.Provider
      value={{
        allActivity,
        setAllActivity,
        getAllActivityUser,
        deleteActivityById,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
}

export const useActivity = () => useContext(ActivityContext);

export default ActivityContextProvider;
