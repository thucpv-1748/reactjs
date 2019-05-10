import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import getRouteHandlerBaseUrl from './BaseUrl';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', products: ''};
    }

    componentWillMount() {
        this._baseUrl = getRouteHandlerBaseUrl();
    }


    componentDidMount() {
        axios.get(this._baseUrl + '/products')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        if(this.state.products instanceof Array){
            return this.state.products.map(function(object, i){
                return (
                    <tr key={i}>
                        <td>
                            { i }
                        </td>
                        <td>
                            { object.title }
                        </td>
                        <td>
                            { object.body }
                        </td>
                        <td>
                            <Link className="nav-link js-scroll-trigger" to={'/edit/' + object.id}>edit Product</Link>
                        </td>
                    </tr>
                );
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Products List - Demo</h1>

                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <Link className="nav-link js-scroll-trigger" to={'/create'}> add Product</Link>
                    </div>
                </div><br />
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Product Title</td>
                        <td>Product Body</td>
                        <td width="200px">Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                    { this.tabRow() }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Product