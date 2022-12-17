import Grid from '../UI/grid/Grid';
import css from './ShopCard.module.css';

/* APRASYMAS

Shops Puslapis

patekti galima tik prisijungus – router blocking/protectedRoute

Šis puslapis turės meniu juostą (logotipas, shops, add-shop, logout nuorodos <-

skirtingai nei login/register puslapiuose) bei kortelėse (t.y. stačiakampiuose/gride) 
atvaizduos įrašus . Kol jie neužsikrovė – atvaizduojam “Loading...”. Jei nėra nei vieno 
įrašo – išmeta, kad nėra įrašų.

Kortelėse gražiai atvaizduoti visą informaciją iš tos kuri yra išsaugota duomenų bazėje 
sukuriant shop, add-shop puslapyje. (nepamirškite kad iš db gausite objektų objektą ir 
reikės transformuoti duomenis, tam turite jau aprašytą funkciją.)

      shopName: 'testing Name',
      town: 'kaunas',
      startYear: '1981',
      description: 'smart products',
      ImageUrl: 'https://picsum.photos/200/300',


*/
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
