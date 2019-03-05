import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import './styles/main.scss';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <App
        store={store}
    />, document.getElementById('root'));
