import React from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';

import ResultRow from '../../Atoms/ResultRow';
import MakeBadge from '../../Atoms/MakeBadge';

import fetchEditons from '../../../../utils/fetchEditions';
import generateEditionsDetailPrefix from './generateEditionsDetailPrefix';

import style from './Results.module.scss';

const Results = (props) => {
  const { data, location: { search } } = props;
  const query = qs.parse(search);
  const prefix = generateEditionsDetailPrefix(search);

  return (
    <div className={style.container}>
      {query.make && query.makeNam && <MakeBadge sourceId={query.make} name={query.makeName} />}
      {data[search] && data[search].map((row) => (
        <div key={row.hamId} className={style.results}>
          <ResultRow
            item={row} type="edition" id={String(row.sourceId)} name={row.name} image={row.images} prefix={prefix}
          />
        </div>
      ))}
    </div>
  );
};

Results.fetch = fetchEditons;

Results.propTypes = {
  data: PropTypes.object.isRequired
};

export default Results;
