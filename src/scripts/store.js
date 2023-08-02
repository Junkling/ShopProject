import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
        account: {
            id: 0,
            role:""
        }
    }
  },
  mutations: {
    setAccount(state, payload){
        state.account.id = payload;
        state.account.role = payload.role;
    }
  }
})

export default store;