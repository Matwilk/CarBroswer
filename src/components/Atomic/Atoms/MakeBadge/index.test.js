import React from 'react'

import MakeBadge from '.'

let wrapper

const defaultProps = {
  name: 'VW',
  sourceId: '111'
};

describe('<MakeBadge />', () => {

  wrapper = shallow(<MakeBadge {...defaultProps} />);

  describe('render()', () => {
    it('should not render the Link element if no prefix', () => {
      expect(wrapper.find('Link')).toHaveLength(0);
    })

    it('should render the image', () => {
      expect(wrapper.find('div.badge img').prop('src')).toBe(`https://www.capconnect.co.uk/CAPConnect/Webservice/ImagingService.svc/GetLogo?manufacturer=${defaultProps.name}`);
    })

    it('should render the name', () => {
      expect(wrapper.find('div.badge div.make').text('src')).toBe(defaultProps.name);
    })

    it('should render the Link element', () => {
      const wrapper = shallow(<MakeBadge {...defaultProps} prefix='prefix?' />);

      expect(wrapper.find('Link').prop('to')).toBe(`prefix?make=${defaultProps.sourceId}&makeName=${defaultProps.name}`);
    })
  })
})
