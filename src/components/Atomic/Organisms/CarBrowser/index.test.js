import React from 'react'

import { CarBrowser } from '.'

let wrapper

jest.mock('./generatePrefix', () => () => { 
  return {
    prefix: 'mockedprefix',
    type: 'range', 
  }
});

const dataForKey = [
  { sourceId: '11', name: 'Car1', hamId: 'h1' },
  { sourceId: '22', name: 'Car2', hamId: 'h2' },
  { sourceId: '33', name: 'Car3', hamId: 'h3' }
]
const defaultProps = {
  data: {
    key: dataForKey
  },
  location: {
    search: 'key'
  }
}

describe('<CarBrowser />', () => {
  it('should render rows for matching search term', () => {
    wrapper = shallow(<CarBrowser {...defaultProps} />)
    const results = wrapper.find('.results').children();
    expect(wrapper.find('div > ResultsRow')).toHaveLength(3);
    expect(wrapper.find('div > ResultsRow').at(0).prop('prefix')).toBe('mockedprefix')
    expect(wrapper.find('div > ResultsRow').at(0).prop('type')).toBe('range')
    expect(wrapper.find('div > ResultsRow').at(0).prop('id')).toBe(dataForKey[0].sourceId)
    expect(wrapper.find('div > ResultsRow').at(0).prop('name')).toBe(dataForKey[0].name)
    expect(wrapper.find('div > ResultsRow').at(1).prop('prefix')).toBe('mockedprefix')
    expect(wrapper.find('div > ResultsRow').at(1).prop('type')).toBe('range')
    expect(wrapper.find('div > ResultsRow').at(1).prop('id')).toBe(dataForKey[1].sourceId)
    expect(wrapper.find('div > ResultsRow').at(1).prop('name')).toBe(dataForKey[1].name)
    expect(wrapper.find('div > ResultsRow').at(2).prop('prefix')).toBe('mockedprefix')
    expect(wrapper.find('div > ResultsRow').at(2).prop('type')).toBe('range')
    expect(wrapper.find('div > ResultsRow').at(2).prop('id')).toBe(dataForKey[2].sourceId)
    expect(wrapper.find('div > ResultsRow').at(2).prop('name')).toBe(dataForKey[2].name)
  })

  it ('should map state to props', () => {
    const props = CarBrowser.mapStateToProps({makes: 'blah'})
    expect(props.makes).toBe('blah');
  })
})
