import { Store } from "vuex";
import { userModule } from "./user";
import { productModule } from "./product";
import { modalModule } from "./modal";
import { productsModule } from "./products";

const store = new Store({
  modules: {
    user: userModule,
    product: productModule,
    modal: modalModule,
    products : productsModule
  },
});

export default store;
