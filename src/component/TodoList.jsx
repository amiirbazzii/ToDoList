import React, {Component} from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import {toggleTodo} from "../action";
import '../style/TodoList.css'


class TodoList extends Component {
    render() {
        let { todos,toggleTodo } = this.props;
        console.log(this.props);
        return (
            <ul className="m-4 col-12 mx-auto">
                {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => (toggleTodo(todo.id))}/>)}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return{
        todos: state.todos
    }
};
const mapDispatchToProps = dispatch => {
    return{
        toggleTodo : id => dispatch(toggleTodo(id))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
