
import React, {Component} from 'react';
import history from '../history'

class CreateItem extends Component {
    constructor(props){
        super(props);
        this.state = {title: '', body: ''};

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange1(e){
        this.setState({
            title: e.target.value
        })
    }
    handleChange2(e){
        this.setState({
            body: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const products = {
            title: this.state.title,
            body: this.state.body,
        }
        let uri = 'http://127.0.0.1:8000/products';
        axios.post(uri, products).then((response) => {
            history.replace('/product')
        });
    }

    render() {
        return (
            <div>
                <h1>Create An Item</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Name:</label>
                                <input type="text" className="form-control" onChange={this.handleChange1}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Item Price:</label>
                                <input type="text" className="form-control col-md-6" onChange={this.handleChange2}/>
                            </div>
                        </div>
                    </div><br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Add Item</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default CreateItem;