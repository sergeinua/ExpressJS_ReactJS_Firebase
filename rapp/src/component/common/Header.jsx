import React, { Component } from 'react';
import { Link } from 'react-router';

import Cart from './Cart';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="logo">
                            <div className="logoBg"></div>
                            <div className="logoContent">
                                <div className="logo2">
                                    <h1>
                                        <Link to="/">эко сок</Link>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/">Главная</Link></li>
                                <li><Link to="/about">О нас</Link></li>
                                <li><a href="answers.html">Ответы</a></li>
                                <li><a href="contact.html">Контакты </a></li>
                            </ul>
                            <Cart/>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;