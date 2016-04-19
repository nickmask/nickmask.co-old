import React from 'react'
import ProjectList from '../components/Project-list'
require('../www/stylesheets/projects')

class Projects extends React.Component {
  render () {
    return (
      <row>
        <ProjectList />
      </row>
    )
  }
}

export default Projects
