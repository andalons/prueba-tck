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
        },
        setShoppingCart(state, payload){
            state.shoppingCart[payload.id] = payload
        },
        increase(state, payload){
            state.shoppingCart[payload].amount = state.shoppingCart[payload].amount + 1
        },
        decrease(state, payload){
            state.shoppingCart[payload].amount = state.shoppingCart[payload].amount - 1
            if(state.shoppingCart[payload].amount === 0) {delete state.shoppingCart[payload]}
            
        },
    },
    actions: {
        async fetchData({commit}) {
            try {
              const res = await fetch('https://api.punkapi.com/v2/beers?per_page=10')
              const data = await res.json()
              const cleanData = data.map((item) => {
                /* Función para sacar el precio de cada cerveza, dato que no llega de la API */
                const randomNumber = (min, max) => {
                    return Math.random() * (max - min) + min;
                }
                return {
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    img: item.image_url,
                    abv:item.abv, 
                    pairings: item.food_pairing,
                    price: randomNumber(1.5, 4.5).toFixed(2)
                }
              });
              commit('setBeersData', cleanData)
            } catch (error) {
              console.log(error)
            }
          },
          addItemToCart ({commit, state}, item) {
           /*  Primero verificamos si en el carrito ya existe el id clickado y si es así modificamos su amount. 
            Si no, creamos la propiedad amount y le damos el valor de 1 */
            state.shoppingCart.hasOwnProperty(item.id)
            ? item.amount = state.shoppingCart[item.id].amount + 1
            : item.amount = 1
            commit('setShoppingCart', item)
          },

    },
    getters: {
        totalPrice(state) {
            return Object.values(state.shoppingCart).reduce((acc, {amount, price}) => acc + amount * price, 0)
          }
    }

});