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
    <Grid>
      <div className={css.card}>
        <h2 className={css.title}>Shop Name</h2>
        <div className={css.imgDiv}>
          <img
            className={css.img}
            src='https://picsum.photos/200/300'
            alt='shop-name'
          />
        </div>
        <p className={css.cardDescr}>Description</p>
        <p className={css.pdLeftRight}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          aliquam.
        </p>
        <Grid shopCard cols='2'>
          <p className={css.cardDescr}>Town</p>
          <p className={css.txtEnd}>Kaunas</p>
          <p className={css.cardDescr}>Start Year</p>
          <p className={css.txtEnd}>1982</p>
        </Grid>
      </div>
    </Grid>
  );
}
export default ShopCard;
