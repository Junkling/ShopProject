import axios from 'axios';
import { setInterceptors } from './common/interceptors';
import store from "@/scripts/store";

function createInstance () {
	return axios.create({
		baseURL: "http://localhost:3000/"
	})
  }
  
  function createInstanceWithAuth () {
	const instance = axios.create({
		baseURL: "http://localhost:3000/",
		headers: {
			Authorization: store.state.account.auth, // store에서 불러오기
		},
	})
	return setInterceptors(instance)
  }
  
  const instance = createInstance()
  const instanceAuth = createInstanceWithAuth()
  export { instance, instanceAuth }