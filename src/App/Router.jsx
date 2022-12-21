/* eslint-disable import/no-named-as-default-member */
/* eslint-disable linebreak-style */

import { Route, Routes } from 'react-router-dom';
import DashBoardPage from '../pages/DashBoard/DashBoard';
import LandingPage from '../pages/LandingPage/LandingPage';
import LoginPage from '../pages/LoginPage/LoginPage_11';
import RegisterPage from '../pages/RegisterPage/RegisterPage_28';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import { useAuth } from '../contexts/authContext';
import ProfileSummaryPage from '../pages/ProfilePage/ProfileSummaryPage';
// import LoginPage from '../pages/LoginPage/LoginPage';
// import RegisterPage from '../pages/RegisterPage/RegisterPage';

function Router() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<DashBoardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default Router;
