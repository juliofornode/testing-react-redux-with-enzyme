import {expect} from 'chai';
import {messageReducer} from '../../src/reducers/messageReducer';

describe('testing the reducer', () => {
  it('passes an action to the reducer and returns the expected state', () => {
    expect(messageReducer('', {type: 'LOAD_MESSAGE', payload: 'today is Sunday'})).to.equal('today is Sunday');
  });
});
