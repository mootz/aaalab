<template lang="pug">
  HomeTiles(:data="tiles"
            :modal="modalTiles"
            @closeModal="closeModal"
            @openModal="openModal")

</template>

<script>
import HomeTiles from '@/components/home/HomeTiles'
import { mapGetters } from 'vuex'

export default {
  name: 'Home_country',
  components: { HomeTiles },
  computed: {
    ...mapGetters({
      tiles: '[home] getHomeTiles',
      modalTiles: '[home] getHomeModal'
    })
  },
  methods: {
    closeModal () {
      this.$store.commit('[home] CLOSE_TILES_MODAL')
    },
    openModal (content) {
      this.$store.commit('[home] OPEN_TILES_MODAL', content)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
