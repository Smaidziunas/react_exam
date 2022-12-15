import { Link, NavLink } from 'react-router-dom';
import Button from '../UI/button/Button';
import css from './MainNavigation.module.css';

function MainNavigation(props) {
  return (
    <header className={`${css.container} ${css.flex}`}>
      <Link to='/'>
        <div>LOGO</div>
      </Link>
      <nav>
        <div className={css.div}>
          <ul className={css.navUl}>
            <li>
              <NavLink className='nav-link' to='/home'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='/register'>
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='/login'>
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='/add-shop'>
                Add Shop
              </NavLink>
            </li>
            <li>
              <NavLink className='nav-link' to='/shops'>
                Shops
              </NavLink>
            </li>
            <li>
              <Button>Logout</Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
