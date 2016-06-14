import React, { PropTypes, Component } from 'react'
import ProjectList from '../components/Project-list'
import { connect } from 'react-redux'
import { row } from 'react-bootstrap'
require('../www/stylesheets/projects')

class Projects extends Component {
  render () {
    const { projects } = this.props
    console.log('this.props.projects', projects)
    console.log('length', projects.list)
    return (
      <row>
        <p> Yelloooow </p>
        {projects.isFetching && projects.list.length === 0 &&
          <h2>Loading...</h2>
        }
        {!projects.isFetching && projects.list.length === 0 &&
          <h2>Error loading projects.</h2> && console.log('Broken')
        }
        {projects.list.length > 0 &&
          <p> Project Liiiist  </p> && <ProjectList projects={projects.list} /> && console.log('should render')
        }
        <p> Gooooood byeeee </p>
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
