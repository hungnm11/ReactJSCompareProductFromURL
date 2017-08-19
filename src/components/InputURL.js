import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { getULR } from '../actions/index';

class InputURL extends Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      url1: '',
      url2: ''
    };
  }

  onInputChange(event) {
    console.log(event);

  }

  onFormSubmit(event) {
    console.log('Event', event);
  }

  render() {
    const { handleSubmit } = this.props;
    console.log('PORPS==>',this.props);
    return (
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <Field
          label="URL 1"
          name="url1"
          type="text"
          placeholder="URL 1"
          component="input"
          onChange={this.onInputChange}
        />

        <Field
          label="URL 2"
          name="url2"
          type="text"
          placeholder="URL 2"
          component="input"
          onChange={this.onInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getULR }, dispatch);
};

export default reduxForm({
  form: 'inputUrlForm'
})(connect(null, mapDispatchToProps)(InputURL));