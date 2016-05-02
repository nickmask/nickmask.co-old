import React from 'react'
import { Col } from 'react-bootstrap'
import request from 'superagent'
import Firebase from 'firebase'
import createFragment from 'react-addons-create-fragment'
import _ from 'lodash'

class ProjectList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {list: []}
  }

  componentDidMount() {
    let projects = new Firebase('https://nickmask.firebaseio.com/projects')
    const self = this
    let arr = []
    projects.once('value', function (project) {
      project.forEach(function (childProject) {
        arr.push({
          projectName: childProject.key(),
          projectData: childProject.val(),
        })
      })
      console.log('setting state', arr)
      // self.setState = { list: arr }
    })
    this.setState = { list: arr }
    console.log('this', this.state)
    console.log('done once')
  }

  render () {
    if (this.state.list.length <= 0) {
      console.log('State is 0')
      return (<div />)
    } else {
      console.log('State is something')
      return (
        <div>
          { _.map(this.state.list, function (project) {
            return (
              <Col sm={4} key={project.projectName.replace(' ', '')} className='projectItem'>
                <a href='/project/1'>
                  <div className='project'>
                    <h2 className='projectTitle'>{project.projectName}</h2>
                    <p className='projectInfo'>{project.projectData.tech}</p>
                  </div>
                </a>
              </Col>
            )
          })
          }
        </div>
      )
    }
  }
}

export default ProjectList
