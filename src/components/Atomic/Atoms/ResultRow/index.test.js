import React from 'react'

import ResultRow from '.'

let wrapper

const defaultProps = {
  prefix: 'prefix/',
  name: 'something',
  id: '111',
};

const images = {
    urls: {
      mainFullsize: 'some link'
    }
}

describe('<ResultRow />', () => {
  describe('render()', () => {
    it('should render the ResultRow for model', () => {
      const wrapper = shallow(<ResultRow {...defaultProps} type='model' />);
      expect(wrapper.find('Link').prop('to')).toBe(`${defaultProps.prefix}${defaultProps.id}&modelName=${defaultProps.name}&model=${defaultProps.id}`);
      expect(wrapper.find('span').text()).toBe(defaultProps.name);
    })

    it('should render the ResultRow for default', () => {
      const wrapper = shallow(<ResultRow {...defaultProps} type='range' />);
      expect(wrapper.find('Link').prop('to')).toBe(`${defaultProps.prefix}range=${defaultProps.id}&rangeName=${defaultProps.name}`);
      expect(wrapper.find('span').text()).toBe(defaultProps.name);
    })

    it('should render the ResultRow for edition with default image', () => {
      const wrapper = shallow(<ResultRow {...defaultProps} type='edition' images={images}/>);
      expect(wrapper.find('Link').prop('to')).toBe(`${defaultProps.prefix}${defaultProps.id}&name=${defaultProps.name}`);
      expect(wrapper.find('img').prop('src')).toBe(images.urls.mainFullsize);
      expect(wrapper.find('span').text()).toBe(defaultProps.name);
    })

    it('should render the ResultRow for edition with image', () => {
      const wrapper = shallow(<ResultRow {...defaultProps} type='edition' />);
      expect(wrapper.find('Link').prop('to')).toBe(`${defaultProps.prefix}${defaultProps.id}&name=${defaultProps.name}`);
      expect(wrapper.find('img').prop('src')).toBe(`//cdn.jsdelivr.net/emojione/assets/png/1f697.png`);
      expect(wrapper.find('span').text()).toBe(defaultProps.name);
    })
  })
})
