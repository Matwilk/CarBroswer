import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

jest.mock('./components/Atomic/Organisms/MakesGrid');
jest.mock('./components/Atomic/Organisms/CarBrowser');
jest.mock('./components/Atomic/Organisms/CarDetail');
jest.mock('./components/hoc/withFetch');

jest.mock('react-redux', () => ({
  useSelector: jest.fn(() => 'test'),
  useDispatch: jest.fn()
}));

import { App } from './App';



const mockStore = configureStore([]);

const initialState = {
  makes: {},
  cars: {},
  editions: {},
  detail: {},
  env: 'test'
};


describe('<App>', () => {

  const defaultProps = {
    location: { search : '?something=blah'},
    env: 'test'
  }

  const wrapper = shallow(<App {...defaultProps} />);

  describe('render()', () => {
    it('should render Header', () => {
      expect(wrapper.find('div.header Memo(Header)')).toHaveLength(1);
    })

    it('shoulder render CarCombo', () => {
      expect(wrapper.find('CarCombo').prop('name')).toBe('cars');
    })

    it('shoulder render Breadbrumbs', () => {
      expect(wrapper.find('Breadcrumbs').prop('search')).toBe(defaultProps.location.search);
    })
  });
});
