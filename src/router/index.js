import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: () =>
      import(/* webpackChunkName: "tasks" */ '../views/Tasks.vue')
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: () => import(/* webpackChunkName: "task" */ '../views/Task.vue')
  },
  {
    path: '/new',
    name: 'New',
    component: () => import(/* webpackChunkName: "new" */ '../views/New.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

export default router
