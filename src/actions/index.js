export const updateProjects = (projects) => {
  console.log('Action running', projects)
  return {
    type: 'UPDATE_PROJECTS',
    projects
  }
}

export const fetchProjects = () => {
  return
    let projects = new Firebase(`https://nickmask.firebaseio.com/projects`)
    let arr = []
    projects.once('value', function (project) {
      project.forEach(function (childProject) {
        arr.push({
          projectName: childProject.key(),
          projectData: childProject.val()
        })
      })
    })
  dispatch(updateProjects(arr))
  console.log("In action", arr)
}
