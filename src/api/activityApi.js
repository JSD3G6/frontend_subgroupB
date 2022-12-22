/* eslint-disable import/prefer-default-export */
import axios from '../services/axios';

export const getAllLazyLoad = (userId, page) => axios.get(`/activity/all/${userId}?pageSize=${page}`);
export const deleteActivity = (activityId) => axios.delete(`/activity/${activityId}`);
export const getActivity = (activityId) => axios.get(`/activity/${activityId}`);
