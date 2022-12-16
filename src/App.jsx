import { useContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import AddShopPage from './pages/AddShopPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopsPage from './pages/ShopsPage';
import UnAuthorised from './pages/UnAuthorised';
import { useAuthCtx } from './store/AuthContext';

function App() {
  // importing context
  const { isUserLoggedIn } = useAuthCtx();
  return (
    <div className='App'>
      <Layout>
        <Switch>
          {!isUserLoggedIn && (
            <Route path='/register' exact>
              <RegisterPage />
            </Route>
          )}
          {!isUserLoggedIn && (
            <Route path='/login' exact>
              <LoginPage />
            </Route>
          )}
          <Route path='/add-shop' exact>
            {isUserLoggedIn ? <AddShopPage /> : <UnAuthorised />}
          </Route>
          <Route path='/shops' exact>
            {isUserLoggedIn ? <ShopsPage /> : <UnAuthorised />}
          </Route>
          <Route path='/' exact>
            <Redirect to={'/home'} />
          </Route>
          <Route path='/home' exact>
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
