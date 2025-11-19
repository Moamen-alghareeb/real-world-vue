<script setup>
import EventCard from '@/components/EventCard.vue'
import { onMounted, ref } from 'vue'
import eventService from '@/service/EventService.js'
const events = ref(null)

onMounted(() => {
  eventService
    .getEvents()
    .then((response) => {
      console.log(response.data)
      events.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div class="home">
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
