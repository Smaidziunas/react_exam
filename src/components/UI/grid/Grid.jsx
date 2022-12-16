import css from './Grid.module.css';

function Grid(props) {
  const shopCard = props.shopCard ? css.shopCard : '';

  let divStyles = {
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  };
  if (!props.cols) divStyles = {};

  return (
    <div style={divStyles} className={`${css.grid} ${shopCard}`}>
      {props.children}
    </div>
  );
}
export default Grid;
