import React, { PropTypes, Component } from 'react'
import { Row, Col } from 'react-bootstrap'
require('../www/stylesheets/blog.sass')

class Blog extends Component {
  render () {
    return (
      <Row >
        <Col sm={12} className='blogMainCol'>
          <div className='blogMain'>
            <h1>Coming soon...</h1>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Blog
