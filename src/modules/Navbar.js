import React from 'react'
import { Link } from 'react-router'
import { Row, Col } from 'react-bootstrap'

class Navbar extends React.Component {
  render () {
    return (
      <Row>
        <Col sm={3}>
        </Col><Col sm={9}>
          <div className='nav'>
            <div className='navContent'>
              <ul>
                <li><Link to='/'>{'Home'}</Link></li>
                <li><Link to='/projects'>{'Projects'}</Link></li>
                <li><Link to='/about'>{'About'}</Link></li>
                <li><Link to='/contact'>{'Contact'}</Link></li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Navbar
