<template>
  <FilteredList
    :list-data="listData"
    :filter-value="this.$route.query.filter"
    :is-loading="isLoading"
    @filter-change="onFilterChange"
  >
    Users List</FilteredList
  >
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import FilteredList from '~/components/FilteredList/FilteredList'

export default {
  components: { FilteredList },

  async middleware({ store, redirect, query }) {
    await store.dispatch('users/getUsers', { query: query.filter })
  },

  computed: {
    ...mapGetters({
      users: 'users/usersList',
      isLoading: 'users/isLoading',
    }),

    listData() {
      return this.users.map((user) => ({
        key: user.userId,
        linkTo: `/users/${user.userId}`,
        linkText: `${user.firstName} ${user.lastName}`,
      }))
    },
  },

  methods: {
    ...mapActions({
      getUsers: 'users/getUsers',
    }),

    onFilterChange(query) {
      this.syncRouter(query)
      this.getUsers({ query })
    },

    syncRouter(query) {
      const equals = !!this.$router.query && this.$router.query.filter === query
      const equalsEmpty =
        !query && (!this.$router.query || !this.$router.query.filter)
      if (equals || equalsEmpty) {
        return
      }
      this.$router.replace({ query: { filter: query } })
    },
  },

  head: {
    title: 'Users list',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'A list of users',
      },
    ],
    htmlAttrs: {
      lang: 'en',
    },
  },
}
</script>
