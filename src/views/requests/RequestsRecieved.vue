<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>Requests Recieved</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequests && !isLoading">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ContactData } from '@/types/RequestsState';
import RequestItem from '@/components/requests/RequestItem.vue';
import { ErrorType } from '@/types/ErrorType';

export default defineComponent({
  components: {
    RequestItem,
  },
  data() {
    return {
      isLoading: false,
      error: null as ErrorType,
    };
  },
  computed: {
    recievedRequests(): ContactData[] {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        if (error instanceof Error) {
          this.error = error.message || 'Something went wrong!';
        }
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
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
