<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script lang="ts">
import { Coach } from '@/types/CoachesState';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      selectedCoach: {} as Coach,
    };
  },
  computed: {
    fullName(): string {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas(): string[] {
      return this.selectedCoach.areas;
    },
    rate(): number | null {
      return this.selectedCoach.hourlyRate;
    },
    description(): string {
      return this.selectedCoach.description;
    },
    contactLink(): string {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find((coach: Coach) => coach.id === this.id);
  },
});
</script>
