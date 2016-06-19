import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import NavLink from './NavLinks'
import classNames from 'classnames'
require('../www/stylesheets/nav.sass')

class Navbar extends Component {

  constructor (props) {
    super(props)
    this.state = { expanded: 'min' }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    if (this.state.expanded === 'min') {
      this.setState({ expanded: 'expanded' })
    } else {
      this.setState({ expanded: 'min' })
    }
  }

  render () {
    const mobileClasses = classNames('mobileDiv', this.state.expanded)
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
              <button onClick={this.handleClick.bind(this)} className={this.state.expanded}>Toggle</button>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className='mobileNav mobileLinks'>
              <div className={mobileClasses}>
                <IndexLink activeClassName='active' to='/'>{'HOME'}</IndexLink>
                <NavLink to='/projects'>{'PROJECTS'}</NavLink>
                <NavLink to='/blog'>{'BLOG'}</NavLink>
                <NavLink to='/about'>{'ABOUT'}</NavLink>
                <NavLink to='/contact'>{'CONTACT'}</NavLink>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Navbar
