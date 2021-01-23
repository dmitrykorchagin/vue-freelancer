export default {
  addTask(state, payload) {
    state.tasks.push(payload)
  },
  addTasks(state, payload) {
    state.tasks = Object.values(payload)
  },
  changeType(state, payload) {
    const task = state.tasks.find(t => t.name === payload.name)
    task.type = payload.type
  }
}
