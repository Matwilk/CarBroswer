import React, { Component } from 'react';
import qs from 'query-string';
import { css } from "@emotion/core";
import Loader from "react-spinners/BarLoader";
import { connect } from 'react-redux';

const override = css`
  width: 100%;
`;

let FetchComponent;

const withFetch = (WrappedComponent, dispatchType) => {
  FetchComponent = class FetchComponent extends Component {
    async componentDidMount() {
      await this.doFetch();
    };

    async componentDidUpdate() {
      const { state } = this.props;

      if (!state[dispatchType].isFetching) {
        await this.doFetch();
      }
    };

    async doFetch() {
      const { location, dataDispatch, state } = this.props;
      const search = location && location.search;

      if (Object.keys(state[dispatchType]).length === 0 || (search && (!state[dispatchType][search] || Object.keys(state[dispatchType][search]) === 0))) {
        dataDispatch && dataDispatch.loading(dispatchType);

        const data = await WrappedComponent.fetch(qs.parse(search), state.env);

        dataDispatch && dataDispatch[dispatchType]({
          key: search,
          data
        });
      }
    }
    
    render() {
      const { location, state } = this.props;
      const isFetching = state[dispatchType].isFetching

      return (
        <>
          <WrappedComponent data={state[dispatchType]} location={location}/>
          <Loader css={override} color={"#123abc"} loading={isFetching} />
        </>        
      )

    }
  }

  const mapStateToProps = state => {
    return {
      state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      dataDispatch: {
        loading: dispatchType => dispatch({ type: 'LOADING', dispatchType }),
        makes: makes => dispatch({ type: 'FETCHED_MAKES', makes }),
        cars: cars => dispatch({ type: 'FETCHED_CARS', cars }),
        editions: editions => dispatch({ type: 'FETCHED_EDITIONS', editions}),
        detail: detail => dispatch({ type: 'FETCHED_DETAIL', detail})
      }
    }
  };

  return connect(mapStateToProps, mapDispatchToProps)(FetchComponent);
}

export default withFetch;
export { FetchComponent };