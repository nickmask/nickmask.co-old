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

function mapStateToProps (state) {
  return {
    projects: state.projects,
    isFetching
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    isFetching
  }
}

export default connect(mapStateToProps)(Project)
