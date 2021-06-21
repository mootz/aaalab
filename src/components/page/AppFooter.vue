<template lang="pug">
  footer.footer
    .section
      .footer__wrap
        .footer__copy © 2013 - 2015

        .footer__logo
          .footer__l-text Одна ошибка и
            span ты ошибся

          .footer__l-img
            img(src="/img/logo-footer.png")
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/system/_vars.styl"

.footer
  background: $accent
  padding: 12px 0
  margin-top: 64px
  transition: background $transition

  &__wrap
    display: flex
    justify-content: space-between
    align-items: center

  &__copy
    line-height: 17px

  &__logo
    display: flex

  &__l-text
    font-size: 14px
    line-height: 17px
    color: #6b7076

    span
      color: #b5b9be
      margin-right: 16px

</style>
