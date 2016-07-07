import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import { Row, Col } from 'react-bootstrap'
import NavLink from './NavLinks'
import classNames from 'classnames'
import Drawer from 'react-toolbox/lib/drawer'
import { IconButton } from 'react-toolbox/lib/button'
import FontAwesome from 'react-fontawesome'
require('../www/stylesheets/nav.sass')

class Navbar extends Component {

  constructor (props) {
    super(props)
    this.state = { active: false }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({active: !this.state.active});
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
              <IconButton onClick={this.handleToggle}><FontAwesome name='bars' size='3x'/></IconButton>
            </Col>
          </Row>
          <Row>
          <Col sm={12} className='mobileNav mobileLinks'>
            <div className={mobileClasses}>
              <Drawer content active={this.state.active} className='draw' onOverlayClick={this.handleToggle}>
                <IndexLink activeClassName='active' to='/'>{'HOME'}</IndexLink>
                <NavLink to='/projects'>{'PROJECTS'}</NavLink>
                <NavLink to='/blog'>{'BLOG'}</NavLink>
                <NavLink to='/about'>{'ABOUT'}</NavLink>
                <NavLink to='/contact'>{'CONTACT'}</NavLink>
              </Drawer>
            </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Navbar
