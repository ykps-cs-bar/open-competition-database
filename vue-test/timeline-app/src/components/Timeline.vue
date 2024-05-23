<template>
    <div class="timeline">
      <div class="event" v-for="event in events" :key="event._id">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <p>{{ event.date }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Timeline',
    data() {
      return {
        events: []
      }
    },
    created() {
      this.fetchEvents();
    },
    methods: {
      fetchEvents() {
        this.$http.get('/api/events')
          .then(response => {
            this.events = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
  </script>