<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.type" /></p>
    <p>
      <strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}
    </p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="changeType('pending')">
        Взять в работу
      </button>
      <button class="btn primary" @click="changeType('done')">
        Завершить
      </button>
      <button class="btn danger" @click="changeType('cancelled')">
        Отменить
      </button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ $route.params.id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  components: { AppStatus },
  setup() {
    const store = useStore()
    const route = useRoute()
    const id = Number(route.params.id)
    const task = computed(() => store.getters.task(id))

    function changeType(type) {
      store.dispatch('changeType', { type: type, name: task.value.name })
    }

    return {
      task,
      changeType
    }
  }
}
</script>
