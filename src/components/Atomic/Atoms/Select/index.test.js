import React from 'react'

import Select from '.'

let wrapper

const defaultProps = {
  value: 'val',
  name: 'testSelect',
  onChange: jest.fn(),
  children: <div />
};

describe('<Select />', () => {
  const wrapper = shallow(<Select {...defaultProps} />);

  describe('render()', () => {
    it('should demonstate a BAD test', () => {
      const wrapperForABadTest = shallow(<Select {...defaultProps} />);
      expect(wrapperForABadTest).toHaveLength(1);

      // THIS WILL ALWAYS PASS
    })

    it('should render the select element', () => {
      expect(wrapper.find('select').prop('value')).toBe(defaultProps.value);
      expect(wrapper.find('select').prop('name')).toBe(defaultProps.name);
    })

    it('should render the children', () => {
      expect(wrapper.find('select').children().containsMatchingElement(defaultProps.children)).toBe(true);
    })
  })

  describe('onClick', () => {
    wrapper.find('select').simulate('change');
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });
})
