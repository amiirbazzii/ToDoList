import React, {Component} from 'react';
import '../style/Todo.css'

class Todo extends Component {
    render() {

        let {text,onClick,completed} = this.props;
        return (
            <li onClick={onClick}
            style={{color : completed ? '#aaa' : 'black' ,boxShadow : completed ? 'none' : '3px 3px 10px rgba(0,0,0,.07)' }}
            >
                {text}
            </li>
        );
    }
}

export default Todo;