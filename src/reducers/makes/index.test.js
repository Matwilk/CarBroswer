import React from 'react'

import makesReducer from './'

describe('makesReducer', () => {
  it('should set isFetching', () => {
    const state = makesReducer(undefined, { type: 'INIT' });
    expect(state).toEqual({});
  })

  it('should have intial state', () => {
    const initialState = {};
    const state = makesReducer(initialState, { type: 'LOADING', dispatchType: 'makes' });
    expect(state).toEqual({isFetching: true});
  })

  it('should apply fetched and keyed makes', () => {
    const initialState = { isFetching: true };
    const state = makesReducer(initialState, { 
      type: 'FETCHED_MAKES', 
      makes: {
        data: [
          {
            sourceId: 1,
            make: 'blah'
          },
          {
            sourceId: 2,
            make: 'bleurgh'
          }
        ]
      }
    });
    expect(state).toEqual({isFetching: false, makes: {
      1: {
        sourceId: 1,
        make: 'blah'
      },
      2: {
        sourceId: 2,
        make: 'bleurgh'
      }
    }});
  })
})
