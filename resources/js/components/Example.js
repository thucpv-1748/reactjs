import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Route , Link, Router} from 'react-router-dom';
import RouterPath from './RouterPath';
import history from './history'

export default class Example extends Component {
    render() {
        return (
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                            <div className="container">
                                <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                                <div className="collapse navbar-collapse" id="navbarResponsive">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/'}>Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/about'}>About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/product'}>Product</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link js-scroll-trigger" to={'/topic'}>Topic</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div style={{ margin: '100px' }}><RouterPath/>
                    </div>
                </div>
        )
    }
}

if (document.getElementById('example')) {
    ReactDOM.render((
            <BrowserRouter>
                <Router history={history}>
                 <Example/>
                </Router>
            </BrowserRouter>
        ),
        document.getElementById('example'));
}