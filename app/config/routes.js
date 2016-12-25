import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
)


export default routes
