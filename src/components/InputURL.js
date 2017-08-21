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
      <div className="col-md-5">
        <label htmlFor={field.htmlFor} className="sr-only">{field.label}</label>
        <div className="">
          <input
            className={field.className}
            type={field.type}
            placeholder={field.placeholder}
            onChange={field.input.onChange}
            id={field.htmlFor}
          />
        </div>
        <span className="text-danger">{field.meta.touched ? field.meta.error : ''}</span>
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
    return (
      <div className="row">
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} >
        <div className="form-row">
          <Field
            label="URL 1"
            name="url1"
            type="text"
            placeholder="https://lazada.com/your_product"
            className="form-control"
            htmlFor="url1"
            component={this.renderField}
            onChange={this.onInputChange}
          />

          <Field
            label="URL 2"
            name="url2"
            type="text"
            placeholder="https://lazada.com/your_product"
            className="form-control"
            htmlFor="url2"
            component={this.renderField}
            onChange={this.onInputChange}
          />
          <div className="col-md-2">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
      </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.url1) {
    errors.url1 = 'Please enter your URL.'
  }

  if (!values.url2) {
    errors.url2 = 'Please enter your URL.'
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