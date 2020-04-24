import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import withFetch, { FetchComponent } from './';

const mockStore = configureStore([]);

const TestComp = ({}) => <div>test </div>;
TestComp.fetch = () => {
  return Promise.resolve('somedata');
}

const type = 'detail';
const initialState = {
  makes: {},
  cars: {},
  editions: {},
  detail: {}
};

let TestWithFetch = withFetch(TestComp, type);

describe('withFetch', () => {
  describe('wrapped component', () => {
    it('should render the wrapper component', async () => {
      const search = 'searchTerm';
      const stateWithPrefetchedData = {
        ...initialState,
        [type]: {
          [search]: [
            {}
          ]
        }
      }
      const wrapper = await mount(
        <Provider store={mockStore(stateWithPrefetchedData)}>
          <TestWithFetch location={{search}}/>
        </Provider>
      );

      expect(wrapper.find('TestComp')).toHaveLength(1);
    })
  });

  describe('FetchComponent', () => {
    const defaultProps = {
      location: {
        search: 'blah'
      },
      dataDispatch: {
        loading: jest.fn(),
        [type]: jest.fn()
      },
      state: {...initialState}
    };

    it('should fetch on initial mount', async () => {
      const wrapper = await shallow(<FetchComponent { ...defaultProps } />);

      expect(defaultProps.dataDispatch.loading).toHaveBeenCalledTimes(1);
      expect(defaultProps.dataDispatch.detail).toHaveBeenCalledTimes(1);
      expect(defaultProps.dataDispatch.detail).toHaveBeenCalledWith({
        key: 'blah',
        data: 'somedata'
      })
    })
  });
});
