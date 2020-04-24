const fetchCars = async (query, env) => {
  let params = '';

  if (Object.keys(query).length === 2 && query.make) {
    params += `/ranges?manId=${query.make}`;
  } else if (query.range) {
    params += `/models?ranId=${query.range}`;
  } else if (query.model) {
    params += `/trims?modId=${query.model}`;
  }

  const data = await fetch(`api/${env}${params}`, {
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((data) => data.results);

  return data;
};

export default fetchCars;
