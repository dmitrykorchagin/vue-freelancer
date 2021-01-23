<template>
  <span :class="['badge', typeClass]">{{ name }}</span>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    type: String,
    validator(value) {
      return ['active', 'done', 'cancelled', 'pending'].indexOf(value) !== -1
    }
  },
  setup(props) {
    const name = computed(() => {
      if (props.type === 'active') return 'Активен'
      if (props.type === 'done') return 'Завершен'
      if (props.type === 'cancelled') return 'Отменен'
      if (props.type === 'pending') return 'В работе'
    })

    const typeClass = computed(() => {
      if (props.type === 'active') return 'primary'
      if (props.type === 'done') return 'primary'
      if (props.type === 'cancelled') return 'danger'
      if (props.type === 'pending') return 'warning'
    })

    return {
      name,
      typeClass
    }
  }
}
</script>
