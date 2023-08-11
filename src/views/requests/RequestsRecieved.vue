<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Recieved</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item
          v-for="req in recievedRequests"
          :key="req.id"
          :email="req.email"
          :message="req.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't recieved any requests yet!</h3>
    </base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ContactData } from '@/types/RequestsState';
import RequestItem from '@/components/requests/RequestItem.vue';

export default defineComponent({
  components: {
    RequestItem,
  },
  computed: {
    recievedRequests(): ContactData[] {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
});
</script>

<style lang="scss" scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
