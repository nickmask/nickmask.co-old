import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import { Image } from 'react-bootstrap'
require('../www/stylesheets/projects.sass')

export default class Build extends Component {
  render () {
    return (
      <div>
        <h2>Built with</h2>
        <div className='sideImages'>
          {this.props.build.map((bu, i) =>
            <Image key={i} src={`/images/${bu}.png`} alt={bu} responsive/>
          )}
        </div>
      </div>
    )
  }
}
