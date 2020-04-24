import React from 'react'

import carsReducer from './'

describe('carsReducer', () => {
  it('should set isFetching', () => {
    const state = carsReducer(undefined, { type: 'INIT' });
    expect(state).toEqual({});
  })

  it('should have intial state', () => {
    const initialState = {};
    const state = carsReducer(initialState, { type: 'LOADING', dispatchType: 'cars' });
    expect(state).toEqual({isFetching: true});
  })

  it('should apply fetched cars', () => {
    const initialState = { isFetching: true };
    const state = carsReducer(initialState, { 
      type: 'FETCHED_CARS', 
      cars: {
        key: 'k1', 
        data: 'some data'
      }
    });
    expect(state).toEqual({isFetching: false, k1: 'some data'});
  })
})
