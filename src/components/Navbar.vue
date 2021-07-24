<template>
  <nav class="navbar">
    <router-link to = "/" class="brand-name">Store</router-link>
    <v-btn class="navbar-btn" @click="$router.push('/auth')"> Login </v-btn>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar {
  background-color: #6C63FF;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.brand-name {
  font-size: 2rem;
  padding: 0.25em 0.5em;
  color: #ffff;
  text-decoration: none;
  cursor: pointer;
}

.navbar-btn {
  margin: 1em;
  padding: 0.5em 0.75em;
  background-color: #3F3D56;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>