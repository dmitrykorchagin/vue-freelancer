<template>
  <h1 class="text-white center" v-if="!tasks.length">
    Задач пока нет
  </h1>

  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ activeCount }}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :type="task.type" />
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date(task.date).toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="$router.push(`/task/${task.id}`)">
        Посмотреть
      </button>
    </div>
  </template>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  components: { AppStatus },
  setup() {
    const store = useStore()

    return {
      tasks: computed(() => store.getters.tasks),
      activeCount: computed(() => store.getters.activeCount)
    }
  }
}
</script>
