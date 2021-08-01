export const modalModule = {
  state: {
    isOpen: false,
    isUpdating : false
  },

  mutations: {
    showModal(state) {
      state.isOpen = true;
    },

    hideModal(state) {
      state.isOpen = false;
    },

    switchToUpdate(state) {
      state.isUpdating = true;
    },

    switchToCreate(state) {
      state.isUpdating = false;
    }


  },

  actions: {
    showModal({ commit }) {
      commit("showModal");
    },

    hideModal({ commit }) {
      commit("hideModal");
    },
  },

  getters: {
    isOpen: (state) => state.isOpen,
    isUpdating : state => state.isUpdating
  },
};
