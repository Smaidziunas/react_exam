import { createContext, useContext, useState } from 'react';

// NEBUTINA, padaro AUTOCOMPLETE
export const AuthContext = createContext({
  login(token) {},
  logout() {},
  isUserLoggedIn: false,
  token: '',
});

AuthContext.displayName = 'Auth-Context';

const tokenName = 'firebaseToken';

function AuthContextProvider(props) {
  // CHECKING IF TOKEN EXIST (virs state nes kodas yra sinchroninis, tdl ivykdomas pirmiausia):
  const tokenFromStorage = localStorage.getItem(tokenName);
  // IMPORTING AND SETTING f()

  // setting token:
  const [token, setToken] = useState(tokenFromStorage);
  const isUserLoggedIn = !!token;
  // when token is SET, token = true; if not set, then = false

  const login = (argToken) => {
    setToken(argToken);
    //seting LocalStorage:
    localStorage.setItem(tokenName, argToken);
  };
  const logout = () => {
    setToken('');
    localStorage.removeItem(tokenName);
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
