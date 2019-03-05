import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './header';
import Home from '../containers/home';
import User from '../containers/user';

const App = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div className='container-fluid'>
                <Header/>
                <div className='container'>
                    <Route exact path="/" component={Home} />
                    <Route path="/:name" component={User} />
                </div>
            </div>
        </Router>
    </Provider>
);



App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
