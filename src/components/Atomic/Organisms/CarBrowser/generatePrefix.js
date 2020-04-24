import qs from 'query-string';

const generatePrefix = (data, search) => {
  const query = qs.parse(search);
  let prefix = '';
  let type = '';

  if (data[search] && data[search].length) {
    const firstItem = data[search][0];
    if (!firstItem.ranId) {
      // range items don't have ranId encoded
      type = 'range';
      prefix = `/cars?make=${query.make}&makeName=${query.makeName}&`;
    } else if (firstItem.modId === firstItem.sourceId) {
      // model items have the modId encoded
      prefix = '/editions?';
      type = 'model';
      [ 'make', 'range' ].forEach((tag) => {
        if (query[tag]) {
          const nameTag = `${tag}Name`;
          prefix += `${tag}=${query[tag]}&${nameTag}=${query[nameTag]}&`;
        }
      });
      prefix += 'cat=model&id=cap&value=';
    } else if (firstItem.trimHamId) {
      // editions have the trim hamId
      prefix = '/cars?trim=';
      type = 'edition';
    }
  }

  return {prefix, type};
}

export default generatePrefix;