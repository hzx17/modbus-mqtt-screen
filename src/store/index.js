import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    temperature: 0,
    humidity: 20
  },
  mutations: {
    changeTemperature (state, data) {
      state.temperature = data
    },
    changeHumidity (state, data) {
      state.humidity = data
    }
  },
  actions: {
  },
  modules: {
  }
})
