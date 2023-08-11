<template>
  <base-card>
    <h2>Find a coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FilteredItems } from '@/types/FilteredItems';

export default defineComponent({
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event: Event): void {
      const elem = event.target as HTMLInputElement;
      if (elem) {
        const inputId: string = elem.id;
        const isActive: boolean = elem.checked;
        const updatedFilters: FilteredItems = {
          ...this.filters,
          [inputId]: isActive,
        };
        this.filters = updatedFilters;
        this.$emit('change-filter', updatedFilters);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
