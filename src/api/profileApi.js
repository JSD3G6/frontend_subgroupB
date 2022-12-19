import axios from '../services/axios';

export const getProfile = (userId) => axios.get(`/profile/${userId}`);
export const updateProfile = (userId, formData) => axios.patch(`/profile/${userId}`, formData);
