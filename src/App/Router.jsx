/* eslint-disable linebreak-style */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoardPage from '../pages/DashBoard/DashBoard';
import LandingPage from '../pages/LandingPage/LandingPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
// import LoginPage from '../pages/LoginPage/LoginPage';
// import RegisterPage from '../pages/RegisterPage/RegisterPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
