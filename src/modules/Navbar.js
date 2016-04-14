import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap'
require('../www/stylesheets/nav.sass')

class Navbar extends React.Component {
  render () {
    return (
      <div className='nav'>
        <div className='container'>
          <Row>
            <Col sm={3}>
            </Col>
            <Col sm={9}>
              <div className='navContent'>
                <ul>
                  <li><Link to='/'>{'Home'}</Link></li>
                  <li><Link to='/projects'>{'Projects'}</Link></li>
                  <li><Link to='/about'>{'About'}</Link></li>
                  <li><Link to='/contact'>{'Contact'}</Link></li>
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
