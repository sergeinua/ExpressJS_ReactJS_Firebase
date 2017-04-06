import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import * as firebase from 'firebase';

import './component/common/App.css';
import Home from './component/home/Home';
import About from './component/about/About';
import ProductDetails from './component/product/ProductDetails';

var config = {
    apiKey: "AIzaSyALnDYt8QJBRSxFVUS1raUoR1AeG5MHTNw",
    authDomain: "nodereactshop.firebaseapp.com",
    databaseURL: "https://nodereactshop.firebaseio.com",
    projectId: "nodereactshop",
    storageBucket: "nodereactshop.appspot.com",
    messagingSenderId: "928436544067"
};
firebase.initializeApp(config);


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/product/:slug" component={ProductDetails}/>
        <Route path="about" component={About}/>
    </Router>,
  document.getElementById('root')
);
