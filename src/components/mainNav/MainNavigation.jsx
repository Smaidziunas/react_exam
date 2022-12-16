import { useState, useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Button from '../UI/button/Button';
import css from './MainNavigation.module.css';

function MainNavigation(props) {
  // IMPORTING CONTEXT:
  // const ctx = useContext(AuthContext);
  // console.log('ctx ===', ctx);

  //

  let history = useHistory();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsUserLoggedIn((prevState) => !prevState);
    history.push('/register');
  };

  return (
    <header className={`${css.container} ${css.flex}`}>
      <Link to='/'>
        <div onClick={handleLogout}>LOGO</div>
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
                <Button onClick={handleLogout} btn>
                  Logout
                </Button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
