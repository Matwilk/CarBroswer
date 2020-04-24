import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'query-string';

import ResultRow from '../../Atoms/ResultRow';
import MakeBadge from '../../Atoms/MakeBadge';

import style from './CarBrowser.module.scss';
import fetchCars from '../../../../utils/fetchCars';
import generatePrefix from './generatePrefix';

export const CarBrowser = (props) => {
  const { data, location: { search } } = props;
  const { prefix, type } = generatePrefix(data, search);
  const query = qs.parse(search);

  return (
    <div className={style.container}>
      <MakeBadge sourceId={query.make} name={query.makeName } />
      {data[search] && data[search].map((car) => {
        return (
          <div key={car.hamId} className={style.results}>
            <ResultRow
              prefix={prefix}
              type={type}
              id={String(car.sourceId)}
              name={car.name}
              image={car.image}
            />
          </div>
        );
      })}
    </div>
  );
};

CarBrowser.fetch = fetchCars;

CarBrowser.mapStateToProps = state => {
  return {
    makes: state.makes
  };
};

CarBrowser.propTypes = {
  data: PropTypes.object
};

export default connect(CarBrowser.mapStateToProps)(CarBrowser);
