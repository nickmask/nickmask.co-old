import React, { PropTypes, Component } from 'react'
import ProjectList from '../components/Project-list'
import { connect } from 'react-redux'
import { row } from 'react-bootstrap'
require('../www/stylesheets/projects')

class Projects extends Component {
  render () {
    const { projects } = this.props
    return (
      <row>
        {projects.isFetching && projects.list.length === 0 &&
          <h2>Loading...</h2>
        }
        {!projects.isFetching && projects.list.length === 0 &&
          <h2>Error loading projects.</h2>
        }
        {projects.list.length > 0 &&
          <ProjectList projects={projects.list} />
        }
      </row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  }
}

export default connect(mapStateToProps)(Projects)
