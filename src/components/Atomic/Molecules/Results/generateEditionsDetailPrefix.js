import qs from 'query-string';

const generateEditionsDetailPrefix = search => {
  const query = qs.parse(search);
  let prefix = 'editions/detail?';

  [ 'make', 'range', 'model' ].forEach((tag) => {
    if (query[tag]) {
      const nameTag = `${tag}Name`;
      prefix += `${tag}=${query[tag]}&${nameTag}=${query[nameTag]}&`;
    }
  });
      
  prefix += 'id=';

  return prefix;
}

export default generateEditionsDetailPrefix;