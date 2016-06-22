import React, { PropTypes, Component } from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
import Build from './Project-build'
import Testing from './Project-testing'
import Text from './Project-text'
require('../www/stylesheets/project-page')

export default class ProjectSingle extends Component {

  hasBuild () {
    if (typeof this.props.project.built != "undefined") {
      return true
    } else {
      return false
    }
  }

  hasTesting () {
    if (typeof this.props.project.testing != "undefined") {
      return true
    } else {
      return false
    }
  }

  render () {
    const project = this.props.project
    const keys = Object.keys(project.text)
    console.log('page', this.params)
    return (
      <div className='projectSingleMain'>
        <Row>
          <Col sm={12} className='projectColTitle'>
            <div>
              <h1>{project.title}</h1>
              <i>date: {project.date}</i>
              <Button href={project.github} bsSize='xsmall'>github</Button>
              <hr/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} className='projectCol projectContentLeft'>
            <div>
              <Text keys={keys} project={project}/>
            </div>
          </Col>
          <Col md={4} className='projectCol projectContentRight'>
            <div className='projectSide'>
              <div>
                {!this.hasBuild() && <div></div>
                }
                {this.hasBuild() && <Build build={this.props.project.built.split(", ")} />
                }
              </div>
              <div>
                {!this.hasTesting() && <div></div>
                }
                {this.hasTesting() && <Testing build={this.props.project.testing.split(", ")} />
                }
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
