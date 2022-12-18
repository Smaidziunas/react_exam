import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

// NEBUTINA, padaro AUTOCOMPLETE
export const AuthContext = createContext({
  login({ token, email }) {},
  logout() {},
  isUserLoggedIn: false,
  token: '',
  email: '',
  uId: '',
  loadingState: false,
  changeLoadingState() {},
});

AuthContext.displayName = 'Auth-Context';

const tokenName = 'firebaseIDToken';

function AuthContextProvider(props) {
  let history = useHistory();

  // CHECKING IF TOKEN EXIST (virs state nes kodas yra sinchroninis, tdl ivykdomas pirmiausia):
  const tokenFromStorage = localStorage.getItem(tokenName);
  const emailFromStorage = localStorage.getItem('email');
  const userIdFromStorage = localStorage.getItem(
    'localId_from_firebase_Auth_result'
  );
  // IMPORTING AND SETTING f()

  // =================== STATES: ================================
  // setting token:
  const [token, setToken] = useState(tokenFromStorage);
  // when token is SET, token = true; if not set, then = false
  const [emailVal, setEmailVal] = useState(emailFromStorage);
  const [uId, setUId] = useState(userIdFromStorage);
  const isUserLoggedIn = !!token;

  // is loading context
  const [loadingState, setLoadingState] = useState(false);

  const login = ({ idToken: token, email, localId }) => {
    // ON LOGIN:
    //setting token val (token=sendresult.idToken)
    setToken(token);
    //seting LocalStorage:
    localStorage.setItem(tokenName, token);
    // setting email val:
    setEmailVal(email);
    // seting localStorage
    localStorage.setItem('email', email);
    // setting userID val:
    setUId(localId);
    // setting userID localStorage:
    localStorage.setItem('localId_from_firebase_Auth_result', localId);
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem(tokenName);
    localStorage.removeItem('email');
    localStorage.removeItem('localId_from_firebase_Auth_result');
    history.push('/home');
  };

  const changeLoadingState = () => {
    setLoadingState((prevState) => !prevState);
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
    uId,
    loadingState,
    changeLoadingState,
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
