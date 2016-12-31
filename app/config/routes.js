import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../components/Main'
import EntryViewContainer from '../containers/EntryViewContainer'


const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={EntryViewContainer} />
    </Route>
  </Router>
)


export default routes
