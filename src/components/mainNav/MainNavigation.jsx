import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext, useAuthCtx } from '../../store/AuthContext';
import Button from '../UI/button/Button';
import css from './MainNavigation.module.css';

const MainNavigation = () => {
  // IMPORTING CONTEXT:
  const { isUserLoggedIn, logout, login } = useAuthCtx();
  // const ctx = useContext(AuthContext);
  // console.log('ctx ===', ctx.isUserLoggedIn);
  // DESTRUCTURING IsUserLoggedIn part FROM context
  console.log('isUserLoggedIn ===', isUserLoggedIn);

  return (
    <header className={`${css.container} ${css.flex}`}>
      <Link to='/'>
        <div
          onClick={() => {
            login('log');
          }}
        >
          LOGO
        </div>
      </Link>
      <nav>
        <div className={css.div}>
          <ul className={css.navUl}>
            <li>
              <NavLink className='nav-link' to='/home'>
                Home
              </NavLink>
            </li>
            {!isUserLoggedIn && (
              <li>
                <NavLink className='nav-link' to='/register'>
                  Sign Up
                </NavLink>
              </li>
            )}
            {!isUserLoggedIn && (
              <li>
                <NavLink className='nav-link' to='/login'>
                  Log in
                </NavLink>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <NavLink className='nav-link' to='/add-shop'>
                  Add Shop
                </NavLink>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <NavLink className='nav-link' to='/shops'>
                  Shops
                </NavLink>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Button
                  onClick={() => {
                    logout();
                  }}
                  btnNav
                >
                  Logout
                </Button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
