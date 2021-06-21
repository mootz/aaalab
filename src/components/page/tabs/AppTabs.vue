<template lang="pug">
  .app-tabs
    .app-tabs__item(:style="`margin-right: ${marginRight}`" v-for="tab in tabs" :key="tab.routeName")

      routerLink.app-tabs__link(:to="{ name: tab.routeName }" v-show="!tab.disabled") {{ tab.name }}
        .app-tabs__bold-text {{ tab.name }}
</template>

<script>
export default {
  name: 'AppTabs',
  props: {
    tabs: {
      type: Array,
      default: () => [
        {
          name: 'Вкладка 1',
          routeName: 'routeName1',
          disabled: false
        },
        {
          name: 'Вкладка 1',
          routeName: 'routeName2',
          disabled: false
        }
      ]
    },
    marginRight: {
      type: String,
      default: '26px'
    }
  }
}
</script>

<style lang="stylus">
@import "../../../assets/css/system/_default.styl"

.app-tabs
  display: flex
  margin-bottom: 22px

  &__link
    color: #9fa2a8
    padding-bottom: 6px
    transition: color $transition
    font-family: $ptsans
    position: relative
    text-transform: uppercase
    font-size: 12px

    &::before
      content: ''
      position: absolute
      bottom: 0
      left: 0
      transition: transform $transition
      width: 100%
      height: 2px
      background: currentColor
      transform: scaleX(0)

    &:hover::before
      transform scaleX(1)

    &.router-link-active
      color: $link-color
      font-weight: bold

      &::before
        transform: scaleX(1)

  &__bold-text
    position: relative
    top: -50%
    left: 0
    font-weight: bold
    opacity: 0
    margin-bottom: -24px
</style>
