import React, { Component } from 'react';
import * as firebase from 'firebase';

import Header from '../common/Header';
import Footer from '../common/Footer';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetails: null,
            loading: true,
            sessionId: null
        };
    }

    componentDidMount() {
        this.uploadProductInfo();
        this.checkSessionId();
    }

    checkSessionId() {
        let _sessionId = localStorage.getItem('sessionId');
        if (!_sessionId) {
            let _id = (+new Date()).toString(36);
            localStorage.setItem('sessionId', _id);
            this.setState({sessionId: _id});
        } else {
            this.setState({sessionId: _sessionId});
        }

    }

    uploadProductInfo() {
        firebase.database().ref().child('product').orderByChild('href').equalTo(this.props.params.slug).on('value', snap => {
            this.setState({productDetails: Object.values(snap.val())[0]});
            this.setState({loading: false});
        });
    }

    handleAddToCart(quan) {
        this.checkSessionId();
        firebase.database().ref().child('product').orderByChild('href').equalTo(this.props.params.slug).on('value', snap => {
            let _productId = Object.keys(snap.val())[0];
            let _item = {
                sessionId: this.state.sessionId,
                productId: _productId,
                quantity: quan
            };
            firebase.database().ref().child('cart').push(_item);
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div className="container">
                        {this.state.loading ? (
                            <div>LOADING...</div>
                        ) : (
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="product-gallery">
                                        <div className="product-media-container">
                                            <img className="media" alt="Ваш товар" src={this.state.productDetails.img1}/>
                                        </div>
                                        <p>{this.state.productDetails.description}</p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <header>
                                        <h2>Ваш товар</h2>
                                        <div className="label">{this.state.productDetails.href}</div>
                                        <div className="product-prices">{this.state.productDetails.price}</div>
                                    </header>
                                    <div className="product-form">
                                        <label>Количество</label>

                                        <select name="quantity" id="">
                                            <option value="1" selected>1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <button type="button" onClick={() => this.handleAddToCart(2)}>ДОБАВИТЬ В КОРЗИНУ</button>
                                    </div>
                                    <ul className="info-sections">
                                        <li className="info-section active">
                                            <h3>О ТОВАРЕ</h3>
                                            <p>{this.state.productDetails.descriptionFull}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default ProductDetails;