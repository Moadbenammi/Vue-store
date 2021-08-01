<template>
  <div class="wrapper">
    <div class="product-img">
      <img :src="product.imageUrl" />
    </div>
    <div class="product-info">
      <div class="product-text">
        <span
          v-if="isEditable"
          @click="this.$store.dispatch('deleteProduct',product._id)"
          class="product-delete-btn fa fa-trash"
        ></span>
        <h1>{{ product.title }}</h1>
        <h2>by store</h2>
        <p>
          {{ product.description }}
        </p>
      </div>
      <div class="product-price-btn">
        <p>
          <span>{{ product.price }} </span>$
        </p>
        <button v-if="!isEditable">buy now</button>
        <button v-if="isEditable" @click="update(product)">update</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductCard",

  props: ["product"],

  computed: {
    ...mapGetters(["userId"]),
    isEditable() {
      if (this.product.userId == this.userId) {
        return true;
      }
      return false;
    },
  },
  methods: {
    update(product) {
      this.$store.dispatch("updateProduct", product);
      this.$store.dispatch("showModal");
      this.$store.commit("switchToUpdate");
    },
  },
};
</script>

<style>
.wrapper {
  margin: 1em auto;
  height: 350px;
  width: 515px;
  border-radius: 7px 7px 7px 7px;
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  overflow: hidden;
  color: #001325;
  z-index: 1;
}

.wrapper:hover {
  transform: scale(1.05);
  -webkit-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.3);
}

.product-img {
  width: 50%;
  height: 350px;
}

.product-img img {
  border-radius: 7px 0 0 7px;
  min-height: 100%;
}

.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0em 0.5em;
  width: 50%;
  height: 100%;
  border-radius: 0 7px 10px 0px;
  background-color: #ffffff;
}

.product-delete-btn {
  width: fit-content;
  margin-top: 9px;
  float: right;
  cursor: pointer;
  color: #001325;
  padding: 0.3em;
}

.product-delete-btn:hover {
  color: #002442;
  border-radius: 50px;
  background-color: #0087f563;
}

.product-text h1 {
  margin-top: 1.4em;
  margin-bottom: 0.2em;
  font-size: 28px;
  color: #474747;
  word-wrap: break-word;
}

.product-text h1,
.product-price-btn p {
  font-family: "Bentham", serif;
}

.product-text h2 {
  font-size: 13px;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: #d2d2d2;
  letter-spacing: 0.2em;
  margin: 0;
}

.product-text p {
  font-family: "Playfair Display", serif;
  color: #8d8d8d;
  line-height: 1.7em;
  font-size: 15px;
  font-weight: lighter;
  overflow: hidden;
}

.product-price-btn {
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5em;
}

.product-price-btn p {
  font-family: "Trocchi", serif;
  font-size: 20px;
  font-weight: lighter;
  color: #474747;
}

.product-price-btn span {
  height: 40px;
  font-family: "Suranna", serif;
  font-size: 28px;
  font-weight: bold;
}

.product-price-btn button {
  height: 40px;
  width: 120px;
  border: transparent;
  border-radius: 60px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  background-color: #001325;
  cursor: pointer;
  outline: none;
}

.product-price-btn button:hover {
  background-color: #002442;
}

@media (max-width: 568px) {
  .wrapper {
    width: 95%;
    height: 290px;
  }

  .product-info {
    width: 50%;
    border-radius: 0px 0px 7px 7px;
  }

  .product-img {
    width: 50%;
    height: 100%;
  }

  .product-img img {
    width: 100%;
    height: 100%;

    border-radius: 7px 7px 0px 0px;
  }

  .product-text h1 {
    font-size: 20px;
  }

  .product-text h2 {
    font-size: 10px;
  }

  .product-text p {
    line-height: 1.2em;
    font-size: 13px;
  }

  .product-price-btn p {
    font-size: 16px;
  }

  .product-price-btn span {
    height: 40px;
    font-size: 23px;
    font-weight: bold;
  }

  .product-price-btn button {
    height: 30px;
    width: 90px;
    font-size: 10px;
  }
}
</style>