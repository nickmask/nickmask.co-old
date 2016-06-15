import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
require('../www/stylesheets/projects.sass')

export default class ProjectList extends Component {
  render () {
    return (
      <div>
        {this.props.projects.map((project, i) =>
          <Col sm={4} key={i} className='projectItem'>
            <Link to={`/projects/${i}-${project.projectName.replace(' ', '-')}`}>
              <div className='project'>
                <h2 className='projectTitle'>{project.projectName}</h2>
                <p className='projectInfo'>{project.projectData.tech}</p>
              </div>
            </Link>
          </Col>
        )}
      </div>
    )
  }
}
