import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoApp from './todoApp';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(reducer,composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <ToDoApp />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
