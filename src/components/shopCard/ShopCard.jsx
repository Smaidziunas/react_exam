import Grid from '../UI/grid/Grid';
import css from './ShopCard.module.css';

function ShopCard(props) {
  return (
    <div className={css.card}>
      <div className={css.titleDiv}>
        <h3 className={css.title}>{props.title}</h3>
      </div>
      <div className={css.imgDiv}>
        <img className={css.img} src={props.img} alt={props.title} />
      </div>
      {/* <p className={css.cardDescr}>About us</p> */}
      <p className={css.pdLeftRight}>{props.description}</p>
      {/* <Grid shopCard cols='2'> */}
      <p className={css.cardDescr}>Town : {props.town} </p>
      {/* <p className={css.txtEnd}>{props.town}</p> */}
      <p className={css.cardDescr}>Start Year : {props.year}</p>
      {/* <p className={css.txtEnd}>{props.year}</p> */}
      {/* </Grid> */}
    </div>
  );
}
export default ShopCard;
