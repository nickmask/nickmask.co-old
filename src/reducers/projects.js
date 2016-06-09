const projects = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return action.filter
    default:
      return state
  }
}

export default projects
