import { createContext, useContext, useState } from 'react';

// NEBUTINA, padaro AUTOCOMPLETE
export const AuthContext = createContext({
  login({ token, email }) {},
  logout() {},
  isUserLoggedIn: false,
  token: '',
  email: '',
});

AuthContext.displayName = 'Auth-Context';

const tokenName = 'firebaseToken';

function AuthContextProvider(props) {
  // CHECKING IF TOKEN EXIST (virs state nes kodas yra sinchroninis, tdl ivykdomas pirmiausia):
  const tokenFromStorage = localStorage.getItem(tokenName);
  const emailFromStorage = localStorage.getItem('email');
  // IMPORTING AND SETTING f()

  // setting token:
  const [token, setToken] = useState(tokenFromStorage);
  const [emailVal, setEmailVal] = useState(emailFromStorage);
  const isUserLoggedIn = !!token;
  // when token is SET, token = true; if not set, then = false

  const login = ({ token, email }) => {
    //setting token val
    setToken(token);
    //seting LocalStorage:
    localStorage.setItem(tokenName, token);
    // setting email val
    setEmailVal(email);
    // seting localStorage
    localStorage.setItem('email', email);
  };
  const logout = () => {
    setToken('');
    localStorage.removeItem(tokenName);
    localStorage.removeItem('email');
  };

  // const contextValue = { // KADANGI VIENODOS, GALIME NERASYTI 2x:
  //   login: login,
  //   logout: logout,
  //   isUserLoggedIn: isUserLoggedIn,
  //   token: token,
  // };

  const contextValue = {
    login,
    logout,
    isUserLoggedIn,
    token,
    email: emailVal,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;

// custom hook pasiimti konteksta be importu:
export function useAuthCtx() {
  return useContext(AuthContext);
}
