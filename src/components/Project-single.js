import React, { PropTypes, Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Image } from 'react'
require('../www/stylesheets/project-page')

export default class ProjectSingle extends Component {

  render () {
    const project = this.props.project
    const keys = Object.keys(this.props.project.text)
    return (
      <div>
        <Row>
          <Col sm={12} className='projectTitleCol'>
            <div className='projectTitle'>
              <h1>{project.title}</h1>
              <i>{project.date}</i>
              <Button bsSize='xsmall'>github</Button>
              <Button bsSize='xsmall'>live site</Button>
              <hr/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8} className='projectMainCol'>
            <div className='projectMain'>
              {keys.map((key, i) =>
                <div>
                  <h2>{key}</h2>
                  <p>{project.text.key}</p>
                </div>
              )}
              <p>{project.text.summary}</p>
              <p></p>
            </div>
          </Col>
          <Col md={4} className='projectSideCol'>
            <div className='projectSide'>
              <h2>Built with</h2>
              <div className='build'>
              </div>
              <h2>Testing</h2>
              <div className='testing'>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
//
// <div>

//   <Row>
//     <Col md={8} className='projectMainCol'>
//       <div className='projectMain'>
//         <h2>Summary</h2>
//       </div>
//     </Col>
    // <Col md={4} className='projectSideCol'>
    //   <div className='projectSide'>
    //     <h2>Built with</h2>
    //     <div className='build'>
          // <Image src='/images/node.png' alt='Node.js' responsive/>
          // <Image src='/images/webpack.png' alt='Webpack' responsive/>
          // <Image src='/images/eslint.png' alt='eslint' responsive/>
          // <Image src='/images/babel.png' alt='Babel' responsive/>
          // <Image src='/images/sass.png' alt='Sass' responsive/>
          // <Image src='/images/react-router.png' alt='React router' responsive/>
    //     </div>
    //     <h2>Testing</h2>
    //     <div className='testing'>
    //       <Image src='/images/mocha.png' alt='Mocha' responsive/>
    //       <Image src='/images/chai.png' alt='Chai' responsive/>
    //       <Image src='/images/enzyme.png' alt='Enzyme' responsive/>
    //       <Image src='/images/nightwatch.png' alt='Nightwatch' responsive/>
    //     </div>
    //     </div>
    // </Col>
//   </Row>
//   <Row>
//     <Col sm={12} className='projectImageCol'>
//       <div className='projectImage'>
//         <div>
//         </div>
//       </div>
//     </Col>
//   </Row>
// </div>
