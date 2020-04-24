import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import style from "./MakeBadge.module.scss";

const MakeBadge = ({ prefix, name, sourceId }) => {
  const imageSrc = `https://www.capconnect.co.uk/CAPConnect/Webservice/ImagingService.svc/GetLogo?manufacturer=${name}`;
  return (
    <div
      className={style.container}
    >
      {prefix ? (
        <Link to={`${prefix}make=${sourceId}&makeName=${name}`} className={style.badge}>
          <img alt={name} src={imageSrc} className={style.image} />
          <span className={style.make}>{name}</span>
        </Link>) : (
        <div className={style.badge}>
          <img alt={name} src={imageSrc} className={style.image} />
          <div className={style.make}>{name}</div>
        </div>
      )}
    </div>
  )
};

MakeBadge.propTypes = {
  name: PropTypes.string.isRequired,
  sourceId: PropTypes.string.isRequired,
  prefix: PropTypes.string
};

export default React.memo(MakeBadge);