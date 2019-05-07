import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        const hello = <h1 className="hq">Xin chao tat ca moi nguoi</h1>

        const Span = React.createElement('h1',null,'chao ngay moi');
        const Title = React.createElement('div', {
            className: 'title'
        }, 'hello React');
        const App = React.createElement('div', null, Title, Span, hello);

        return App;
    }
}

if (document.getElementById('root')) {
    const root = document.getElementById('root');

    ReactDOM.render(<Example />, root);
}


