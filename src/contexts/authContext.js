/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';

// ### Named Context
const AuthContext = createContext();

// ### Create HigherOrder Component : Context Wrapper

function AuthContextProvider({ children }) {
  // ## SHARED DATA & LOGIC(FUNCTION)
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

// ### CustomHook
export const useAuth = () => useContext(AuthContext);

// ### Export Named for call later
export { AuthContext };

// ### Export HOC for Wrapper
export default AuthContextProvider;
