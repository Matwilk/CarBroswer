import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import currencyFormatter from 'currency-formatter';

import fetchDetail from '../../../../utils/fetchDetail';

import style from './CarDetail.module.scss';

const CarDetail = (props) => {
  const {
    data,
    location: { search },
  } = props;
  const edition = data[search];

  if (!edition) {
    return null;
  }

  const {
    sourceId,
    name,
    make,
    model,
    range,
    bodyStyle,
    onTheRoadPrice,
  } = edition;

  const image =
    edition.images && edition.images.urls && edition.images.urls.mainFullsize
      ? edition.images.urls.mainFullsize
      : `https://wholesaleduniya.com/wholeadmin/files/DesignImages/22115/63327_1.jpg`;

  return (
    <div className={style.detailContainer}>
      <h1>
        {make} {name} [{sourceId}]
      </h1>
      <div className={style.hero}>
        {<img alt={name} src={image} className={style.image} />}
        <div className={style.detail}>
          <div className={style.keyValue}>
            <div>
              <strong>Range: </strong>
              <span>{range}</span>
            </div>
            <div>
              <strong>Model: </strong>
              <span>{model}</span>
            </div>
            <div>
              <strong>Bodystyle: </strong>
              <span>{bodyStyle}</span>
            </div>
            <div className={style.price}>
              {currencyFormatter.format(onTheRoadPrice, {
                code: 'GBP',
                thousandsSeparator: ',',
                precision: 0,
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CarDetail.propTypes = {
  data: PropTypes.object,
};

CarDetail.fetch = fetchDetail;

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
  };
};

export default connect(mapStateToProps)(CarDetail);
