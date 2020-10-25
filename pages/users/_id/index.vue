<template>
  <div class="container">
    User {{ this.$route.params.id }}
    <nuxt-link to="/users/list">users</nuxt-link>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
}
</script>
