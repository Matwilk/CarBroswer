import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./SearchInput.module.scss";

export default class SearchInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  };

  handleClear = event => {
    event.preventDefault()
    this.setState({
      text: ''
    })
  };

  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmit(this.state.text)
  }

  render() {
    const { text } = this.state;

    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <input value={text} onChange={this.handleChange} className={styles.inputBox}/>
          {text && <button type='reset' onClick={this.handleClear} className={text && styles.clearButton}>X</button>}
        </form>
      </div>
    );
  }
}