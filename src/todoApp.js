import React, {Component} from 'react';
import AddTodo from './component/AddTodo'
import TodoList from './component/TodoList'

class TodoApp extends Component {
    render() {
        return (
            <div>
              <AddTodo/>
              <TodoList/>
            </div>
        );
    }
}

export default TodoApp;