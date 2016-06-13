import React, { Component, PropTypes } from 'react'
import ProjectSingle from '../components/Project-single'
import { connect } from 'react-redux'

require('../www/stylesheets/project-page')

class Project extends Component {
  render () {
    const { projects } = this.props
    return (
      <div className='projectPage'>
        <ProjectSingle projects={projects}/>
      </div>
    )
  }
}

Project.propTypes = {
  projects: PropTypes.array.isRequired,
  isFetching: PropTypes.boo.isRequired
}

function mapStateToProps (state) {
  const { isFetching, projects: projects } = { isFetching: true, projects: []}
  return {
    projects,
    isFetching
  }
}

export default connect(mapStateToProps)(Project)
