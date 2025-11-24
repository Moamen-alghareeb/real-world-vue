<template>
  <div>
    <h3>Register event #{{ event.id }}</h3>
    <button @click="register">Register ME!!</button>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const { event } = defineProps(['event'])
const GStore = inject('GStore')
const router = useRouter()
const register = () => {
  // call api to register
  // if success route to the event details nad show notification
  GStore.flashMessage = 'You are successfully registered for ' + event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.replace({ name: 'eventDetails' })
}
</script>

<style lang="scss" scoped></style>
