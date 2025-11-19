<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup>
import EventService from '@/service/EventService'
import { onMounted, ref } from 'vue'
// inititalize event
const event = ref(null)
// const id = ref(123)
const props = defineProps({
  id: {
    type: String || Number,
    required: true,
  },
})

onMounted(() => {
  EventService.getEventById(props.id)
    .then((response) => {
      console.log(response.data)

      event.value = response.data
    })
    .catch((err) => {})
})
</script>

<style lang="scss" scoped></style>
