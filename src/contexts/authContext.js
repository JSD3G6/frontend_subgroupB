/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line object-curly-newline
import { createContext, useContext, useEffect, useState } from 'react';

// ### Named Context
const AuthContext = createContext();

// ### Create HigherOrder Component : Context Wrapper

function AuthContextProvider({ children }) {
  // ## SHARED DATA
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  // ## EFFECT HOOK
  useEffect(() => {}, []);

  // ## SHARED LOGIC
  // # AUTH
  const login = async (data) => {};
  const logout = async (data) => {};
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
  return <AuthContext.Provider value={shared}>{children}</AuthContext.Provider>;
}

// ### CustomHook
export const useAuth = () => useContext(AuthContext);

// ### Export Named for call later
export { AuthContext };

// ### Export HOC for Wrapper
export default AuthContextProvider;
