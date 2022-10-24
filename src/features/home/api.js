const fetchAll = async () => {
  const response = await fetch('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD');
  const data = await response.json();

  const arr = data.Data;
  return arr;
};

export default fetchAll;
