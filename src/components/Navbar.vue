<template>
  <nav class="navbar">
    <router-link to="/" class="brand-name">Store</router-link>
    <div class="navbar-btns">
      <div
        v-if="user"
        class="navbar-btn"
      >
        Add Item
      </div>
      <div v-if="!user" class="navbar-btn" @click="$router.push('/auth')">
        Login
      </div>
      <div v-if="user" class="navbar-btn" @click="logout"> Logout </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
    },
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

.navbar-btns{
  display: flex;
  margin-right: .5em;
}

.navbar-btn {
  padding: 0.2em 1em;
  cursor: pointer;
  font-family:  "Pacifico", sans-serif;
}

.navbar-btn:not(:last-child) {
  border-right: 1px white solid;
}

.navbar-btn:hover{
  transform : scale(1.2);
}
</style>