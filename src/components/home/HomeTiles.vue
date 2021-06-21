<template lang="pug">
  .tiles
    .tiles__wrap
      .tiles__item.swiper-container(v-for="(card, index) in data"
                     :key="card.id"
                     :style="{backgroundImage: `url(${card.mainImg})` }"
                     :class="[card.list.length ? 'tiles__big-item swiper-disabled': '', (!card.video || !card.img) && !card.list.length ? 'swiper-disabled tiles__item-empty' : '', `s-${index + 1}`]")

        .tiles__item-wrapper.swiper-wrapper

          .tiles__slide.swiper-slide(v-if="card.name")
            h3.tiles__name(v-if="!card.list.length")
              | {{card.name}}
            .tiles__info(v-else)
              h3.tiles__card-title {{card.name}}
              ol.tiles__card-list
                li.tiles__card-item(v-for="item in card.list") {{item}}

          .tiles__slide.tiles__slide-image.swiper-slide(v-if="card.img" @click.stop="openModal(card.img.src, 'img')")
            img(:src="card.img.src")

          .tiles__slide.tiles__slide-video.swiper-slide(v-if="card.video" @click.stop="openModal(card.video.src, 'youtube')")
            .tiles__video
              img(:src="card.video.preview ? card.video.preview : './img/placeholder-video.jpg'")

        .tiles__nav
          .tiles__prev.swiper-button-prev
            svg(xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink')
              path(fill-rule='evenodd' fill='rgb(255, 255, 255)' d='M11.516,22.156 C5.674,22.156 0.938,17.413 0.938,11.563 C0.938,5.712 5.674,0.969 11.516,0.969 C17.358,0.969 22.094,5.712 22.094,11.563 C22.094,17.413 17.358,22.156 11.516,22.156 ZM11.096,6.862 L9.134,7.123 L12.751,11.523 L9.259,15.864 L11.196,16.160 L14.972,11.496 L11.096,6.862 Z')

          .tiles__next.swiper-button-next
            svg(xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink')
              path(fill-rule='evenodd' fill='rgb(255, 255, 255)' d='M11.516,22.156 C5.674,22.156 0.938,17.413 0.938,11.563 C0.938,5.712 5.674,0.969 11.516,0.969 C17.358,0.969 22.094,5.712 22.094,11.563 C22.094,17.413 17.358,22.156 11.516,22.156 ZM11.096,6.862 L9.134,7.123 L12.751,11.523 L9.259,15.864 L11.196,16.160 L14.972,11.496 L11.096,6.862 Z')
    transition(name="fade")
      ModalContent(v-if="modal.isActive" @closeModal="closeModal" :modalData="modal.content")
</template>

<script>
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import ModalContent from '@/components/page/modals/ModalContent'

SwiperCore.use([Navigation])

export default {
  name: 'HomeTiles',
  components: { ModalContent },
  props: {
    data: {
      type: Array,
      default: () => [
        {
          name: 'Название',
          list: [],
          img: {
            name: '',
            src: null
          }
        }
      ]
    },
    modal: {
      type: Object,
      default: () => {
        return {
          isActive: false
        }
      }
    }
  },

  methods: {
    openModal (src, type) {
      this.$emit('openModal', { src, type })
    },
    closeModal () {
      this.$emit('closeModal')
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

      if (elem.classList.contains('swiper-disabled')) {
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

  // сделал на скорую руку, ибо увидел вторую страницу в макете в последний момент
  &__item-empty
    margin: 20px
    position: relative

    &::after
      content: ''
      width: 100%
      height: 100%
      background: rgba(255,255,255,0.5)
      position: absolute
      top: 0
      left: 0
      pointer-events: none

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
    width: 100%
    text-align: center

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
    height: 100%

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

  &__nav
    display: flex
    position: absolute
    bottom: 20px
    right: 20px

  &__next,
  &__prev
    width: 22px
    height: 22px
    position: relative
    left: 0
    right: 0
    top: 0
    bottom: 0
    opacity: 0.5
    transition: opacity $transition

    &::after
      display: none

    svg,
    path
      width: 100%
      height: 100%

    &.swiper-button-disabled
      opacity: 0.15

  &__prev
    transform: rotate(180deg)
    margin-right: 16px

  @media screen and (max-width: 1200px)
    &__wrap
      grid-template-columns: repeat(3, 1fr)
      grid-gap: 10px
      grid-auto-rows: 200px
      grid-auto-flow: dense

    &__name,
    &__card-title
      font-size: 30px

  @media screen and (max-width: 768px)
    &__wrap
      grid-template-columns: repeat(2, 1fr)
      grid-gap: 10px

    &__name,
    &__card-title
      font-size: 30px

  @media screen and (max-width: 576px)
    &__wrap
      grid-template-columns: repeat(1, 1fr)
      grid-gap 10px 0

    &__name,
    &__card-title
      font-size: 30px
</style>
