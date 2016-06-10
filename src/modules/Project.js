import React from 'react'
import ProjectSingle from '../components/Project-single'
import { connect } from 'react-redux'
import { updateProjects } from '../actions/index.js'

require('../www/stylesheets/project-page')

class Project extends React.Component {
  render () {
    console.log('what about this?', this)
    return (
      <div className='projectPage'>
        <ProjectSingle />
      </div>
    )
  }
}

export default connect(
  state => ({ projects: state }),
  { updateProjects}
)(Project)
