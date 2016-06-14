import React from 'react'
import { connect } from 'react-redux'
import { updateProjects } from '../actions/index.js'

let UpdateProjects = ({ dispatch }) => {
  return
    dispatch(updateProjects('fuck'))
}

UpdateProjects = connect()(UpdateProjects)

export default UpdateProjects
