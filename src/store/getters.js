export default {
  tasks: state => state.tasks,
  task: state => id => state.tasks.find(t => t.id === id),
  activeCount: state => {
    return state.tasks.filter(t => t.type === 'active').length
  }
}
