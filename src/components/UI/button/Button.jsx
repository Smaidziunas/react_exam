import toast, { Toaster } from 'react-hot-toast';
import css from './Button.module.css';

function Button(props) {
  const btn = props.btn ? css.btn : '';
  const navBtn = props.btnNav ? css.btnNav : '';
  const btnSec = props.secondary ? css.btnSecondary : '';

  return (
    <div>
      <button
        type='submit'
        onClick={props.onClick}
        className={`${btn} ${btnSec} ${navBtn}`}
      >
        {props.children}
      </button>
    </div>
  );
}
export default Button;
