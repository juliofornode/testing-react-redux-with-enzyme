import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadMessage} from '../actions/actions';

export class GreetingInput extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingMessage: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(eventObject) {
    let message = eventObject.target.value;
    this.setState({ greetingMessage: message });
  }

  handleSubmit(eventObject) {
    eventObject.preventDefault();
    this.props.loadMessage(this.state.greetingMessage);
    this.setState({ greetingMessage: '' });
  }

  render() {
    return(
      <div className="greeting-input">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.greetingMessage}></input>
        </form>
      </div>
    );
  }
}

GreetingInput.propTypes = {
  passToDisplay: PropTypes.func,
  loadMessage: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadMessage: loadMessage }, dispatch);
}

export default connect(null, mapDispatchToProps)(GreetingInput);
