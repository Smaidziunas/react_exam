import css from './Button.module.css';

function Button(props) {
  const btn = props.btn ? css.btn : '';
  const btnSec = props.secondary ? css.btnSecondary : '';
  return (
    <button onClick={props.onClick} className={`${btn} ${btnSec}`}>
      {props.children}
    </button>
  );
}
export default Button;
