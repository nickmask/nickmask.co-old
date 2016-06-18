import thunkMiddleware from 'redux-thunk'
import React from 'react'
import ReactDOM from 'react-dom'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index.js'
import { Provider } from 'react-redux'
import { fetchProjects } from './actions/index'
import { IndexRoute, Router, Route, Link, browserHistory, hashHistory } from 'react-router'

import App from './modules/App'
import Home from './modules/Home'
import Projects from './modules/Projects'
import About from './modules/About'
import Blog from './modules/Blog'
import Contact from './modules/Contact'
import Project from './modules/Project'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

store.dispatch(fetchProjects())

function render () {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/projects/:project' component={Project} />
          <Route path='/blog' component={Blog} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  )
}

store.subscribe(render)

render()
