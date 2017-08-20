
import React, { Component } from  'react';
import { connect } from 'react-redux';

class PageContent extends Component {

  renderCompareProduct() {
    return (
      <div>
      <table className="table">
      <thead>
        <tr>
          <th>Compare</th>
          <th>Product 1</th>
          <th>Product 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <th scope="row">Specifications</th>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <th scope="row">Product Reviews</th>
          <td>Larry</td>
          <td>the Bird</td>
        </tr>
      </tbody>
    </table>
    <div className="col-md-6" dangerouslySetInnerHTML={{__html: this.props.content.data.page1}} />
    <div className="col-md-6" dangerouslySetInnerHTML={{__html: this.props.content.data.page2}} />
    </div>
    );
  }

  render() {
    console.log('Hello',Object.keys(this.props.content.data));
    
    return (
      <div className="row">
        { this.props.content.isFetching && <div>Loading...</div> }
        { Object.keys(this.props.content.data).length ? this.renderCompareProduct() : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
   content: state.urls
  };
};

export default connect(mapStateToProps)(PageContent);