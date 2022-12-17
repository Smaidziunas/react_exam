import { useState } from 'react';
import useFetch from '../components/hooks/useFetch';
import ShopCard from '../components/shopCard/ShopCard';
import Grid from '../components/UI/grid/Grid';
import { getFormInfo } from '../helpers';

function ShopsPage(props) {
  const url = `${import.meta.env.VITE_REAL_DB_URL}/r-exam/shops.json`;

  const [dataFromFireBase, setDataFromFireBase] = useFetch(url, {});

  const dataArr = getFormInfo(dataFromFireBase);
  console.log('dataArr ===', dataArr);

  // console.log(
  //   'dataFromFireBase ===',
  //   JSON.stringify(dataFromFireBase, null, 2)
  // );

  // Data arr:
  /*
  ImageUrl
  archived
  description
  id
  shopName
  startYear
  tagsStringInput
  town
  userId
  
  */

  return (
    <div className='container'>
      <h1>tik athorised</h1>
      <p>turi menu</p>
      <Grid>
        {dataArr &&
          dataArr.map((oneShopCard) => (
            <li className='center' key={oneShopCard.id}>
              {/* <h2>{oneShopCard.shopName}</h2> */}
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

      {/* <ShopCard /> */}
    </div>
  );
}
export default ShopsPage;

// DATA FROM FORM:
/* DATA OBJ
 const DataWeGot= {
  "-NJVTfe83P6JtJfXa4VD": {
    "archived": false,
    "body": "Fourth learned firebase today",
    "image": "https://picsum.photos/id/18/600/400",
    "title": "Fourth fireBase post",
    "userId": "aNzfUc40GpfkUXb8XVosjN7ni772"
  },
  "-NJVdWoEsUG0Ngi6iV2Y": {
    "archived": false,
    "body": "First learned firebase today",
    "image": "https://picsum.photos/id/18/600/400",
    "title": "First fireBase post",
    "userId": "aNzfUc40GpfkUXb8XVosjN7ni772"
  },
  "-NJVdcjvkRuSiDfX995g": {
    "archived": false,
    "body": "Second learned firebase today",
    "image": "https://picsum.photos/id/18/600/400",
    "title": "Second fireBase post",
    "userId": "aNzfUc40GpfkUXb8XVosjN7ni772"
  },
  "-NJVqmfmMFP4Q_JyNf8g": {
    "ImageUrl": "https://picsum.photos/200/300",
    "archived": false,
    "description": "smart products",
    "shopName": "testing Name",
    "startYear": "1981",
    "tagsStringInput": "",
    "town": "kaunas",
    "userId": "aNzfUc40GpfkUXb8XVosjN7ni772"
  },
  "-NJVqztbfINBF0y-7nyc": {
    "ImageUrl": "https://picsum.photos/200/300",
    "archived": false,
    "description": "DOES IT PRINT uID",
    "shopName": "FORMIK TEST ",
    "startYear": "1981",
    "tagsStringInput": "",
    "town": "kaunas",
    "userId": "aNzfUc40GpfkUXb8XVosjN7ni772"
  },
  "-NJVrAQe9JgGAG_Vh9Tc": {
    "ImageUrl": "https://picsum.photos/200/300",
    "archived": false,
    "description": "USER uID?",
    "shopName": "TESTING AFTER REFRESH",
    "startYear": "1981",
    "tagsStringInput": "",
    "town": "kaunas",
    "userId": "aNzfUc40GpfkUXb8XVosjN7ni772"
  }
}
 */
