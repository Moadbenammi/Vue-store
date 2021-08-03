import axios from "axios";

export const productsModule = {
  state: {
    products: [],
  },

  mutations: {
    getProducts(state, response) {
      state.products = response;
    },
  },

  actions: {
    async getProducts({ commit }) {
      await axios
        .get("/products")
        .then((response) => commit("getProducts", response.data))
        .catch((error) => console.log(error));
    },
  },

  getters: {
    products: (state) => state.products,
  },
};
