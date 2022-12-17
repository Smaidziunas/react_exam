///// =============================== ASYNC SEND REQUEST()
export async function sendRequest(whatToSend, url) {
  console.log('url ===', url);
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(whatToSend),
    });
    if (!resp.ok) {
      throw await resp.json();
    }
    const result = await resp.json();
    // console.log('result ===', result);
    // viskas ivyko gerai
    return [result, null];
  } catch (error) {
    // console.warn('klaida sendRequest', error);
    return [null, error];
  }
  // issiusti su fetch post requesta ir paduoti i body duomenis is whatToSend
  // isspausdinti atsakykma
  // isspausdinti gauta idTokena
  // issiusti uzklausa su jau sukurtu email dar karta ir isspausdinti klaida.
}

/**
 * Transforms ONBJECT to arr
 * @param {object} obj
 * @returns [{id, data}]
 */
export function getFormInfo(obj) {
  const dataArr = [];

  for (let key in obj) {
    dataArr.push({ id: key, ...obj[key] });
    // Longer version
    // const value = obj[key];
    // dataArr.push(value);
    // value.id = key;
  }
  return dataArr;
}

/* shopCard

function ShopCard(props) {
  return (
    <Grid>
      <div className={css.card}>
        <h2 className={css.title}>{props.title}</h2>
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



 */
