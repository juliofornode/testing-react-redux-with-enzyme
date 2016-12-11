import {expect} from 'chai';
import {messageReducer, newStore} from '../../src/reducers/messageReducer';

describe('testing the store', () => {
  it('creates a new store with the current reducer and tests that it returns the expected initial state', () => {
    const miStore = newStore(messageReducer);
    expect(miStore.getState()).to.equal('');
  });
  it('the store dispatches an action and returns the expected new state', () => {
    const miStore = newStore(messageReducer);
    miStore.dispatch({ type: 'LOAD_MESSAGE', payload: 'today is Sunday' });
    expect(miStore.getState()).to.equal('today is Sunday');
  });

});
