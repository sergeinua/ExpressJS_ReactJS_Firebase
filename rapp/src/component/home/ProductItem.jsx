import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class ProductItem extends Component {
    handleProductDetails(slug) {
        browserHistory.push("/product/" + slug);
    }

    render() {
        return (
            <div className="col-sm-3">
                <div className="product-media">
                    <div onClick={() => this.handleProductDetails(this.props.href)}>
                        <product-image className="ng-pristine ng-untouched ng-valid ng-not-empty">
                            <img className="media-item active crop" alt="Ваш товар" src={this.props.img1}/>
                            <img className="media-item crop" alt="Ваш товар" src={this.props.img2}/>
                        </product-image>
                    </div>
                </div>
                <div className="product-details">
                    <div className="product-details-content-wrapper">
                        <product-title className="ng-pristine ng-untouched ng-valid ng-not-empty">
                            <h3 className="title product-title">
                                <a>{this.props.title}</a>
                            </h3>
                        </product-title>
                        <product-price className="ng-pristine ng-untouched ng-valid ng-not-empty">
                            <div data-hook="price-wrapper">
                                <span className="price">{this.props.price}</span>
                            </div>
                        </product-price>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItem;