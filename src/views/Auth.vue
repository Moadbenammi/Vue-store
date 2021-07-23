<template>
  <div class="auth_page-container">
    <div class="auth_image-container">
      <img alt="Buying from home" src="../assets/desk.svg" />
    </div>
    <AuthForm />
  </div>
</template>

<script>
import AuthForm from "../components/AuthForm";

export default {
  name: "Auth",
  components: { AuthForm },
};
</script>

<style>
.auth_page-container {
  margin: 0 auto;
  padding: 5rem 0;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.auth_image-container {
  width: 70%;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

@media (min-width: 768px) {
  .auth_form-container {
    max-width: 35%;
  }

  .auth_image-container {
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  .auth_image-container {
    display: none;
  }

  .auth_form-container {
    width: 60%;
  }
}

@media (max-width: 568px) {
  .auth_form-container {
    width: 100%;
  }
}

@media (min-width: 992px) {
  .auth_form-container {
    width: 42%;
  }
}
</style>
