import store from '@/scripts/store';

export function setInterceptors (instance) {
  instance.interceptors.request.use(
    function (config) {
    //Authorization에 store에서 가져오 토큰을 삽입
      config.headers.Authorization = store.state.account.auth
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )
  return instance
}