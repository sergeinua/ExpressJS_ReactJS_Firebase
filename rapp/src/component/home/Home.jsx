import React, { Component } from 'react';
import * as firebase from 'firebase';

import Header from '../common/Header';
import Footer from '../common/Footer';
import ProductItem from './ProductItem';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productItems: [],
            loading: true
        };
    }

    componentDidMount() {
        firebase.database().ref().child('product').on('value', snap => {
            this.setState({productItems: Object.values(snap.val())});
            this.setState({loading: false});
        });
        if (!localStorage.getItem('sessionId'))
            localStorage.setItem('sessionId', (+new Date()).toString(36));
    }

    render() {
        const _loading = this.state.loading;

        return (
            <div>
                <Header/>
                    <main>
                        <div className="container shop">
                            <h2>Магазин</h2>
                            {_loading ? (
                                <div>LOADING...</div>
                            ) : (
                                this.state.productItems.map((item, index) => {
                                    return <ProductItem
                                            img1={item.img1}
                                            img2={item.img2}
                                            imgAlt={item.imgAlt}
                                            price={item.price}
                                            href={item.href}
                                            title={item.title}
                                            key={index}/>
                                })
                            )}
                        </div>
                    </main>
                <Footer/>
            </div>
        );
    }
}

export default Home;