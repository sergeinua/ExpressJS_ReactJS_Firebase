import React, { Component } from 'react';

import f_png from '../../img/f.png';
import t_png from '../../img/t.png';
import p_png from '../../img/p.png';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <p className="col-sm-6">﻿© 2017 «Экосок». Development <a href="http://wfactory.com.ua">F·Wactory</a></p>
                        <div className="col-sm-6 text-right">
                            <img alt="" src={f_png}/>
                            <img alt="" src={t_png}/>
                            <img alt="" src={p_png}/>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;