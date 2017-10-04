
import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';
import Main from './components/Main'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

import {Router, Route, IndexRoute, browserHistroy }
from 'react-router';

const router = (
    <Router history = {browserHistroy}>
    <Route path='/' component={Main}>
    <IndexRoute component={PhotoGrid}> </IndexRoute>
    <Route path = './views/:photoId' component={Single}> </Route>
    </Route>
    </Router>
)

render(router, document.getElementById('root'))
