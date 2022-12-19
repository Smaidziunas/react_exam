// import { useState } from 'react';

// import { useAuthCtx } from './store/AuthContext';

///// =============================== ASYNC SEND REQUEST()
export async function sendRequest(whatToSend, url) {
  // const [isLoading, setIsLoading] = useState(false);
  // console.log('url ===', url);
  // const { loadingState } = useAuthCtx();
  try {
    // console.log('loadingState ===', loadingState);
    // setIsLoading(true);
    // console.log('isLoading ===', isLoading);
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(whatToSend),
    });
    if (!resp.ok) {
      throw await resp.json();
      // setIsLoading(false);
    }
    const result = await resp.json();
    // console.log('result ===', result);
    // viskas ivyko gerai
    // setIsLoading(false);

    return [result, null];
  } catch (error) {
    // console.warn('klaida sendRequest', error);
    // setIsLoading(false);
    return [null, error];
  }
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
