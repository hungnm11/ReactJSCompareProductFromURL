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

  renderField(field) {
    return (
      <div className="form-group row">
        <label htmlFor={field.htmlFor} className="col-md-2 col-form-label">{field.label}</label>
        <div className="col-md-10">
          <input
            className={field.className} 
            type={field.type}
            placeholder={field.placeholder}
            onChange={field.input.onChange}
            id={field.htmlFor}
          />
        </div>
        <span>{field.meta.touched ? field.meta.error : ''}</span>
      </div>
    );
  }

  onInputChange(event) {
    console.log(event);

  }

  onFormSubmit(event) {
    console.log('Event', event);
    this.props.getULR(event);
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
          className="form-control"
          htmlFor="url1"
          component={this.renderField}
          onChange={this.onInputChange}
        />

        <Field
          label="URL 2"
          name="url2"
          type="text"
          placeholder="URL 2"
          className="form-control"
          htmlFor="url2"
          component={this.renderField}
          onChange={this.onInputChange}
        />
      
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
}

const validate = (values) => {
  console.log('values==>', values);
  const errors = {};

  if (!values.url1) {
    errors.url1 = 'Please enter url.'
  }

  if (!values.url2) {
    errors.url2 = 'Please enter url.'
  }

  return errors;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getULR }, dispatch);
};

export default reduxForm({
  validate,
  form: 'inputUrlForm'
})(connect(null, mapDispatchToProps)(InputURL));