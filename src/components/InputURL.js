import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class InputURL extends Component {

  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      url1: '',
      url2: ''
    };
  }

  // renderField(field) {
  //   return (
  //     <div>
  //       {field.label}
  //       <input
  //         type={field.type}
  //         placeholder={field.placeholder}
  //         onChange={field.input.onChange}
  //       />
  //     </div>
  //   );
  // }

  onInputChange(event) {
    console.log(event);

  }

  onFormSubmit(event) {
    console.log('Event', event);
  }

  render() {
    const { handleSubmit } = this.props;
    console.log(this.props);
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

export default reduxForm({
  form: 'inputUrlForm'
})(InputURL);