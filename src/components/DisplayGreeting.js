import React, {Component, PropTypes} from 'react';
import GreetingInput from './GreetingInput';
import {connect} from 'react-redux';

export class DisplayGreeting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let mensaje;
    if(!this.props.message) {
      mensaje = 'Initial Message';
    } else {
      mensaje = this.props.message;
    }
    return (
      <div className="display-greeting">
        <h3 className="initial-greeting">This is the {mensaje}</h3>
        <GreetingInput />
      </div>
    );
  }
}

DisplayGreeting.propTypes = {
  message: PropTypes.string
};

function mapStateToProps(state) {
  return {
    message: state.message
  };
}

export default connect(mapStateToProps)(DisplayGreeting);
