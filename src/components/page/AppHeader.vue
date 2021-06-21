<template lang="pug">
  header.header
    .section
      a(href="/").header-logo
        .header-logo__img
          img(src="/img/logo-header.png")
        .header-logo__name
          p.header-logo__main-text adventure
          p.header-logo__sub-text сделай красиво, чтобы было красиво
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/system/_vars.styl"

.header
  background: $accent
  padding: 12px 0
  margin-bottom: 64px
  transition: background $transition

  &:hover
    background: #22539d

  &-logo
    display: flex
    width: fit-content

    &__img
      width: 42px
      height: 56px

      img
        width: 100%
        height: 100%
        object-fit contain

    &__name
      margin-left: 22px

    &__main-text
      font-size: 32px
      line-height: 32px

    &__sub-text
      margin-top: 6px
      font-family: $ptsans
      font-size: 11px
      line-height: 16px
      color: #ebf4ff
      opacity: 0.25

</style>
