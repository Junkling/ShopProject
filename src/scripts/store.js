import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
        account: {
            id: 0,
            email :"",
            role : "",
            auth:""
        }
    }
  },
  mutations: {
    setAccount(state, payload){
        state.account.id = payload.id;
        state.account.email = payload.email;
        state.account.role = payload.role;
        state.account.auth = payload.auth;
      },
    }
  }
)

export default store;