<template lang="pug">
  #app(@click.stop="closeAllPopups")
    AppHeader
    routerView
</template>

<script>
import AppHeader from '@/components/page/AppHeader'
export default {
  name: 'App',
  components: { AppHeader },
  methods: {
    closeAllPopups () {
      this.$store.dispatch('closeAllPopups')
    }
  }
}
</script>

<style lang="stylus">
@import "./assets/css/main.styl"
</style>
