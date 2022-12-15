import { Link, NavLink } from 'react-router-dom';

function MainNavigation(props) {
  return (
    <header>
      <Link to='/'>
        <div>LOGO</div>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/register'>Sign Up</NavLink>
          </li>

          <li>
            <NavLink to='/login'>Log in</NavLink>
          </li>

          <li>
            <NavLink to='/add-shop'>Add Shop</NavLink>
          </li>
          <li>
            <NavLink to='/shops'>Shops</NavLink>
          </li>

          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
