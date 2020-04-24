import React from 'react'

import detailReducer from './'

describe('detailReducer', () => {
  it('should set isFetching', () => {
    const state = detailReducer(undefined, { type: 'INIT' });
    expect(state).toEqual({});
  })

  it('should have intial state', () => {
    const initialState = {};
    const state = detailReducer(initialState, { type: 'LOADING', dispatchType: 'detail' });
    expect(state).toEqual({isFetching: true});
  })

  it('should apply fetched detail', () => {
    const initialState = { isFetching: true };
    const state = detailReducer(initialState, { 
      type: 'FETCHED_DETAIL', 
      detail: {
        key: 'k1', 
        data: 'some data'
      }
    });
    expect(state).toEqual({isFetching: false, k1: 'some data'});
  })
})
