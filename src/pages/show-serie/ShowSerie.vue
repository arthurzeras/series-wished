<template>
  <div class="page-serie">
    <div style="font-size: 1.3rem" v-if="loading">
      Aguarde um momento...
    </div>
    <template v-else>
      <h1>{{ serie.title }}</h1>
      <img :src="serie.image" height="400" alt="Poster da serie" loading="lazy">
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data: () => ({ loading: true }),
  mounted () {
    this.getData()
  },
  computed: {
    ...mapState('showSerie', ['serie'])
  },
  methods: {
    ...mapActions('showSerie', ['ActionFindSerie']),
    async getData () {
      try {
        await this.ActionFindSerie(this.$route.params.id)
      } catch (err) {
        alert('Não foi possível carregar a página')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-serie {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 56px);
}
</style>
