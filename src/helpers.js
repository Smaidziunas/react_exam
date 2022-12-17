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
