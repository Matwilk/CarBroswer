import React from 'react'

import generateEditionsDetailPrefix from './generateEditionsDetailPrefix'

describe('<generateEditionsDetailPrefix />', () => {
  it('should return prefix for make string', () => {
    const prefix = generateEditionsDetailPrefix('?make=11&makeName=VW')
    expect(prefix).toBe('editions/detail?make=11&makeName=VW&id=');
  })

  it('should return prefix for range string', () => {
    const prefix = generateEditionsDetailPrefix('?range=22&rangeName=POLO')
    expect(prefix).toBe('editions/detail?range=22&rangeName=POLO&id=');
  })

  it('should return prefix for model string', () => {
    const prefix = generateEditionsDetailPrefix('?model=33&modelName=SPECIAL')
    expect(prefix).toBe('editions/detail?model=33&modelName=SPECIAL&id=');
  })
})
