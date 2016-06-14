import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'
require('../www/stylesheets/projects.sass')
import { connect } from 'react-redux'

export default class ProjectList extends Component {
  render () {
    return (
      <div>
        {this.props.projects.map((project, i) =>
          <Col sm={4} key={i} className='projectItem'>
            <Link to={`/project/${project.projectName.replace(' ', '-')}`}>
              <div className='project'>
                <h2 className='projectTitle'>{project.projectName}</h2>
                <p className='projectInfo'>{project.projectData.tech}</p>
              </div>
            </Link>
          </Col>
        )}
      </div>
    )
  }
}

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
