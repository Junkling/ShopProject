import { createStore } from 'vuex'
// import axios from 'axios';

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
        // const { accessToken } = payload.auth;
        // axios.defaults.headers.common["auth"] = `Bearer ${accessToken}`
      },
    }
  }
)

export default store;