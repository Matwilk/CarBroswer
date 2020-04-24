import React from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import style from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ search }) => {
  const query = qs.parse(search);

  const preparedList = [
    {
      name: 'Home',
      id: 'home',
      link: '/',
    },
  ];

  const pushMake = (id, name) => {
    preparedList.push({
      name,
      id,
      link: `/cars?make=${id}&makeName=${name}`,
    });
  };

  const pushRange = (id, name, makeId, makeName) => {
    preparedList.push({
      name,
      id,
      link: `/cars?make=${makeId}&makeName=${makeName}&range=${id}&rangeName=${name}`,
    });
  };

  const pushModel = (id, name, makeId, makeName, rangeId, rangeName) => {
    preparedList.push({
      name,
      id,
      link: `/editions?make=${makeId}&makeName=${makeName}&range=${rangeId}&rangeName=${rangeName}&cat=model&id=cap&value=${id}&modelName=${name}&model=${id}`,
    });
  };

  const pushEdition = (name, id) => {
    preparedList.push({
      name,
      id,
    });
  };

  if (query.make) {
    const makeId = query.make;
    const makeName = query.makeName;
    pushMake(makeId, makeName);

    if (query.rangeName && query.range) {
      const rangeId = query.range;
      const rangeName = query.rangeName;
      pushRange(rangeId, rangeName, makeId, makeName);

      if (query.modelName && query.id) {
        const modelId = query.model;
        pushModel(
          modelId,
          query.modelName,
          makeId,
          makeName,
          rangeId,
          rangeName
        );
      }

      if (query.id && !query.cat) {
        pushEdition(query.name, query.id);
      }
    }
  } else if (Object.keys(query).length === 3) {
    //assume all editions
    preparedList.push({
      name: `All Editions for ${query.cat} ${query.id}Id = ${query.value}`,
      id: query.value,
    });
  }

  const lastIndex = preparedList.length - 1;

  return (
    <div className={style.container}>
      {preparedList.map((crumb, index) => {
        return index < lastIndex ? (
          <div key={crumb.id} className={style.linkContainer}>
            <div className={classNames(style.link)}>
              <Link to={crumb.link}>{crumb.name}</Link>
            </div>
            <span>></span>
          </div>
        ) : (
          <div key={crumb.id} className={style.selectedCrumb}>
            {crumb.name}
          </div>
        );
      })}
    </div>
  );
};

Breadcrumbs.propTypes = {
  search: PropTypes.string.isRequired,
};

export default Breadcrumbs;
