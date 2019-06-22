<template>
  <h1>Wachlist</h1>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.ActionFindWatchlist()
  },
  methods: {
    ...mapActions('watchlist', ['ActionFindWatchlist'])
  }
}
</script>

<style>

</style>
