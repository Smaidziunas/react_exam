import { Route } from 'react-router-dom';

function ProtectedRoute(props) {
  return <Route path={props.path}>{props.children}</Route>;
}
export default ProtectedRoute;
