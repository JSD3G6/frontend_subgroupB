/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line object-curly-newline
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as AuthAPI from '../api/authApi'; // {login: (data)=> {}, register: (data)=>}
import * as ProfileAPI from '../api/profileApi';
import { setAccessToken, getAccessToken, removeAccessToken } from '../services/localStorage';

// ### Named Context ใช้ 2 ที่
const AuthContext = createContext();

// ### Create HigherOrder Component : Context Wrapper
function AuthContextProvider({ children }) {
  // ## SHARED DATA
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const navigate = useNavigate();

  // ## EFFECT HOOK
  useEffect(() => {
    console.log('LOG IN USE EFFECT');
    const fetchMe = async () => {
      // Send API to get Profile as USER

      try {
        console.log('TRY TO FETCH ME');
        const response = await ProfileAPI.getMe();
        const fetchedUser = response.data.user;
        // 1 setUser
        setUser(fetchedUser);
        // 2 navigate
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    };

    // เช็คว่ามี token ไหม
    // ถ้ามี ส่ง token ไปขอ profile
    // ถ้าไม่มี ก็ไม่ต้องทำอะไร / setUser(null)
    const token = getAccessToken();
    if (token) {
      fetchMe();
    }
  }, []);

  console.log('GLOBAL', user);
  // console.log('CTX');
  // ## SHARED LOGIC
  // # AUTH
  const login = async (data) => {
    try {
      // API : REQ->RES
      const response = await AuthAPI.login(data); // axios.post('/auth/login',
      const { user: userObj, token } = response.data;
      // #1 SET USER ==> Trigger Route
      setUser(userObj);

      // #2 SET TOKEN
      setAccessToken(token);

      // #3 Navigate Path
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    removeAccessToken();
    setUser(null);
    navigate('/');
    // removeToken
    // navigate --> landing page ('/')
    // setUser = null
  };
  const register = async (data) => {};
  // # PROFILE
  const getUserProfile = async () => {};
  const updateUserProfile = async (data) => {};

  // # Bundle Shared Value,Logic in Object
  const shared = {
    user,
    initialLoading,
    login,
    logout,
    register,
    getUserProfile,
    updateUserProfile,
  };
  // ที่ที่ 1 : ใช้ตั้ง Provider
  return <AuthContext.Provider value={shared}>{children}</AuthContext.Provider>;
}

// ### CustomHook
export const useAuth = () => useContext(AuthContext);

// ที่ที่ 2 : ใช้กัับ Consumer
// ### Export Named for call later
export { AuthContext };

// ### Export HOC for Wrapper
export default AuthContextProvider;
