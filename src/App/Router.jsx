/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */

import { Route, Routes } from 'react-router-dom';
import DashBoardPage from '../pages/DashBoard/DashBoard';
import LandingPage from '../pages/LandingPage/LandingPage';
import LoginPage from '../pages/LoginPage/LoginPage_11';
import RegisterPage from '../pages/RegisterPage/RegisterPage_28';
import ProfilePage from '../pages/ProfilePage/ProfilePage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default Router;
