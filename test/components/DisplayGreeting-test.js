import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import {DisplayGreeting} from '../../src/components/DisplayGreeting';
import {GreetingInput} from '../../src/components/GreetingInput';

describe('DisplayGreeting', () => {
  let displayGreeting;
  let displayGreetingMounted;
  let greetingInputMounted;
  beforeEach(() => {
    displayGreeting = shallow(<DisplayGreeting />);
    //displayGreetingMounted = mount(<DisplayGreeting />);
    //greetingInputMounted = mount(<GreetingInput />);
  });
  it('display greeting should exist', () => {
    expect(displayGreeting.find('.display-greeting')).to.have.length(1);
  });

  it('should display the initial greeting', () => {
    expect(displayGreeting.find('.initial-greeting')).to.have.length(1);
  });
  xit('should store the new input in the state', () => {
    greetingInputMounted.find('input').simulate('change', { target: { value: 'new message' } });
    expect(greetingInputMounted.state('greetingMessage')).to.equal('new message');
  });
  xit('should display the new greeting message', () => {
    displayGreetingMounted.render(GreetingInput).find('input').simulate('change', { target: { value: 'el nuevo mensaje' } });
    //displayGreetingMounted.update();
    expect(displayGreetingMounted.state('message')).to.equal('el nuevo mensaje');
  });

});
