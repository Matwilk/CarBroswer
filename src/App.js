import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { css } from '@emotion/core';

import Loader from 'react-spinners/BarLoader';
import Header from './components/Atomic/Molecules/Header';
import Select from './components/Atomic/Atoms/Select';
import Results from './components/Atomic/Molecules/Results';
import CarCombo from './components/Atomic/Molecules/CarCombo';
import MakesGrid from './components/Atomic/Organisms/MakesGrid';
import CarBrowser from './components/Atomic/Organisms/CarBrowser';
import CarDetail from './components/Atomic/Organisms/CarDetail';
import Breadcrumbs from './components/Atomic/Molecules/Breadcrumbs';
import withFetch from './components/hoc/withFetch';

import style from './App.module.scss';

const override = css`
  width: 100%;
`;

const WFCarBrowser = withFetch(CarBrowser, 'cars');
const WFResults = withFetch(Results, 'editions');
const WFMakes = withFetch(MakesGrid, 'makes');
const WFCarDetail = withFetch(CarDetail, 'detail');

export const App = (props) => {
  const {location: { search }} = props;
  const env = useSelector(state => state.env);
  const dispatch = useDispatch()

  const handleSubmit = (catType, idType, value) => {
    this.props.history.push({
      pathname: '/editions',
      search: `?cat=${catType}&id=${idType}&value=${value}`,
    });
  };

  const handleEnvChange = event => {
    dispatch({ type: 'SET_ENV', env: event.target.value });
  }

  return (
    <div>
      <div className={style.header}>
        <Header />
        <Select value={env} name={`env`} onChange={handleEnvChange}>
          <option value='prod'>Prod</option>
          <option value='staging'>Staging</option>
          <option value='wilks-cbe'>Wilks</option>
        </Select>
      </div>
      <CarCombo onSubmit={handleSubmit} name="cars" />
      <Breadcrumbs search={search} />
      <Switch>
        <Route exact path="/editions" component={WFResults} />
        <Route path="/editions/detail" component={WFCarDetail} />
        <Route path="/cars" component={WFCarBrowser} />
        <Route exact path="/" component={WFMakes} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
