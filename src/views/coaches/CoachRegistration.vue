<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CoachForm from '@/components/coaches/CoachForm.vue';
import { Coach } from '@/types/CoachesState';

export default defineComponent({
  components: {
    CoachForm,
  },
  methods: {
    saveData(data: Coach) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    },
  },
});
</script>
