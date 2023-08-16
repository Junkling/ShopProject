import { createApp } from 'vue';
import store from "@/scripts/store";
import router from "@/scripts/router";
import App from './App.vue';
// import axios from 'axios';
// axios.defaults.headers.post['auth'] =  store.state.account.auth;
// axios.interceptors.request.use((config)=>
// {
//     return config;
// })

createApp(App).use(store).use(router).mount('#app')
 