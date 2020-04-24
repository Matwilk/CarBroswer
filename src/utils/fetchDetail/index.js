const fetchDetail = async (query, env) => {
  return await fetch(`/api/${env}/editions/detail?id=${query.id}`, {
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((data) => data.edition);
};

export default fetchDetail;
