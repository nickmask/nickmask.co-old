import React from 'react'
import { Image } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
import request from 'superagent'
import Firebase from 'firebase'
import _ from 'lodash'
import Project from '../modules/Project'
require('../www/stylesheets/projects.sass')
import { connect } from 'react-redux'
import { updateProjects } from '../actions/index.js'

class ProjectList extends React.Component {
  //
  // constructor (props) {
  //   super(props)
  //   this.state = {list: []}
  // }
  //
  // componentDidMount() {
  //   let projects = new Firebase('https://nickmask.firebaseio.com/projects')
  //   const self = this
  //   let arr = []
  //   projects.once('value', function (project) {
  //     project.forEach(function (childProject) {
  //       arr.push({
  //         projectName: childProject.key(),
  //         projectData: childProject.val(),
  //       })
  //     })
  //     self.props.dispatch(updateProjects({ projects: arr }))
  //     self.setState({ list: arr })
  //   })
  // }

  render () {
    return (
      <div>

      </div>
    )
  }
}

export default ProjectList
//
// { _.map(this.state.list, function (project) {
//   let divStyle = { backgroundImage: 'url(' + project.projectData.mainImage + ')' };
//   return (
//     <Col sm={4} key={project.projectName.replace(' ', '')} className='projectItem'>
//       <Link
//       to={`/projects/${project.projectName.replace(' ', '%20')}`}
//       projectData={project}
//       >
//         <div style={divStyle} className='project'>
//           <h2 className='projectTitle'>{project.projectName}</h2>
//           <p className='projectInfo'>{project.projectData.tech}</p>
//         </div>
//       </Link>
//     </Col>
//   )
// })
// }
