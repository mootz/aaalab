const initialState = () => {
  return {
    tiles: [
      {
        id: 1,
        name: 'Cuba',
        mainImg: './img/placeholders-tiles/photo-1.jpg',
        list: [],
        video: {
          preview: null,
          src: 'https://www.youtube.com/embed/kUfX5ob_ZjY'
        },
        img: {
          name: 'Cat',
          src: 'https://www.cnet.com/a/img/zKiT35AfPlfRJvlHty6p4zmpCrw=/940x0/2020/05/01/7f0a951f-d9a2-4847-b962-b254b63842a2/img-4960.jpg'
        }
      },
      {
        id: 2,
        name: 'Russia',
        mainImg: './img/placeholders-tiles/photo-2.jpg',
        list: [],
        video: {
          preview: null,
          src: 'https://www.youtube.com/embed/kUfX5ob_ZjY'
        },
        img: {
          name: 'Cat',
          src: 'https://www.cnet.com/a/img/zKiT35AfPlfRJvlHty6p4zmpCrw=/940x0/2020/05/01/7f0a951f-d9a2-4847-b962-b254b63842a2/img-4960.jpg'
        }
      },
      {
        id: 5,
        name: 'Latin America',
        mainImg: './img/placeholders-tiles/photo-5.jpg',
        list: ['Honduras', 'Columbia', 'Panama', 'Brazil', 'Peru']
      },
      {
        id: 3,
        name: 'England',
        mainImg: './img/placeholders-tiles/photo-3.jpg',
        list: [],
        video: {
          preview: null,
          src: 'https://www.youtube.com/embed/kUfX5ob_ZjY'
        },
        img: {
          name: 'Cat',
          src: 'https://www.cnet.com/a/img/zKiT35AfPlfRJvlHty6p4zmpCrw=/940x0/2020/05/01/7f0a951f-d9a2-4847-b962-b254b63842a2/img-4960.jpg'
        }
      },
      {
        id: 4,
        name: 'Norway',
        mainImg: './img/placeholders-tiles/photo-4.jpg',
        list: [],
        video: {
          preview: null,
          src: 'https://www.youtube.com/embed/kUfX5ob_ZjY'
        },
        img: {
          name: 'Cat',
          src: 'https://www.cnet.com/a/img/zKiT35AfPlfRJvlHty6p4zmpCrw=/940x0/2020/05/01/7f0a951f-d9a2-4847-b962-b254b63842a2/img-4960.jpg'
        }
      },
      {
        id: 6,
        name: 'Switzerland',
        mainImg: './img/placeholders-tiles/photo-6.jpg',
        list: [],
        video: {
          preview: null,
          src: 'https://www.youtube.com/embed/kUfX5ob_ZjY'
        },
        img: {
          name: 'Cat',
          src: 'https://www.cnet.com/a/img/zKiT35AfPlfRJvlHty6p4zmpCrw=/940x0/2020/05/01/7f0a951f-d9a2-4847-b962-b254b63842a2/img-4960.jpg'
        }
      },
      {
        id: 7,
        name: 'China',
        mainImg: './img/placeholders-tiles/photo-7.jpg',
        list: [],
        video: {
          preview: null,
          src: 'https://www.youtube.com/embed/kUfX5ob_ZjY'
        },
        img: {
          name: 'Cat',
          src: 'https://www.cnet.com/a/img/zKiT35AfPlfRJvlHty6p4zmpCrw=/940x0/2020/05/01/7f0a951f-d9a2-4847-b962-b254b63842a2/img-4960.jpg'
        }
      },
      {
        id: 8,
        name: 'Germany',
        mainImg: './img/placeholders-tiles/photo-8.jpg',
        list: []
      },
      {
        id: 9,
        name: 'Japan',
        mainImg: './img/placeholders-tiles/photo-9.jpg',
        list: []
      },
      {
        id: 10,
        name: 'Australia',
        mainImg: './img/placeholders-tiles/photo-10.jpg',
        list: []
      },
      {
        id: 11,
        name: 'India',
        mainImg: './img/placeholders-tiles/photo-11.jpg',
        list: []
      },
      {
        id: 12,
        name: 'Finland',
        mainImg: './img/placeholders-tiles/photo-12.jpg',
        list: []
      },
      {
        id: 13,
        name: 'New Zealand',
        mainImg: './img/placeholders-tiles/photo-13.jpg',
        list: []
      }
    ],
    modalTiles: {
      isActive: false,
      content: {
        type: null,
        src: null
      }
    }
  }
}

const state = initialState()

const getters = {
  '[home] getHomeTiles': state => state.tiles,
  '[home] getHomeModal': state => state.modalTiles
}

const mutations = {
  '[home] CLOSE_TILES_MODAL': (state) => {
    state.modalTiles.isActive = false
  },
  '[home] OPEN_TILES_MODAL': (state, content) => {
    const modalTiles = state.modalTiles
    modalTiles.isActive = true
    modalTiles.content.type = content.type
    modalTiles.content.src = content.src
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
