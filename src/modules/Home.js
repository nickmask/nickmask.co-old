import React, { PropTypes, Component } from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import FontAwesome from 'react-fontawesome'
require('../www/stylesheets/home.sass')

class Home extends Component {
  render () {
    return (
      <div>
        <Row fluid>
          <Col className='homeContact' sm={3} fluid>
            <Row>
              <div className='homeContactDiv'>
                <a href='https://github.com/nickmask'><FontAwesome name='github'/></a>
                <a href='https://nz.linkedin.com/in/nickmask'><FontAwesome name='linkedin'/></a>
                <a href='https://twitter.com/nickmask'><FontAwesome name='twitter'/></a>
                <a href='https://www.facebook.com/nrmaskell'><FontAwesome name='facebook'/></a>
              </div>
            </Row>
          </Col>
          <Col className='gridIntro' sm={9} fluid>
            <div fluid className='homeIntro'>
              <h1>Hey, I'm Nick.</h1>
              <p>
                I am a web developer with a passion for UX, design, marketing and tech. I love making beautiful apps that help make people's lives easier. 
                <br/>
                <Link to={'/about'}>
                  <Button className='homeBut' bsStyle='primary'>Learn more</Button>
                </Link>
              </p>
            </div>
          </Col>
          <Link to={'/projects/1-tightrope'}>
            <Col className='gridItem tightropeBackground' sm={9} fluid>
                <div className='homeTightrope homeTitle'>
                  <Image src='/images/tightrope-logo.png' responsive />
                </div>
            </Col>
          </Link>
          <Link to={'/projects/2-nickmask'}>
            <Col className='gridItem nickmaskBackground' sm={3} fluid>
              <div className='homeNickmask homeTitle'>
                <Image src='/images/nickmask-logo-home.png' responsive />
              </div>
            </Col>
          </Link>
          <Link to={'/projects/1-solar-v'}>
            <Col className='gridItem solarVBackground homeTitle' sm={6} fluid>
              <div>
                <h1>Solar V</h1>
              </div>
            </Col>
          </Link>
          <Link to={'/projects/3-enspiral-dev-academy'}>
            <Col className='gridItem devAcademyBackground' sm={6} fluid>
              <div className='homeDevAcademy homeTitle'>
                <h1>Enspiral Dev Academy</h1>
              </div>
            </Col>
          </Link>
        </Row>
      </div>
    )
  }
}

export default Home
