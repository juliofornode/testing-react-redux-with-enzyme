import {expect} from 'chai';
import GreetingInput from '../../src/components/GreetingInput';
import React from 'react';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

describe('testing mapStateToProps with shallowWithStore (enzyme-redux module)', () => {

  const ReactComponent = GreetingInput;

  describe('state', () => {
    it('returns the expected state', () => {
      const expectedState = 'expectedState';
      const mapStateToProps = (state) => ({
        state,
      });
      const ConnectedComponent = connect(mapStateToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
      expect(component.props().state).to.equal(expectedState);
    });
  });

  describe('testing mapDispatchToProps with shallowWithStore (enzyme-redux module)', () => {
    it('the action is dispatched', () => {
      const action = {
        type: 'type',
      };
      const mapDispatchToProps = (dispatch) => ({
        dispatchProp() {
          dispatch(action);
        },
      });
      const store = createMockStore();

      const ConnectedComponent = connect(undefined, mapDispatchToProps)(ReactComponent);
      const component = shallowWithStore(<ConnectedComponent />, store);
      component.props().dispatchProp();
      expect(store.isActionDispatched(action)).to.equal(true);
    });
  });
});
