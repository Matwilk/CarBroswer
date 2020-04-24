const fetchEditons = async (query, env) => {
  const { cat, id, value } = query;
  let args = '';

  switch (cat) {
    case 'make':
      args += id === 'cap' ? `?manId=${value}` : `?makeHamId=${value}`;
      break;
    case 'model':
      args += id === 'cap' ? `?modId=${value}` : `?modelHamId=${value}`;
      break;
    case 'range':
      args += id === 'cap' ? `?ranId=${value}` : `?rangeHamId=${value}`;
      break;
    case 'trim':
      args += id === 'cap' ? `?trimId=${value}` : `?trimHamId=${value}`;
      break;
    default:
      args += '/detail?';
      args += `id=${value}`;
      break;
  }

  const data = await fetch(`api/${env}/editions${args}`, {
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((data) => data.results);

  return data;
};

export default fetchEditons;
