<template>
  <CardLayout class="container">
    <template slot="heading">
      <slot></slot>
    </template>

    <FilterForm
      class="form"
      :initial-value="filterValue"
      @filter-change="$emit('filter-change', $event)"
    >
      {{ filterLabel }}
    </FilterForm>

    <div class="list-wrapper">
      <ul v-if="listData.length" class="list" aria-busy="isLoading">
        <li v-for="item in listData" :key="item.key">
          <nuxt-link :to="item.linkTo">{{ item.linkText }}</nuxt-link>
        </li>
      </ul>
      <strong v-if="!listData.length" class="no-content">
        Sorry, couldn't find anything. Try to change your search query.
      </strong>
      <LoadingIndicator v-if="isLoading" aria-hidden="true" />
    </div>
  </CardLayout>
</template>

<script>
import LoadingIndicator from '../common/LoadingIndicator'
import CardLayout from '../common/CardLayout'
import FilterForm from './FilterForm'

export default {
  name: 'FilteredList',
  components: { FilterForm, LoadingIndicator, CardLayout },
  props: {
    filterLabel: {
      type: String,
      default: 'Filter by name',
    },
    filterValue: {
      type: String,
      default: '',
    },
    listData: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.list-wrapper {
  flex: 1 1 auto;
  max-height: 100%;
  overflow: auto;
  position: relative;
}

.list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    padding: $s-m;
    flex: 1 0 auto;
    width: 33%;
    min-width: 16ch;
  }

  a {
    text-transform: capitalize;
    color: $c-link;

    &:hover {
      color: $c-accent;
    }

    &:focus {
      outline: 3px solid $c-accent;
    }
  }
}
.no-content {
  display: block;
  padding: $s-m $s-l;
}
</style>
