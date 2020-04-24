import React from 'react'

import Header from '.'

describe('<Header />', () => {
  const wrapper = shallow(<Header />);

  describe('render()', () => {
    it('should render the elements', () => {
      expect(wrapper.find('header').children().at(1).text()).toBe('Car Showroom');
      expect(wrapper.find('img')).toHaveLength(2);
    })
  })
})
