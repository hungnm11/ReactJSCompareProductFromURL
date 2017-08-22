
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageContent extends Component {

  renderCompareProduct() {
    const { page1, page2 } = this.props.content.data;
    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Compare</th>
              <td>
                <div className="product">
                  <img src={page1.imageProduct} className="img-thumbnail center-block" />
                  <p className="product-name">{page1.titleProduct}</p>
                </div>
              </td>
              <td>
                <div className="product">
                  <img src={page2.imageProduct} className="img-thumbnail center-block" />
                  <p className="product-name">{page2.titleProduct}</p>
                </div>
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                <div dangerouslySetInnerHTML={{ __html: page1.price }} className="product-price-info" />
              </td>
              <td>
                <div dangerouslySetInnerHTML={{ __html: page2.price }} className="product-price-info" />
              </td>
            </tr>
            <tr>
              <th scope="row">Average Product Rating</th>
              <td>
                <div dangerouslySetInnerHTML={{__html: page1.rating}} />
              </td>
              <td>
              <div dangerouslySetInnerHTML={{__html: page2.rating}} />
              </td>
            </tr>
            <tr>
              <th scope="row">Specifications</th>
              <td>
                <div className="product-specifications">
                  <div dangerouslySetInnerHTML={{ __html: page1.specifications.desc }} />

                </div>
              </td>
              <td>
                <div className="product-specifications">
                  <div dangerouslySetInnerHTML={{ __html: page2.specifications.desc }} />

                </div>
              </td>
            </tr>
            <tr>
              <th></th>
              <td>
                <strong>General Features:</strong>
                <table dangerouslySetInnerHTML={{ __html: page1.specifications.descTbl }} />
              </td>
              <td>
              <strong>General Features:</strong>
              <table dangerouslySetInnerHTML={{ __html: page2.specifications.descTbl }} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const progress = (
      <div className="row">
        <div className="loader center-block"></div>
      </div>
    );
    return (
      <div className="row">
        {this.props.content.isFetching && progress}
        {Object.keys(this.props.content.data).length ? this.renderCompareProduct() : null}
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