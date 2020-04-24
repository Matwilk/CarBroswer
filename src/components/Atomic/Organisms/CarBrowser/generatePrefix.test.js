import React from 'react'

import generatePrefix from './generatePrefix'

const rangeItem = {
  sourceId: 1
};

const modelItem = {
  modId: 2,
  sourceId: 2,
  ranId: 1
}

const editionItem = {
  ranId: 1,
  modId: 2,
  sourceId: 3,
  trimHamId: 4
}

describe('generatePrefix', () => {
  it('should return prefix & type for range data', () => {
    const { type, prefix } = generatePrefix({
      key: [rangeItem]
    }, 'key')
    expect(type).toBe('range');
    expect(prefix).toBe('/cars?make=undefined&makeName=undefined&');
  });

  it('should return prefix & type for model data', () => {
    const { type, prefix } = generatePrefix({
      key: [modelItem]
    }, 'key')
    expect(type).toBe('model');
    expect(prefix).toBe('/editions?cat=model&id=cap&value=');
  });

  it('should return prefix & type for edition data', () => {
    const { type, prefix } = generatePrefix({
      key: [editionItem]
    }, 'key')
    expect(type).toBe('edition');
    expect(prefix).toBe('/cars?trim=');
  });
})
