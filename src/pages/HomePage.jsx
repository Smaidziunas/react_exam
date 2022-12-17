import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthCtx } from '../store/AuthContext';
function HomePage(props) {
  const { email, isUserLoggedIn } = useAuthCtx();
  console.log('email ===', email);

  return (
    <div className='container'>
      <h1>
        Welcome,{' '}
        {isUserLoggedIn ? (
          <span>{email}!</span>
        ) : (
          <span>
            please <Link to={'/login'}>login!</Link>
          </span>
        )}
      </h1>
    </div>
  );
}
export default HomePage;
