<template>
  <form class="form" action="" @submit.prevent="filter">
    <label :for="inputId">
      <span><slot>Filter by</slot></span>
      <input :id="inputId" v-model="filterQuery" type="text" />
    </label>
    <div>
      <button type="submit">Filter</button>
    </div>
  </form>
</template>

<script>
import throttle from 'lodash.throttle'
import uiid from '~/assets/js/uiid'

export default {
  name: 'FilterForm',
  props: {
    initialValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      filterQuery: this.initialValue,
      inputId: uiid(),
    }
  },

  watch: {
    filterQuery() {
      this.filter()
    },
  },

  methods: {
    filter: throttle(
      function () {
        this.$emit('filter-change', this.filterQuery)
      },
      250,
      { leading: false, trailing: true }
    ),
  },
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  align-items: flex-end;
  padding: $s-m $s-xs $s-l;

  > * {
    flex: 0 0 auto;
    padding: 0 $s-s;
  }

  label {
    flex: 1 1 auto;

    span {
      display: block;
      text-transform: uppercase;
      font-weight: bold;
      color: $c-heading;
      padding-bottom: $s-s;
    }
  }

  input {
    width: 100%;
    line-height: 3.2rem;
    padding: 0 $s-s;
  }

  button {
    color: darken($c-heading, 40%);
    line-height: 3.2rem;
    padding: 0 $s-m;
  }
}
</style>
