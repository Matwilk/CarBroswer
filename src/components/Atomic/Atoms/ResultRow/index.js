import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './ResultRow.module.scss';

const ResultsRow = ({ prefix, type, name, id, images }) => {
  let link;
  switch (type) {
    case 'model':
      link = `${prefix}${id}&modelName=${name}&model=${id}`;
      break;
    case 'edition':
      link = `${prefix}${id}&name=${name}`;
      break;
    default:
      link = `${prefix}${type}=${id}&${type}Name=${name}`;
      break;
  }

  return (
    <div className={style.resultRow}>
      <Link to={link}>
        {['edition'].includes(type) && (
          <img
            alt={name}
            src={
              images
                ? images.urls.mainFullsize
                : '//cdn.jsdelivr.net/emojione/assets/png/1f697.png'
            }
          />
        )}
        <span className={style.title}>{name}</span>
      </Link>
    </div>
  );
};

ResultsRow.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  images: PropTypes.object,
  prefix: PropTypes.string.isRequired,
};

export default ResultsRow;
