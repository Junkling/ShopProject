import { createApp } from 'vue';
import store from "@/scripts/store";
import router from "@/scripts/router";
import App from './App.vue';
import axios from 'axios';
    axios.interceptors.request.use((config)=>
    {
      config.headers["auth"] = "Bearer "+store.state.account.auth;
      return config;
    })

createApp(App).use(store).use(router).mount('#app')
 