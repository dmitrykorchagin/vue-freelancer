<template>
  <form class="card" @submit.prevent>
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="task.title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="task.date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="task.desc"></textarea>
    </div>

    <button
      class="btn primary"
      :disabled="!isValid || task.load"
      @click="createTask"
    >
      Создать
    </button>
  </form>
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const task = reactive({
      title: '',
      date: '',
      desc: '',
      load: false
    })

    const isValid = computed(() => !!task.title && !!task.date && !!task.desc)

    function createTask() {
      if (!isValid.value) return

      const currDate = +new Date(new Date().toISOString().substr(0, 10))
      const type = currDate <= +new Date(task.date) ? 'active' : 'cancelled'

      task.load = true

      store
        .dispatch('addTask', {
          id: +new Date(),
          type: type,
          title: task.title,
          date: task.date,
          description: task.desc
        })
        .then(() => {
          task.load = false
          router.push('/')
        })
    }

    return {
      task,
      isValid,
      createTask
    }
  }
}
</script>
