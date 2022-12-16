import { createContext, useContext, useState } from 'react';

// NEBUTINA, padaro AUTOCOMPLETE
export const AuthContext = createContext({
  login(token) {},
  logout() {},
  isUserLoggedIn: false,
});

AuthContext.displayName = 'Auth-Context';

function AuthContextProvider(props) {
  // IMPORTING AND SETTING f()

  // setting token:
  const [token, setToken] = useState('');
  const isUserLoggedIn = !!token;
  // when token is SET, token = true; if not set, then = false

  const login = (argToken) => {
    setToken(argToken);
  };
  const logout = () => {
    setToken('');
  };

  // const contextValue = { // KADANGI VIENODOS, GALIME NERASYTI 2x:
  //   login: login,
  //   logout: logout,
  //   isUserLoggedIn: isUserLoggedIn,
  // };

  const contextValue = {
    login,
    logout,
    isUserLoggedIn,
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
