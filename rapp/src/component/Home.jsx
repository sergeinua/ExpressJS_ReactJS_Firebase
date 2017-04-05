import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import pr_1_1_jpg from '../../img/pr-1-1.jpg';
import pr_1_3_jpg from '../../img/pr-1-3.jpg';
import pr_2_1_jpg from '../../img/pr-2-1.jpg';
import pr_2_3_jpg from '../../img/pr-2-3.jpg';
import pr_3_1_jpg from '../../img/pr-3-1.jpg';
import pr_3_3_jpg from '../../img/pr-3-3.jpg';
import pr_4_3_jpg from '../../img/pr-4-3.jpg';
import pr_5_3_jpg from '../../img/pr-5-3.jpg';
import pr_6_3_jpg from '../../img/pr-6-3.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div className="container shop">
                        <h2>Магазин</h2>

                        <div className="col-sm-3">
                            <div className="product-media">
                                <a href="#">
                                    <product-image className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <img className="media-item active crop" alt="Ваш товар" src={pr_1_1_jpg}/>
                                        <img className="media-item crop" alt="Ваш товар" src={pr_1_3_jpg}/>
                                    </product-image>
                                </a>
                                <product-quick-view className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                    <div className="overlay">
                                        <a className="action quickview" href="#">БЫСТРЫЙ ПРОСМОТР</a>
                                    </div>
                                </product-quick-view>
                            </div>
                            <div className="product-details" href="#">
                                <div className="product-details-content-wrapper">
                                    <product-title className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <h3 className="title product-title">
                                            <a>Ваш товар</a>
                                        </h3>
                                    </product-title>
                                    <product-price className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <div data-hook="price-wrapper">
                                            <span className="price">$5.99</span>
                                        </div>
                                    </product-price>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-media">
                                <a href="#">
                                    <product-image className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <img className="media-item active crop" alt="Ваш товар" src={pr_2_1_jpg}/>
                                        <img className="media-item crop" alt="Ваш товар" src={pr_2_3_jpg}/>
                                    </product-image>
                                </a>
                                <product-quick-view className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                    <div className="overlay">
                                        <a className="action quickview" href="#">БЫСТРЫЙ ПРОСМОТР</a>
                                    </div>
                                </product-quick-view>
                            </div>
                            <div className="product-details" href="#">
                                <div className="product-details-content-wrapper">
                                    <product-title className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <h3 className="title product-title">
                                            <a>Ваш товар</a>
                                        </h3>
                                    </product-title>
                                    <product-price className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <div data-hook="price-wrapper">
                                            <span className="price">$19.99</span>
                                        </div>
                                    </product-price>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-media">
                                <a href="#">
                                    <product-image className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <img className="media-item active crop" alt="Ваш товар" src={pr_3_1_jpg}/>
                                        <img className="media-item crop" alt="Ваш товар" src={pr_3_3_jpg}/>
                                    </product-image>
                                    <span className="ribbon">Скидка 25%</span>
                                </a>
                                <product-quick-view className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                    <div className="overlay">
                                        <a className="action quickview" href="#">БЫСТРЫЙ ПРОСМОТР</a>
                                    </div>
                                </product-quick-view>
                            </div>
                            <div className="product-details" href="#">
                                <div className="product-details-content-wrapper">
                                    <product-title className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <h3 className="title product-title">
                                            <a>Ваш товар</a>
                                        </h3>
                                    </product-title>
                                    <product-price className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <div data-hook="price-wrapper">
                                            <span className="price is-price-compare">$19.99</span>
                                            <span className="price">$14.99</span>
                                        </div>
                                    </product-price>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-media">
                                <a href="#">
                                    <product-image className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <img className="media-item active crop" alt="Ваш товар" src={pr_4_3_jpg}/>
                                    </product-image>
                                </a>
                                <product-quick-view className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                    <div className="overlay">
                                        <a className="action quickview" href="#">БЫСТРЫЙ ПРОСМОТР</a>
                                    </div>
                                </product-quick-view>
                            </div>
                            <div className="product-details" href="#">
                                <div className="product-details-content-wrapper">
                                    <product-title className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <h3 className="title product-title">
                                            <a>Ваш товар</a>
                                        </h3>
                                    </product-title>
                                    <product-price className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <div data-hook="price-wrapper">
                                            <span className="price">$19.99</span>
                                        </div>
                                    </product-price>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-media">
                                <a href="#">
                                    <product-image className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <img className="media-item active crop" alt="Ваш товар" src={pr_5_3_jpg}/>
                                    </product-image>
                                </a>
                                <product-quick-view className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                <span className="ribbon">
                                    Новинка
                                </span>
                                    <div className="overlay">
                                        <a className="action quickview" href="#">БЫСТРЫЙ ПРОСМОТР</a>
                                    </div>
                                </product-quick-view>
                            </div>
                            <div className="product-details" href="#">
                                <div className="product-details-content-wrapper">
                                    <product-title className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <h3 className="title product-title">
                                            <a>Ваш товар</a>
                                        </h3>
                                    </product-title>
                                    <product-price className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <div data-hook="price-wrapper">
                                            <span className="price">$19.99</span>
                                        </div>
                                    </product-price>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="product-media">
                                <a href="#">
                                    <product-image className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <img className="media-item active crop" alt="Ваш товар" src={pr_6_3_jpg}/>
                                    </product-image>
                                </a>
                                <product-quick-view className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                    <div className="overlay">
                                        <a className="action quickview" href="#">БЫСТРЫЙ ПРОСМОТР</a>
                                    </div>
                                </product-quick-view>
                            </div>
                            <div className="product-details" href="#">
                                <div className="product-details-content-wrapper">
                                    <product-title className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <h3 className="title product-title">
                                            <a>Ваш товар</a>
                                        </h3>
                                    </product-title>
                                    <product-price className="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <div data-hook="price-wrapper">
                                            <span className="price">$19.99</span>
                                        </div>
                                    </product-price>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Home;