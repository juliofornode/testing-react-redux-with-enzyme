import {createStore} from 'redux';

const INITIAL_STATE = '';

export const messageReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
  case 'LOAD_MESSAGE':
    return action.payload;
  default:
    return state;
  }
};

export function newStore() {
  return createStore(messageReducer);
}
