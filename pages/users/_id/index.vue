<template>
  <CardLayout>
    <template slot="heading">User id {{ this.$route.params.id }}</template>
    <div>
      <p>To be done</p>
      <nuxt-link to="/users/list">Go back to users</nuxt-link>
    </div>
  </CardLayout>
</template>

<script>
import CardLayout from '~/components/common/CardLayout'

export default {
  components: { CardLayout },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
}
</script>
