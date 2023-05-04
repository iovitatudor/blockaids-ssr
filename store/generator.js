export default {
  namespaced: true,

  state: {
    avatar: null,
  },

  getters: {
    avatar: (state) => state.avatar,
  },

  mutations: {
    setAvatar(state, avatar) {
      state.avatar = avatar;
    },
  },

  actions: {
    onSetAvatar({commit}, avatar) {
      commit('setAvatar', avatar);
    },
  },
};
