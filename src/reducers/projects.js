import { updateProjects } from '../actions/index'

const initialState = {
  projects: []
}

function projectsUpdate (state = initialState, action) {
  console.log("this reducer is also running", action)
  switch (action.type) {
    case 'UPDATE_PROJECTS':
      return Object.assign({}, state, {
        projects: action.projects
      })
    default:
      return state
  }
}

export default projectsUpdate
