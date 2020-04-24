import React from 'react'

import Breadcrumbs from '.'

describe('<Breadcrumbs />', () => {
  describe('render()', () => {
    it('should render just the selected Home with no Link', () => {
      const wrapper = shallow(<Breadcrumbs search='' />);

      expect(wrapper.find('.selectedCrumb').text()).toBe('Home');
      expect(wrapper.find('.linkContainer')).toHaveLength(0);
    })

    it('should render clickable home with non clickable selected make', () => {
      const wrapper = shallow(<Breadcrumbs search={'?make=11&makeName=VW'} />);

      expect(wrapper.find('.selectedCrumb').text()).toBe('VW');
      expect(wrapper.find('.linkContainer').at(0).find('Link').prop('to')).toBe('/');
      expect(wrapper.find('.linkContainer').at(0).find('Link').text()).toBe('Home');
    })

    it('should render clickable home & make with non clickable selected range', () => {
      const wrapper = shallow(<Breadcrumbs search={'?make=11&makeName=VW&range=22&rangeName=POLO'} />);

      expect(wrapper.find('.selectedCrumb').text()).toBe('POLO');
      expect(wrapper.find('.linkContainer')).toHaveLength(2);
      expect(wrapper.find('.linkContainer').at(0).find('Link').prop('to')).toBe(`/`);
      expect(wrapper.find('.linkContainer').at(0).find('Link').text()).toBe('Home');
      expect(wrapper.find('.linkContainer').at(1).find('Link').prop('to')).toBe(`/cars?make=11&makeName=VW`);
      expect(wrapper.find('.linkContainer').at(1).find('Link').text()).toBe('VW');
    })

    it('should render clickable home, make & range with non clickable selected model', () => {
      const wrapper = shallow(<Breadcrumbs search={'?make=11&makeName=VW&range=22&rangeName=POLO&cat=model&id=cap&value=33&model=33&modelName=SPECIAL'} />);

      expect(wrapper.find('.selectedCrumb').text()).toBe('SPECIAL'); 
      expect(wrapper.find('.linkContainer')).toHaveLength(3);
      expect(wrapper.find('.linkContainer').at(0).find('Link').prop('to')).toBe(`/`);
      expect(wrapper.find('.linkContainer').at(0).find('Link').text()).toBe('Home');
      expect(wrapper.find('.linkContainer').at(1).find('Link').prop('to')).toBe(`/cars?make=11&makeName=VW`);
      expect(wrapper.find('.linkContainer').at(1).find('Link').text()).toBe('VW');
      expect(wrapper.find('.linkContainer').at(2).find('Link').prop('to')).toBe(`/cars?make=11&makeName=VW&range=22&rangeName=POLO`);
      expect(wrapper.find('.linkContainer').at(2).find('Link').text()).toBe('POLO');
    })

    it('should render clickable home, make, range & model with non clickable selected edition', () => {
      const wrapper = shallow(<Breadcrumbs search={'?make=11&makeName=VW&range=22&rangeName=POLO&model=33&modelName=SPECIAL&id=44&name=ABCDEF'} />);

      expect(wrapper.find('.selectedCrumb').text()).toBe('ABCDEF'); 
      expect(wrapper.find('.linkContainer')).toHaveLength(4);
      expect(wrapper.find('.linkContainer').at(0).find('Link').prop('to')).toBe(`/`);
      expect(wrapper.find('.linkContainer').at(0).find('Link').text()).toBe('Home');
      expect(wrapper.find('.linkContainer').at(1).find('Link').prop('to')).toBe(`/cars?make=11&makeName=VW`);
      expect(wrapper.find('.linkContainer').at(1).find('Link').text()).toBe('VW');
      expect(wrapper.find('.linkContainer').at(2).find('Link').prop('to')).toBe(`/cars?make=11&makeName=VW&range=22&rangeName=POLO`);
      expect(wrapper.find('.linkContainer').at(2).find('Link').text()).toBe('POLO');
      expect(wrapper.find('.linkContainer').at(3).find('Link').prop('to')).toBe(`/editions?make=11&makeName=VW&range=22&rangeName=POLO&cat=model&id=cap&value=33&modelName=SPECIAL&model=33`);
      expect(wrapper.find('.linkContainer').at(3).find('Link').text()).toBe('SPECIAL');

    })
  })
})
