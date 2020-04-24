import React from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const Select = ({
  value,
  name,
  onChange,
  children
}) => (
  <div>
    <div className={style.formInput}>
      <div className={style.select}>
        <select value={value} name={name} onChange={onChange}>
          {children}
        </select>
      </div>
    </div>
  </div>
)

Select.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Select;
