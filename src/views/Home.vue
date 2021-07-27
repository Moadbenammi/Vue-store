<template>
  <div class="home">
    <Navbar />
    <div class="hero">
      <img src="../assets/stary.png" alt="hero-background">
      <h1 >Find everything you want!</h1>
      <div class="transition"></div>
    </div>
    <div class="cards-container">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import ProductCard from "../components/ProductCard.vue"
export default {

  name: 'Home',

  components: {
    Navbar,
    ProductCard
  },
}
</script>

<style>
.transition{
  width: 100%;
  background:  linear-gradient(to bottom, rgba(0,36,66,1), rgba(250,250,250,.2) );
  height: 200px;
  z-index: -1;
  margin-bottom: -150px;
}

.cards-container{
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: inherit;
}

.hero{
  width: 100%;
  position: relative;
  text-align: center;
}

.hero img{
  width: 100%;
}

.hero h1{
  font-family: pacifico;
  font-weight: 400;
  font-size: 4vw;
  color: white;
  position: absolute;
  top: 8px;
  left: 50px;
}

</style>