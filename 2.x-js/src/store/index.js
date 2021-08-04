/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT_TYPE, DECREMENT_TYPE, INCREMENT_ASYNC_TYPE, ADD_PERSON } from './mutation-types';

Vue.use(Vuex)

const countModule = {
  // namespaced: true, // 有什么用
  state: {
    count: 111
  },
  mutations: {
    [INCREMENT_TYPE](state, count = 0) {
      state.count += count*1
    },
    [DECREMENT_TYPE](state, count = 0) {
      state.count -= count*1
    }
  },
  actions: {
    [INCREMENT_ASYNC_TYPE]({ dispatch, commit }, count) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit(INCREMENT_TYPE, count)
          resolve();
        }, 1000)
      })
    }
  }
}

const personModule = {
  state: {
    person: [
      {  
        id: 1,
        name: 'haha',
        age: 666
      }
    ]
  },
  mutations: {
    [ADD_PERSON](state, {name, age}) {
      state.person = [{name, age}, ...state.person]
    }
  },
  actions: {
  }
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    count: countModule,
    person: personModule
  }
})
