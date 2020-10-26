import { getUsers } from '~/assets/js/api'

export default {
  state: () => ({
    isLoading: false,
    usersList: [],
    params: {
      offset: 0,
      limit: 100,
      query: '',
    },
  }),
  mutations: {
    setUsers(state, { data, params: { offset, limit, query } }) {
      state.usersList.splice(0, state.usersList.length, ...data)
      state.params.offset = offset
      state.params.limit = limit
      state.params.query = query
    },
    setLoading(state, isLoading) {
      state.isLoading = !!isLoading
    },
  },
  actions: {
    async getUsers({ commit }, { offset = 0, limit = 100, query = '' } = {}) {
      try {
        commit('setLoading', true)
        const { data } = await getUsers({ offset, limit, query })
        commit('setUsers', {
          data,
          params: { offset, limit, query },
        })
      } catch (error) {
        // TODO: handle error in UI
        console.error(error)
      } finally {
        commit('setLoading', false)
      }
    },
  },
  getters: {
    usersList: (state) => state.usersList,
    isLoading: (state) => state.isLoading,
  },
}
