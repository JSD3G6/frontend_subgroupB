/* eslint-disable import/prefer-default-export */
import axios from '../services/axios';

export const getAllLazyLoad = (userId) => axios.get(`/activity/all/${userId}`);
export const deleteActivity = (activityId) => axios.delete(`/activity/${activityId}`);
export const getActivity = (activityId) => axios.get(`/activity/${activityId}`);
