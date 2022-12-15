import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import AddShopPage from './pages/AddShopPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopsPage from './pages/ShopsPage';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/register' exact>
            <RegisterPage />
          </Route>
          <Route path='/login' exact>
            <LoginPage />
          </Route>
          <Route path='/add-shop' exact>
            <AddShopPage />
          </Route>
          <Route path='/shops' exact>
            <ShopsPage />
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
