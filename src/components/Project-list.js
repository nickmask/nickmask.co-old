import React from 'react'
import { Col } from 'react-bootstrap'

class ProjectList extends React.Component {
  render () {
    return (
      <div>
        <Col sm={4} className='projectItem'>
          <a href='/project/1'>
            <div className='project'>
              <h2 className='projectTitle'>Tightrope</h2>
              <p className='projectInfo'>Node.js | React | Sass | Express</p>
            </div>
          </a>
        </Col>
        <Col sm={4} className='projectItem'>
          <div className='project'>
          </div>
        </Col>
        <Col sm={4} className='projectItem'>
          <div className='project'>
          </div>
        </Col>
        <Col sm={4} className='projectItem'>
          <div className='project'>
          </div>
        </Col>
      </div>
    )
  }
}

export default ProjectList
