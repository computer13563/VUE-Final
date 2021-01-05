import Vue from 'vue'
import Vuex from 'vuex'

import products_module from './back_end/get_products'
import coupon_module from './back_end/coupon_module'
import modal from './back_end/modal'
Vue.use(Vuex)

export default new Vuex.Store({
  // 嚴謹模式
  strict: true,

  // 變數儲存的地方
  state: {
    isLoading: false,
  },

  //操作變數的方法   
  // state是一定要有的內建變數指的就是上面的state裡面的變數  
  // payload是外部傳進去的 可以沒有
  // 這邊只做同步的行為   非同步交給action做
  // payload傳多個參數要用物件{payload1,payload2......}
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
  },

  //methods
  // context是內建一定要有的變數 要用這個變數去操作方法做甚麼事
  // payload是外部傳入的變數 可以沒有
  // payload傳多個參數要用物件{payload1,payload2......}
  actions: {
    loading_animation(context, payload) {
      context.commit('LOADING', payload);
    },
  },

  // getter跟computed差不多
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },

  // 模組化
  modules: {
    products_module,
    coupon_module,
    modal
  },
})