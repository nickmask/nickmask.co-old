import fetch from 'isomorphic-fetch'

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS'

export function requestProjects () {
  return {
    type: REQUEST_PROJECTS
  }
}

export function receiveProjects (json) {
  return {
    type: RECEIVE_PROJECTS,
    json
  }
}

// export function fetchProjects () {
//   return function (dispatch) {
//     dispatch(requestProjects())
//     return fetch('https://nickmask.firebaseio.com/projects.json')
//       .then(response => response.json())
//       .then(json =>
//         dispatch(receiveProjects(json)))
//   }
// }
//

export function fetchProjects () {
  return function (dispatch) {
    dispatch(requestProjects())
    return fetch(`https://nickmask.firebaseio.com/projects.json`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveProjects(json))
      )
  }
}
