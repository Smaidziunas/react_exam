import { useContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';
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
          <Route path='/register' exact>
            {!isUserLoggedIn ? <RegisterPage /> : <Redirect to={'/'} />}
          </Route>
          <Route path='/login' exact>
            {!isUserLoggedIn ? <LoginPage /> : <Redirect to={'/'} />}
          </Route>
          <ProtectedRoute path='/add-shop' exact>
            <AddShopPage />
          </ProtectedRoute>
          <ProtectedRoute path='/shops' exact>
            <ShopsPage />
          </ProtectedRoute>
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
