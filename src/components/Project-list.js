import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
require('../www/stylesheets/projects.sass')
import NavLink from '../modules/NavLinks'


export default class ProjectList extends Component {
  render () {
    return (
      <div>
        {this.props.projects.map((project, i) =>
          <NavLink to={`/projects/${i}-${project.projectName.replace(' ', '-')}`}>
            <Col sm={4} key={i} className='projectItem'>
              <div className='project'>
                <h2 className='projectTitle'>{project.projectName}</h2>
                <p className='projectInfo'>{project.projectData.tech}</p>
              </div>
            </Col>
          </NavLink>
        )}
      </div>
    )
  }
}
