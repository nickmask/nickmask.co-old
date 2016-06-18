import React from 'react'
import { Link, IndexLink } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import NavLink from './NavLinks'
require('../www/stylesheets/nav.sass')

class Navbar extends React.Component {
  
  mobileMenuExpand() {
  }

  render () {
    return (
      <div className='nav navbar-fixed-top'>
        <div className='container'>
          <Row className='desktop'>
            <Col sm={5} className='brand desktop'>
              <h1>NICKMASK</h1>
            </Col>
            <Col sm={7}>
              <div className='navContent'>
                <ul>
                  <li><IndexLink activeClassName='active' to='/'>{'HOME'}</IndexLink></li>
                  <li><NavLink to='/projects'>{'PROJECTS'}</NavLink></li>
                  <li><NavLink to='/blog'>{'BLOG'}</NavLink></li>
                  <li><NavLink to='/about'>{'ABOUT'}</NavLink></li>
                  <li><NavLink to='/contact'>{'CONTACT'}</NavLink></li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className='mobile'>
            <Col xs={9} className='brand'>
              <h1>NICKMASK</h1>
            </Col>
            <Col xs={3} className='mobileNav'>
              <button className={this.state.expand} onClick={this.mobileMenuExpand()}>Toggle</button>
              <ul>
                <li><IndexLink activeClassName='active' to='/'>{'HOME'}</IndexLink></li>
                <li><Link activeClassName='active' to='/projects'>{'PROJECTS'}</Link></li>
                <li><Link activeClassName='active' to='/blog'>{'BLOG'}</Link></li>
                <li><Link activeClassName='active' to='/about'>{'ABOUT'}</Link></li>
                <li><Link activeClassName='active' to='/contact'>{'CONTACT'}</Link></li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Navbar
