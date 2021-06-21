<template lang="pug">
  .section
    AppTabs(:tabs="this.tabs")

    transition(name="tabs-fade")
      routerView

</template>

<script>

import AppTabs from '@/components/page/tabs/AppTabs'
export default {
  name: 'Home',
  components: {
    AppTabs
  },
  data: () => {
    return {
      tabs: [
        { name: 'Все страны', routeName: 'Home_country' },
        { name: 'Культура', routeName: 'Home_culture' },
        { name: 'Экстрим', routeName: 'Home_extreme' }
      ]
    }
  }
}
</script>

<style lang="stylus">

</style>
