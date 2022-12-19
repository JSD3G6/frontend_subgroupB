/* eslint-disable linebreak-style */
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from '../contexts/authContext';

import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
