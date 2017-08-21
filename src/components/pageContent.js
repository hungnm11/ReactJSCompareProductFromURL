
import React, { Component } from  'react';
import { connect } from 'react-redux';

class PageContent extends Component {

  renderCompareProduct() {
    const { page1, page2 } = this.props.content.data;
    return (
      <div>
      <table className="table">
      <thead>
        <tr>
          <th>Compare</th>
          <td>
            <img src={page1.imageProduct} className="img-fluid" />
            {page1.titleProduct}
            <div dangerouslySetInnerHTML={{__html: page1.price }} />
            
          </td>
          <td>
            <img src={page2.imageProduct} className="img-fluid" />
            {page2.titleProduct}
            <div dangerouslySetInnerHTML={{__html: page2.price}} />
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Specifications</th>
          <td>
            <div>
            <div dangerouslySetInnerHTML={{__html: page1.specifications.desc}} />
            General Features:
            <table dangerouslySetInnerHTML={{__html: page1.specifications.descTbl}} />
            </div>
          </td>
          <td>
            <div>
            <div dangerouslySetInnerHTML={{__html: page2.specifications.desc}} />
            General Features:
            <table dangerouslySetInnerHTML={{__html: page2.specifications.descTbl}} />
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">Product Reviews</th>
          <td>Larry</td>
          <td>the Bird</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
      </tbody>
    </table>
    </div>
    );
  }

  render() {
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