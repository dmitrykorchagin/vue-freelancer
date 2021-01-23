import axios from 'axios'

export default {
  async addTask(context, payload) {
    try {
      await axios.post(
        'https://vue-freelance-a1c28-default-rtdb.firebaseio.com/tasks.json',
        payload
      )
      context.commit('addTask', payload)
    } catch (error) {
      console.log(error)
    }
  },
  async getTasks(context) {
    try {
      const { data } = await axios.get(
        'https://vue-freelance-a1c28-default-rtdb.firebaseio.com/tasks.json'
      )

      for (const key in data) data[key].name = key

      context.commit('addTasks', data)
    } catch (error) {
      console.log(error)
    }
  },
  async changeType(context, payload) {
    try {
      await axios.patch(
        `https://vue-freelance-a1c28-default-rtdb.firebaseio.com/tasks/${payload.name}.json`,
        { type: payload.type }
      )
      context.commit('changeType', payload)
    } catch (error) {
      console.log(error)
    }
  }
}
