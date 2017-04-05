import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import './component/App.css';
import Home from './component/Home';
import About from './component/About';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="about" component={About}/>
    </Router>,
  document.getElementById('root')
);
