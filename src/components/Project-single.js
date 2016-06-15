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
    return (
      <div>
        <Row>
          <Col sm={12} className='projectTitleCol'>
            <div className='projectTitle'>
              <h1>{project.title}</h1>
              <i>{project.date}</i>
              <Button bsSize='xsmall'>github</Button>
              <Button bsSize='xsmall'>live site</Button>
              <hr/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} className='projectMainCol'>
            <div className='projectMain'>
              <Text keys={keys} project={project}/>
            </div>
          </Col>
          <Col md={4} className='projectSideCol'>
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
