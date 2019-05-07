import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Topic from "./pages/Topic.js";
import Product from "./pages/Product";
import CreateItem from "./pages/CreateItem";
import editItem from "./pages/editItem";

class RouterPath extends Component {
    render() {
        return (
            <main>
                <Switch>
                   <Route exact path='/' component={Home}/>
                   <Route exact path='/about' component={About}/>
                   <Route exact path='/product' component={Product}/>
                   <Route exact path='/topic' component={Topic}/>
                   <Route exact path='/create' component={CreateItem}/>
                   <Route exact path='/edit/:id' component={editItem}/>
                </Switch>
            </main>
        )
    }
}

export default RouterPath
