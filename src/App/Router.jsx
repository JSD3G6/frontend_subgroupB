import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DashBoardPage from '../pages/DashBoard';
import LandingPage from '../pages/LandingPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
