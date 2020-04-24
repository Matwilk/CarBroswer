import React from 'react'

import SelectInput from '.'

let wrapper

const defaultProps = {
  onSubmit: jest.fn()
};

describe('<SelectInput />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SelectInput {...defaultProps} />);
  });

  it('should update state with key input', () => {
    const event = { target: { value: 'Hello' } };
    wrapper.find('input').simulate('change', event);
    expect(wrapper.state('text')).toEqual(event.target.value)
    // expect(defaultProps.onSubmit).toHaveBeenCalledWith(event);
  })

  it('should call onSubmit with when form submitted', () => {
    const event = { preventDefault: jest.fn() };
    const text = 'sometext'
    wrapper.setState({text});
    wrapper.find('form').simulate('submit', event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(defaultProps.onSubmit).toHaveBeenCalledWith(text);
  })

  // TODO: A test for clearing the input
})
