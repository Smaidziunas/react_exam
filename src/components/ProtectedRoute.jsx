import { Route } from 'react-router-dom';
import UnAuthorised from '../pages/UnAuthorised';
import { useAuthCtx } from '../store/AuthContext';

function ProtectedRoute({ children, ...restOfProps }) {
  const { isUserLoggedIn } = useAuthCtx();

  return (
    <Route {...restOfProps}>
      {isUserLoggedIn ? children : <UnAuthorised />}
    </Route>
  );
}
/* // BE DESTRUCTURIZACIJOS
  function ProtectedRoute(props) {
    const { isUserLoggedIn } = useAuthCtx();
  return (
    <Route path={props.path}>
      {isUserLoggedIn ? props.children : <UnAuthorised />}
    </Route>
  );
*/
export default ProtectedRoute;
