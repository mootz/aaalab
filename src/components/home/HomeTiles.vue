<template lang="pug">
  .tiles
    .tiles__wrap
      .tiles__item.swiper-container(v-for="(card, index) in data"
                     :key="card.id"
                     :style="{backgroundImage: `url(${card.mainImg})` }"
                     :class="[card.list.length ? 'tiles__big-item swiper-disabled': '', `s-${index + 1}`]")

        .tiles__item-wrapper.swiper-wrapper

          .tiles__slide.swiper-slide(v-if="card.name")
            h3.tiles__name(v-if="!card.list.length")
              | {{card.name}}
            .tiles__info(v-else)
              h3.tiles__card-title {{card.name}}
              ol.tiles__card-list
                li.tiles__card-item(v-for="item in card.list") {{item}}

          .tiles__slide.tiles__slide-image.swiper-slide(v-if="card.img")
            img(:src="card.img")

          .tiles__slide.tiles__slide-video.swiper-slide(v-if="card.video")
            .tiles__video
              img(:src="card.video.preview ? card.video.preview : './img/placeholder-video.jpg'")

        .tiles__prev.swiper-button-prev
        .tiles__next.swiper-button-next

</template>

<script>
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation])

export default {
  name: 'HomeTiles',
  props: {
    data: {
      type: Array,
      default: () => [
        {
          name: 'Название',
          list: [],
          img: ''
        }
      ]
    }
  },
  mounted () {
    const tilesItems = document.querySelectorAll('.tiles__item')

    tilesItems.forEach((elem, index) => {
      const containerName = `.s-${index + 1}`
      // eslint-disable-next-line no-unused-vars
      const swiper = new SwiperCore(containerName, {
        loop: false,
        navigation: {
          nextEl: `${containerName} .tiles__next`,
          prevEl: `${containerName} .tiles__prev`
        }
      })

      if (elem.classList.contains('tiles__big-item')) {
        swiper.disable()
      }
    })
  }
}
</script>

<style scoped lang="stylus">
@import "../../assets/css/system/_vars.styl"
.tiles
  &__wrap
    display: grid
    grid-template-columns: repeat(4, 1fr)
    grid-gap: 20px
    grid-auto-rows: 200px
    grid-auto-flow: dense

  &__item
    background-repeat: no-repeat
    background-size: cover
    position: relative
    margin-left: initial
    margin-right: initial

  &__big-item
    grid-column: span 2
    grid-row: span 2

  &__slide
    position: relative

  &__name,
  &__card-title
    font-size: 36px
    font-weight: 400

  &__name
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

  &__info
    position: absolute
    left: 33px
    top: 60%
    transform: translateY(-50%)

  &__card-title
    margin-bottom: 40px

  // Можно сделать через css counter, чтобы детально стилизовать порядковые цифры
  &__card-item
    font-size: 20px
    margin-bottom: 28px

  &__slide-image,
  &__slide-video
    img
      width: 100%
      height: 100%
      object-fit: cover

  &__slide-image
    cursor: zoom-in

  &__video
    position: relative
    cursor: pointer

    &::before
      content: ''
      z-index: 1
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      background: rgba(0,0,0,0.4)

    &::after
      content: ''
      z-index: 2
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      width: 0
      height: 0
      border-top: 30px solid transparent
      border-bottom: 30px solid transparent
      border-left: 40px solid white

</style>
