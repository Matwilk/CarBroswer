import React from 'react'

import CarCombo from '.'

let wrapper

const defaultProps = {
  name: 'justsomename',
  onSubmit: jest.fn()
}

describe('<CarCombo />', () => {
  describe('When the CarCombo component is rendered', () => {
    beforeEach(() => {
      wrapper = shallow(<CarCombo {...defaultProps} />)
    })

    it('should render cat select with MRMT options', () => {
      const catSelect = wrapper.find('Select').at(0);
      expect(catSelect.prop('name')).toBe(`cat-${defaultProps.name}`);
      expect(catSelect.find('option').at(0).text()).toBe('Make');
      expect(catSelect.find('option').at(1).text()).toBe('Range');
      expect(catSelect.find('option').at(2).text()).toBe('Model');
      expect(catSelect.find('option').at(3).text()).toBe('Derivative');
    })

    it('should render id select with ham and cap options', () => {
      const idSelect = wrapper.find('Select').at(1);
      expect(idSelect.prop('name')).toBe(`id-${defaultProps.name}`);
      expect(idSelect.find('option').at(0).text()).toBe('Cap ID');
      expect(idSelect.find('option').at(1).text()).toBe('Ham ID');    
    })

    it('should render search input', () => {
      expect(wrapper.find('SearchInput')).toHaveLength(1); 
    })
  })

})
