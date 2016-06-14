import React, { PropTypes, Component } from 'react'
import ProjectList from '../components/Project-list'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
require('../www/stylesheets/projects')

class Projects extends Component {
  render () {
    const { projects } = this.props
    return (
      <Row>
          {projects.isFetching && projects.list.length === 0 &&
            <Col sm={12} className='loading'>
              <img src='/images/loading.gif'/>
            </Col>
          }
          {!projects.isFetching && projects.list.length === 0 &&
            <h2>Error loading projects.</h2>
          }
          {projects.list.length > 0 &&
            <ProjectList projects={projects.list} />
          }
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  }
}

export default connect(mapStateToProps)(Projects)
