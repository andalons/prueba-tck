import { createStore} from 'vuex'

export default createStore({
    state(){
        return {
            beersData: [],
            shoppingCart: {},
        }
    },
    mutations:{
        setBeersData(state, payload) {
            state.beersData = payload
        }
    },
    actions: {
        async fetchData({commit}) {
            try {
              const res = await fetch('https://api.punkapi.com/v2/beers?per_page=10')
              const beers = await res.json()
              commit('setBeersData', beers)
            } catch (error) {
              console.log(error)
            }
          },
    },
    getters: {

    }

});