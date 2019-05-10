import React from 'react';

class Lifecycle extends React.Component {
    constructor(props) {
        debugger;
        super(props);

        this.state = {
            data: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber() {
        debugger;
        this.setState({data: this.state.data + 1})
    }
    render() {
        debugger;
        return (

            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
}
class Content extends React.Component {
    componentWillMount() {
        debugger;
        console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
        debugger;
        console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        debugger;
        console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        debugger;
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        debugger;
        console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        debugger;
        console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
        debugger;
        console.log('Component WILL UNMOUNT!')
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}
export default Lifecycle;