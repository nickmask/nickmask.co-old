import React from 'react'
import ProjectList from '../components/Project-list'
import { connect } from 'react-redux'
require('../www/stylesheets/projects')

class Projects extends React.Component {
  render () {
    console.log("This", this)
    return (
      <row>
        <h1>{this.props.projects}</h1>
        <ProjectList />
      </row>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.params.id,
    filter: ownProps.location.query.filter
  };
}

export default connect(mapStateToProps)(Projects)
