import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
        account: {
            id: 0,
            email :"",
            role : "",
            auth:""
        },
        item: {
          id: 0,
          name :"",
          imgPath : "",
          price : 0,
          discountPer:0,
          quantity: 0
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
      setItem(state, payload){
        state.item.id = payload.id;
        state.item.name = payload.name;
        state.item.price = payload.price;
        state.item.discountPer = payload.discountPer;
        state.item.quantity = payload.quantity;
      }
    }
  }
)

export default store;
export const getters = {
  getItem(state){
    return state.item;
  }
}