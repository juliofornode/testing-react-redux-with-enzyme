import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import App from '../../src/components/App';
import DisplayGreeting from '../../src/components/DisplayGreeting';

describe('App', () => {
  it('app should exist', () => {
    let app = shallow(<App />);
    expect(app.find('.my-app')).to.have.length(1);
  });
});
