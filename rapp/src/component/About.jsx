import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div>about</div>
                <Footer/>
            </div>
        );
    }
}

export default About;