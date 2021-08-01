<template>
  <nav class="navbar">
    <router-link to="/" class="brand-name">Store</router-link>
    <div class="navbar-btns">
      <div v-if="userId" class="navbar-btn" @click="showModal">
        Add Item
      </div>
      <div v-if="!userId" class="navbar-btn" @click="$router.push('/auth')">
        Login
      </div>
      <div v-if="userId" class="navbar-btn" @click="logout">Logout</div>
    </div>
  </nav>
  <Modal v-if="isOpen" > </Modal>
</template>
<script>
import { mapGetters } from "vuex";

import Modal from "./ProductModal.vue";
export default {
  name: "Navbar",
  components: {
    Modal,
  },
  computed: {
    ...mapGetters(["userId","isOpen"]),
  },
  
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("setUserId", null);
    },

    showModal() {
      this.$store.dispatch('showModal')
      this.$store.commit('switchToCreate')
    }
  },
};
</script>

<style>
.navbar {
  background-color: #001325;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 10;
}

.brand-name {
  font-family: "Pacifico", cursive;
  font-size: 1.7rem;
  padding: 0.25em 0.5em;
  color: #ffff;
  text-decoration: none;
  cursor: pointer;
}

.navbar-btns {
  display: flex;
  margin-right: 0.5em;
}

.navbar-btn {
  padding: 0.2em 1em;
  cursor: pointer;
  font-family: "Pacifico", sans-serif;
}

.navbar-btn:not(:last-child) {
  border-right: 1px white solid;
}

.navbar-btn:hover {
  transform: scale(1.2);
}
</style>