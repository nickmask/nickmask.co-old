import React, { PropTypes, Component } from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap'
require('../www/stylesheets/project-page')

export default class ProjectSingle extends Component {

  getBuild () {
    if (typeof this.props.project.built != "undefined") {
      return this.props.project.built.split(", ")
    } else {
      return []
    }
  }

  getTesting () {
    if (typeof this.props.project.testing != "undefined") {
      return this.props.project.testing.split(", ")
    } else {
      return []
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
              {keys.map((key, i) =>
                <div>
                  <h2>{key}</h2>
                  <p>{project.text.key}</p>
                </div>
              )}
              <p>{project.text.summary}</p>
              <p></p>
            </div>
          </Col>
          <Col md={4} className='projectSideCol'>
            <div className='projectSide'>
              <h2>Built with</h2>
              <div className='build'>
                {built.map((bu, i) =>
                  <Image src={`/images/${bu}.png`} alt={bu} responsive/>
                )}
              </div>
              <h2>Testing</h2>
              <div className='testing'>
                {test.map((tu, i) =>
                  <Image src={`/images/${tu}.png`} alt={tu} responsive/>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
