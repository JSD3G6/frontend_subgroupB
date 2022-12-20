/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
/* eslint-disable no-else-return */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  useContext, useEffect, createContext, useState,
} from 'react';
import axios from 'axios';

const Context = createContext();

const useMyContext = () => useContext(Context);

function ContextProvider({ children }) {
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('user')) || []);
  const [user, setUser] = useState({});
  const config = {
    headers: { Authorization: `Bearer ${auth.token}` },
  };

  const getUserById = async () => {
    const res = await axios.get(`http://localhost:8000/profile/${auth.userId}`, config);
    const data = res.data.profile;
    setUser(data);
  };

  const updateUserProfile = async (formData) => {
    try {
      const res = await axios.patch(`http://localhost:8000/profile/${auth.userId}`, config, formData);
      const newProfile = res.data.profile;
      setUser(newProfile);
      console.log('NEW PROFILE');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth.token) {
      getUserById();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(auth));
  }, [auth]);

  return (
    <Context.Provider value={{ auth, setAuth, user, updateUserProfile }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, useMyContext };
