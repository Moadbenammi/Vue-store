import { Store } from "vuex";
import { userModule } from "./user";
import { productModule } from "./product";
import { modalModule } from "./modal";

const store = new Store({
  modules: {
    user: userModule,
    product: productModule,
    modal: modalModule,
  },
});

export default store;
