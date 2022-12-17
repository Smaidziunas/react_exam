import css from './Button.module.css';

function Button(props) {
  const btn = props.btn ? css.btn : '';
  const navBtn = props.btnNav ? css.btnNav : '';
  const btnSec = props.secondary ? css.btnSecondary : '';
  return (
    <button
      type='submit'
      onClick={props.onClick}
      className={`${btn} ${btnSec} ${navBtn}`}
    >
      {props.children}
    </button>
  );
}
export default Button;
