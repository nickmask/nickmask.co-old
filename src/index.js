import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './modules/App'
import Home from './modules/Home'
import Projects from './modules/Projects'
import About from './modules/About'
import Contact from './modules/Contact'

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='/projects' component={Projects} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </Route>
  </Router>
), document.getElementById('app'))
