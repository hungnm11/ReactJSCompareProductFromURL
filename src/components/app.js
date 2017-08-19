import React, { Component } from 'react';
import InputURL from './InputURL';
import PageContent from './pageContent';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputURL />
        <PageContent />
      </div>
    );
  }
}
