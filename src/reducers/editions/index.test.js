import React from 'react'

import editionsReducer from './'

describe('editionsReducer', () => {
  it('should set isFetching', () => {
    const state = editionsReducer(undefined, { type: 'INIT' });
    expect(state).toEqual({});
  })

  it('should have intial state', () => {
    const initialState = {};
    const state = editionsReducer(initialState, { type: 'LOADING', dispatchType: 'editions' });
    expect(state).toEqual({isFetching: true});
  })

  it('should apply fetched editions', () => {
    const initialState = { isFetching: true };
    const state = editionsReducer(initialState, { 
      type: 'FETCHED_EDITIONS', 
      editions: {
        key: 'k1', 
        data: 'some data'
      }
    });
    expect(state).toEqual({isFetching: false, k1: 'some data'});
  })
})
