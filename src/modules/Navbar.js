import React from 'react'
import { Link, IndexLink } from 'react-router'
import { Row, Col } from 'react-bootstrap'
require('../www/stylesheets/nav.sass')

<<<<<<< Updated upstream
=======
import NavLink from './NavLinks'

>>>>>>> Stashed changes
class Navbar extends React.Component {

  render () {
    return (
      <div className='nav navbar-fixed-top'>
        <div className='container'>
          <Row>
            <Col sm={5} className='brand'>
              <h1>NICKMASK</h1>
            </Col>
            <Col sm={7}>
              <div className='navContent'>
                <ul>
                  <li><IndexLink activeClassName='active' to='/'>{'HOME'}</IndexLink></li>
<<<<<<< Updated upstream
                  <li><Link activeClassName='active' to='/projects'>{'PROJECTS'}</Link></li>
                  <li><Link activeClassName='active' to='/blog'>{'BLOG'}</Link></li>
                  <li><Link activeClassName='active' to='/about'>{'ABOUT'}</Link></li>
                  <li><Link activeClassName='active' to='/contact'>{'CONTACT'}</Link></li>
=======
                  <li><NavLink to='/projects'>{'PROJECTS'}</NavLink></li>
                  <li><NavLink to='/blog'>{'BLOG'}</NavLink></li>
                  <li><NavLink to='/about'>{'ABOUT'}</NavLink></li>
                  <li><NavLink to='/contact'>{'CONTACT'}</NavLink></li>
>>>>>>> Stashed changes
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Navbar
