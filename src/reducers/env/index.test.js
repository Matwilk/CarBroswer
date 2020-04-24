import React from 'react'

import envReducer from './'

describe('envReducer', () => {
  it('should have intial state', () => {
    const state = envReducer(undefined, { type: 'INIT' });
    expect(state).toEqual('wilks-cbe');
  })

  it('should apply env name', () => {
    const initialState = 'initial';
    const state = envReducer(initialState, { 
      type: 'SET_ENV', 
      env: 'new'
    });
    expect(state).toEqual('new');
  })
})
