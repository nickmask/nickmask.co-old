import React, { Component, PropTypes } from 'react'
import ProjectSingle from '../components/Project-single'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
require('../www/stylesheets/project-page')

class Project extends Component {
  getProjectData () {
    const projectItem = this.props.params.project
    const index = Number(projectItem.slice(0, projectItem.indexOf("-")))
    const data = this.props.projects.list[index]
    return data
  }

  render () {
    const { projects } = this.props
    console.log('In projects', projects)
    const project = this.getProjectData()
    return (
      <Row className='projectPage'>
        {projects.isFetching && projects.list.length === 0 &&
          <Col sm={12} className='loading'>
            <img src='/images/loading.gif'/>
          </Col>
        }
        {!projects.isFetching && projects.list.length === 0 &&
          <h2>Error loading project.</h2>
        }
        {projects.list.length > 0 &&
          <ProjectSingle project={project.projectData}/>
        }
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Project)
