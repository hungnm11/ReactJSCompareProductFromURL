import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class InputURL extends Component {

  renderField(field) {
    return (
      <div>
        {field.label}
        <input
          type={field.type}
          placeholder={field.placeholder}
        />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          label="URL 1"
          name="url1"
          type="text"
          placeholder="URL 1"
          component={this.renderField}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'inputUrlForm'
})(InputURL);