import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import VuexPresistence from 'vuex-persist'
import products from '../modules/products'
import cart from '../modules/cart'

const vuexLocal = new VuexPresistence({
  storange: window.localStorage,
  modules: ['cart']
})

export default new Vuex.Store({
  state: {

  },
  modules:{
    products,
    cart
  },
  plugins: [vuexLocal.plugin]
})
