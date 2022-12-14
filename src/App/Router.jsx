/* eslint-disable linebreak-style */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoardPage from '../pages/DashBoard';
import LandingPage from '../pages/LandingPage';
<<<<<<< HEAD
// import LoginPage from '../pages/LoginPage/LoginPage';
// import RegisterPage from '../pages/RegisterPage/RegisterPage';
=======
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
>>>>>>> fd9057ba0d4ae54ff71d4277dcf0a83a0d875d54

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
<<<<<<< HEAD
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
=======
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
>>>>>>> fd9057ba0d4ae54ff71d4277dcf0a83a0d875d54
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
