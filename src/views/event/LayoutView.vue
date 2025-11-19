<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <div>
            <RouterLink :to="{ name: 'eventDetails' }">Details</RouterLink> |
            <RouterLink :to="{ name: 'eventRegister' }">Register</RouterLink> |
            <RouterLink :to="{ name: 'eventEdit' }">Edit</RouterLink>
          </div>
        </nav>
      </div>
    </header>
    <!-- <h1>Events For Good</h1> -->
    <!-- new element -->
    <RouterView :event="event" />
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
