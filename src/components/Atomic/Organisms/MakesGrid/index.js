import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import MakeBadge from '../../Atoms/MakeBadge';

import fetchMakes from '../../../../utils/fetchMakes';

import style from './MakesGrid.module.scss';


export const MakesGrid = ({ data }) => {
  if (!data || !data.makes) {
    return null;
  };

  return (
    <div className={style.makesContainer}>
      {Object.values(data.makes).map(make => {
        return <MakeBadge key={make.sourceId} prefix='cars?' name={make.name} sourceId={make.sourceId} />
      })}
    </div>
  )
};

MakesGrid.propTypes = {
  data: PropTypes.object
};

MakesGrid.fetch = fetchMakes;

MakesGrid.mapStateToProps = state => {
  return {
    makes: state.makes
  };
};

export default connect(MakesGrid.mapStateToProps)(MakesGrid);