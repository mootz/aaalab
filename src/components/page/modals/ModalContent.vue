<template lang="pug">
  .modal-mask(@click.stop="closeModal")
    .modal(@click.stop :style="{maxWidth: maxWidth}")
      .modal__body
        .modal__close(@click.stop="closeModal")
          svg(xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='28px' height='28px')
            path(fill-rule='evenodd' fill='rgb(255, 255, 255)' d='M14.000,27.999 C6.268,27.999 0.000,21.732 0.000,14.000 C0.000,6.268 6.268,0.001 14.000,0.001 C21.732,0.001 27.999,6.268 27.999,14.000 C27.999,21.732 21.732,27.999 14.000,27.999 ZM20.124,9.499 L19.846,8.201 L18.548,7.923 L14.059,12.319 L9.569,7.923 L8.178,8.201 L7.993,9.499 L12.390,13.988 L7.900,18.478 L8.178,19.776 L9.569,20.054 L13.966,15.564 L18.548,20.054 L19.846,19.776 L20.124,18.478 L15.635,13.988 L20.124,9.499 Z')

        img(v-if="modalData.type === 'img'" :src="modalData.src" :alt="modalData.name")

        video(v-else-if="modalData.type === 'video'" :src="modalData.src" :alt="modalData.name")

        iframe(v-else-if="modalData.type === 'youtube'" :src="modalData.src" :alt="modalData.name" allowfullscreen autoplay)

</template>

<script>
export default {
  name: 'ModalContent',
  props: {
    modalData: {
      type: Object,
      default: () => {
        return {
          type: null,
          src: null
        }
      }
    },
    maxWidth: {
      type: String,
      default: '650px'
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../../../assets/css/system/_vars.styl"

.modal-mask
  width: 100%
  height: 100%
  position: fixed
  z-index: 999
  left: 0
  top: 0
  display: flex
  align-items: center
  justify-content: center
  background: rgba(0,0,0,0.9)

.modal
  max-height: 80vh
  position: relative
  z-index: 1
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: center

  &__body
    display: flex
    align-items: center
    justify-content: center
    //height: 100%
    width: 100%
    position: relative

  &__close
    position: absolute
    top: -32px
    right: -32px
    cursor: pointer
    z-index: 5
    transition: opacity $transition
    width: 28px
    height: 28px

    svg
      width: 100%
      height: 100%

    &:hover
      opacity: 0.5

  img,video,iframe
    height: 100%
    width: 100%
    object-fit: contain

  img
    object-fit: cover
    height: auto

  iframe,video
    height: 400px
    border: 0

  @media screen and (max-width: 992px)
    padding: 0 40px

</style>
