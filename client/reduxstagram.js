
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import {Router, Route, IndexRoute, browserHistroy }
from 'react-router';

import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
    <Provider store = {store}>
    <Router history = {history}>
    <Route path='/' component={App}>
    <IndexRoute component={PhotoGrid}> </IndexRoute>
    <Route path = './views/:photoId' component={Single}></Route>
    </Route>
    </Router>
    </Provider>
)

render(router, document.getElementById('root'))
