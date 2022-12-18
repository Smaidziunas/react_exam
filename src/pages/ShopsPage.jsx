import { useState } from 'react';
import useFetch from '../components/hooks/useFetch';
import ShopCard from '../components/shopCard/ShopCard';
import Grid from '../components/UI/grid/Grid';
import { getFormInfo } from '../helpers';

function ShopsPage(props) {
  const url = `${import.meta.env.VITE_REAL_DB_URL}/r-exam/shops.json`;

  const [dataFromFireBase, setDataFromFireBase] = useFetch(url);

  const dataArr = getFormInfo(dataFromFireBase);

  let isLoading = dataArr.length === 0 ? true : false;
  let noShops = dataArr.length === 0 ? true : false;

  console.log('isLoading ===', isLoading);
  console.log('dataArr ===', dataArr);

  return (
    <div className='container'>
      {isLoading && <h2>Loading</h2>}
      <Grid>
        {dataArr.map((oneShopCard) => (
          <li className='center' key={oneShopCard.id}>
            <ShopCard
              title={oneShopCard.shopName}
              img={oneShopCard.ImageUrl}
              description={oneShopCard.description}
              town={oneShopCard.town}
              year={oneShopCard.startYear}
            />
          </li>
        ))}
      </Grid>
      {noShops && <h2 className='fz2rem'>No Shops registered yet</h2>}
    </div>
  );
}
export default ShopsPage;
