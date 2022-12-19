import { Link } from 'react-router-dom';

function UnAuthorised(props) {
  return (
    <div>
      <h1>Only for registered users</h1>
      <h2 className='textAlign'>
        You can login{' '}
        <Link className='underline' to={'/login'}>
          here
        </Link>
      </h2>
    </div>
  );
}
export default UnAuthorised;
