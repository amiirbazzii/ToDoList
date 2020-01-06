import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../action';
import '../style/AddTodo.css'

class AddTodo extends Component {
    state ={
      inputText : '',
    };

    handleChange = (event) => {
        this.setState({inputText : event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(addTodo(this.state.inputText));
        this.setState({
            inputText : '',
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-inline">
                    <input type="text" value={this.state.inputText} onChange={this.handleChange} className="form-control col-10 input"/>
                    <button type="submit" className="btn btn-primary button col-2">
                        +
                    </button>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo);