import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {GreetingInput} from '../../src/components/GreetingInput';

describe('GreetingInput', () => {
  let greetingInput;
  beforeEach(() => {
    greetingInput = shallow(<GreetingInput />);
  });
  it('should exist', () => {
    expect(greetingInput.find('.greeting-input')).to.have.length(1);
  });
  it('should store the initial input in the state', () => {
    expect(greetingInput.state('greetingMessage')).to.equal('');
  });
  it('should store the new input in the state', () => {
    greetingInput.find('input').simulate('change', { target: { value: 'new message' } });
    expect(greetingInput.state('greetingMessage')).to.equal('new message');
  });
});
