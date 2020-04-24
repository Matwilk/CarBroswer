import React from 'react'
import PropTypes from 'prop-types'

import SearchInput from "../../Atoms/SelectInput";
import Select from '../../Atoms/Select';
import style from './style.module.scss'

export default class CarCombo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      catType: 'make',
      idType: 'cap',
      value: null
    };
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

  handleCatType = event => {
    this.setState({catType: event.target.value})
  };

  handleIdType = event => {
    this.setState({idType: event.target.value})
  };

  handleSubmit = value => {
    const { onSubmit } = this.props;
    const { catType, idType } = this.state;

    onSubmit(catType, idType, value)
  }

  render() {
    const { name } = this.props;
    const { catType, idType } = this.state;

    return (
      <div className={style.combo}>
        <Select value={catType} name={`cat-${name}`} onChange={this.handleCatType}>
          <option value='make'>Make</option>
          <option value='range'>Range</option>
          <option value='model'>Model</option>
          <option value='deriv'>Derivative</option>
        </Select>
        <Select value={idType} name={`id-${name}`} onChange={this.handleIdType}>
          <option value='cap'>Cap ID</option>
          <option value='ham'>Ham ID</option>
        </Select>
        <div className={style.input}>
          <SearchInput onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}
