/* eslint-disable import/prefer-default-export */
import axios from '../services/axios';

export const getAllLazyLoad = (userId) => axios.get(`/activity/all/${userId}`);
