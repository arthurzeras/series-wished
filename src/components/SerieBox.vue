<template>
  <router-link
    class="card mb-4"
    :to="{ name: 'show-serie', params: { id: serie.id } }"
  >
    <img
      height="400px"
      :src="serie.image"
      class="card-image-top"
    >

    <div class="card-body">
      <h3 class="text-center mb-0">
        {{ serie.title }}
      </h3>
      <div class="row text-center mt-3">
        <div class="col">
          <button class="btn btn-sm btn-outline-primary" @click="toggleWatchlist()">
            {{ serie.watchlist ? 'Remover da' : 'Adicionar na' }} watchlist
          </button>
        </div>
        <div class="col">
          <button class="btn btn-sm btn-outline-warning" @click="toggleWatchedlist()">
            {{ serie.watched ? 'Remover da' : 'Adicionar na' }} watchedlist
          </button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    serie: { type: Object, required: true }
  },
  methods: {
    toggleWatchlist () {
      if (this.serie.watchlist) {
        console.log('Remover da watchlist')
      } else {
        console.log('Adicionar na watchlist')
      }
    },
    toggleWatchedlist () {
      if (this.serie.watchlist) {
        console.log('Remover da watchedlist')
      } else {
        console.log('Adicionar na watchedlist')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  transition: .4s;
  color: var(--dark);
  &:hover {
    text-decoration: none;
    box-shadow: 1px 1px 20px rgba(0,0,0,0.5)
  }
}
</style>
