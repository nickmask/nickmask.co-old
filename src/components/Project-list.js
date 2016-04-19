import React from 'react'
import { Col } from 'react-bootstrap'

class ProjectList extends React.Component {
  render () {
    return (
      <div>
        <Col sm={4} className='projectItem'>
          <div className='col2'>
          </div>
        </Col>
        <Col sm={4} className='projectItem'>
          <div className='col2'>
          </div>
        </Col>
        <Col sm={4} className='projectItem'>
          <div className='col2'>
          </div>
        </Col>
        <Col sm={4} className='projectItem'>
          <div className='col2'>
          </div>
        </Col>
      </div>
    )
  }
}

export default ProjectList
