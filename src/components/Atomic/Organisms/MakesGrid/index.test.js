import React from 'react'

import { MakesGrid } from '.'

let wrapper

const data = {
  makes: {
    '11': { sourceId: 11, name: 'M1' },
    '22': { sourceId: 22, name: 'M2' },
    '33': { sourceId: 33, name: 'M3' }   
  }

}

describe('<MakesGrid />', () => {
  it('should render rows for matching search term', () => {
    wrapper = shallow(<MakesGrid data={data} />)

    expect(wrapper.find('div > Memo(MakeBadge)')).toHaveLength(3);
    expect(wrapper.find('div > Memo(MakeBadge)').at(0).prop('prefix')).toBe('cars?');
    expect(wrapper.find('div > Memo(MakeBadge)').at(0).prop('sourceId')).toEqual(data.makes['11'].sourceId);
    expect(wrapper.find('div > Memo(MakeBadge)').at(0).prop('name')).toEqual(data.makes['11'].name)
    expect(wrapper.find('div > Memo(MakeBadge)').at(1).prop('prefix')).toBe('cars?');
    expect(wrapper.find('div > Memo(MakeBadge)').at(1).prop('sourceId')).toEqual(data.makes['22'].sourceId);
    expect(wrapper.find('div > Memo(MakeBadge)').at(1).prop('name')).toEqual(data.makes['22'].name);
    expect(wrapper.find('div > Memo(MakeBadge)').at(2).prop('prefix')).toBe('cars?');
    expect(wrapper.find('div > Memo(MakeBadge)').at(2).prop('sourceId')).toEqual(data.makes['33'].sourceId);
    expect(wrapper.find('div > Memo(MakeBadge)').at(2).prop('name')).toEqual(data.makes['33'].name);
  })

  it ('should map state to props', () => {
    const props = MakesGrid.mapStateToProps({makes: 'blah'})
    expect(props.makes).toBe('blah');
  })
})
