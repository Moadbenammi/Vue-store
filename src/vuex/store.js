import { Store } from "vuex";
import { userModule } from "./user";
import { productModule } from "./product";
import { modalModule } from "./modal";
import { productsModule } from "./products";
import createPersistedState from "vuex-persistedstate";


const store = new Store({
  modules: {
    user: userModule,
    product: productModule,
    modal: modalModule,
    products : productsModule
  },
  plugins: [createPersistedState()]
});

export default store;
