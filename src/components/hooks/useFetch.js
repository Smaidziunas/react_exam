// custom hook
import { useState } from 'react';
import { useEffect } from 'react';

function useFetch(url = '', initVal = []) {
  const [data, setData] = useState(initVal);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((gotData) => setData(gotData))
      .catch((err) => console.warn('useFetch klaida', err));
  }, []);

  return [data, setData];
}

export default useFetch;
