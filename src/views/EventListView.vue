<script setup>
import EventCard from '@/components/EventCard.vue'
import { computed, onMounted, ref, watchEffect } from 'vue'
import eventService from '@/service/EventService.js'
const events = ref(null)
const perPage = 3
const page = computed(() => props.page)
const eventCount = ref(0)
// const totalPages = ref(0)
const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
})
// const fetchEvents =
onMounted(() => {
  watchEffect(() => {
    events.value = null
    eventService
      .getEvents(perPage, page.value)
      .then((response) => {
        console.log('success whole response:', response)
        console.log('success response events:', response.data)
        eventCount.value = response.headers['x-total-count']
        // totalPages.value = eventCount.value / perPage
        console.log('#events:', eventCount.value)
        events.value = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  })
})
</script>

<template>
  <div class="home">
    <div class="events">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
    <div class="pagination">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        v-if="page > 1"
        >Prev</RouterLink
      >
      <span v-if="page > 1 && eventCount > page * perPage"> | </span>
      <RouterLink
        id="page-next"
        rel="next"
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        v-if="eventCount > page * perPage"
        >Next</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80%;
}
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  gap: 20px;
  /* justify-content: center; */
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
.pagination a:hover {
  color: #42b983;
}
</style>
