import authService from '@/store/modules/auth/auth.service'
export default {
  state: {
    token: null,
    userName: '',
    role: [],
  },
  mutations: {
    setToken(state, token){
      state.token = token
    },
    setUserName(state, username){
      state.userName = username
    },
    setRole(state, role){
      state.role = role
    },
    clearAuth(state){
      state.token = null
      state.userName = ''
      state.role = []
    }
  },
  actions: {
    async login({ commit }, credentials){
      const response = await authService.login(credentials)
      if (response.success) {
        commit('setToken', response.token)
        commit('setUserName', response.username)
        commit('setRole', response.role)
      }
    },
    logout({ commit }){
      commit('clearAuth')
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getToken: (state) => state.token,
    getUserName: (state) => state.userName
  }
}
