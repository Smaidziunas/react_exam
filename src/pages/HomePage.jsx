import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthCtx } from '../store/AuthContext';
function HomePage(props) {
  const { email, isUserLoggedIn } = useAuthCtx();

  return (
    <div className='container'>
      <h1>
        Welcome,{' '}
        {isUserLoggedIn ? (
          <span>{email}!</span>
        ) : (
          <span>
            please{' '}
            <Link className='underline' to={'/login'}>
              login!
            </Link>
          </span>
        )}
      </h1>
    </div>
  );
}
export default HomePage;
