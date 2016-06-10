import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import App from './modules/App'
import Home from './modules/Home'
import Projects from './modules/Projects'
import About from './modules/About'
import Blog from './modules/Blog'
import Contact from './modules/Contact'
import Project from './modules/Project'
import { ReduxRouter } from 'redux-router';

import reducers from './reducers/index.js'


// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/projects/:project' component={Project} />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
