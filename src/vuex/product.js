import axios from "axios";

export const productModule = {
  state: {
    productId : "",
    title: "",
    description: "",
    imageUrl: "",
    userId: "",
    price: 0,
  },

  mutations: {
    updateProduct(state, product) {
      state.productId = product._id;
      state.title = product.title;
      state.description = product.description;
      state.imageUrl = product.imageUrl;
      state.userId = product.userId;
      state.price = product.price;
    },

    updateTitle(state,title){
      state.title = title;
    },

    updateDescription(state,description){
      state.description = description;
    },

    updateImageUrl(state,imageUrl){
      state.imageUrl = imageUrl;
    },

    updatePrice(state,price){
      state.price = price;
    },

    clearForm(state){
      state.productId = "";
      state.title = "";
      state.description = "";
      state.imageUrl = "";
      state.userId = "";
      state.price = 0;
    }
  },

  actions: {
    updateProduct({ commit }, product) {
      commit("updateProduct", product);
    },
    //CRUD operations :
    async createProduct({commit}, {data}) {
      await axios
        .post("/products", data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },

    // async getProducts(){
    //   await axios
    //     .get("/products")
    //     .then((response) => this.products = response.data)
    //     .catch((error) => console.log(error));
    // },

    async updateProductInServer({commit},{data, productId}){
      await axios
        .patch(`/products/${productId}`, data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },

    async deleteProduct({commit}, productId) {
      await axios
        .delete(`/products/${productId}`)
        .then((response) => alert(response.data.message))
        .catch((error) => console.log(error));
    },
  },

  getters: {
    title: (state) => state.title,
    description: state => state.description,
    imageUrl: state => state.imageUrl,
    price: state => state.price,
    productId : state => state.productId
  },
};
