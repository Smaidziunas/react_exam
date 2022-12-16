import { Link } from 'react-router-dom';

function UnAuthorised(props) {
  return (
    <div>
      <h1>Only for registered users</h1>
      <h2>
        You can login <Link to={'/login'}>here</Link>
      </h2>
    </div>
  );
}
export default UnAuthorised;
