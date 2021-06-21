<template lang="pug">
  .section
    HomeTiles(:data="tiles")
</template>

<script>
import HomeTiles from '@/components/home/HomeTiles'
import { mapGetters } from 'vuex'
export default {
  name: 'Home_country',
  components: { HomeTiles },
  computed: {
    ...mapGetters({
      tiles: '[home] getHomeTiles'
    })
  }
}
</script>

<style scoped lang="stylus">
</style>
