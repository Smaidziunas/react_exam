import css from './Container.module.css';

function Container(props) {
  return (
    <div className={css.container}>
      <div className={css.contPadding}>{props.children}</div>
    </div>
  );
}
export default Container;
