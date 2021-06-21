<template lang="pug">
  #app(@click.stop="closeAllPopups")
    AppHeader
    routerView
    AppFooter
</template>

<script>
import AppHeader from '@/components/page/AppHeader'
import AppFooter from '@/components/page/AppFooter'
export default {
  name: 'App',
  components: { AppFooter, AppHeader },
  methods: {
    closeAllPopups () {
      this.$store.dispatch('closeAllPopups')
    }
  }
}
</script>

<style lang="stylus">
@import "./assets/css/main.styl"
#app
  min-height: 100vh
</style>
