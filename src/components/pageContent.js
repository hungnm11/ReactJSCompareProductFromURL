
import React, { Component } from  'react';
import { connect } from 'react-redux';

class PageContent extends Component {

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }

  render() {
    console.log('Hello',this.props);
    if (this.props.content.isFetching) {
      
      return <div>Loading...</div>;
    }
    return (
      <div dangerouslySetInnerHTML={{__html: this.props.content.data.page1}} />
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state.urls);
  return {
   content: state.urls
  };
};

export default connect(mapStateToProps)(PageContent);