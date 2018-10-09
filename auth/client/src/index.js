import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import Signout from './components/auth/Signout';
import Feature from './components/Feature';

const store = createStore(
    reducers,
    // Initial state. Check Local storage if token exist
    {  auth: {authenticated: localStorage.getItem('token') }},
    applyMiddleware(reduxThunk)
);

ReactDom.render(
    <Provider store={ store }>
        <BrowserRouter>
            <App>
                {/*we'll have Welcome component as prop inside App component*/}
                <Route path="/" exact component={ Welcome }/>
                <Route path="/signup" component={ Signup }/>
                <Route path="/feature" component={ Feature }/>
                <Route path="/signout" component={ Signout }/>
            </App>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);


