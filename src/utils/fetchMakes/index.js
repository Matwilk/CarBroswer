const fetchMakes = async (page, env) => {
  //getSecretValue();

  const fetchMakesPage = (page) => {
    return fetch(`api/${env}/makes?page=${page}&pageSize=60`, {
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.json())
    .then(data => data.results)
  }
  
  const [makesp1, makesp2] = await Promise.all([
    fetchMakesPage(1),
    fetchMakesPage(2)
  ]);

  return [...makesp1, ...makesp2];
};

export default fetchMakes;
  