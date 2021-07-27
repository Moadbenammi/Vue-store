<template>
  <div class="auth_form-container">
    <div class="auth_form-title-container">
      <h3 class="auth_form-title">{{ currentOperation }}</h3>
    </div>
    <form @submit.prevent="handleSubmit">
      <div
        v-if="!isLogingIn"
        class="auth_form-info-container top-border-radius"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          v-model="name"
          required
        />
      </div>
      <div
        class="auth_form-info-container"
        :class="[isLogingIn ? 'top-border-radius' : '']"
      >
        <input
          type="email"
          placeholder="Email"
          name="email"
          v-model="email"
          required
        />
      </div>
      <div class="auth_form-info-container">
        <input
          :type="passwordVisibility"
          placeholder="Password"
          name="password"
          v-model="password"
          required
          minlength="6"
        />
        <span
          class="display-eye fa"
          :class="[
            passwordVisibility == 'password' ? 'fa-eye' : 'fa-eye-slash',
          ]"
          @click="switchPasswordVisibility"
        ></span>
      </div>

      <div v-if="isLogingIn" class="auth_goToSignup-btn-container">
        <span>You don't have an account?</span>
        <span @click="switchOperation" class="auth_goToSignup-btn"
          >Sign up</span
        >
      </div>
      <div v-if="!isLogingIn" class="auth_goToSignup-btn-container">
        <span>Already have an account?</span>
        <span @click="switchOperation" class="auth_goToSignup-btn">Login</span>
      </div>
      <input
        class="auth_form-submit-btn"
        type="submit"
        :value="currentOperation"
      />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AuthForm",
  data() {
    return {
      isLogingIn: true,
      name: "",
      email: "",
      password: "",
      passwordVisibility: "password",
    };
  },

  computed: {
    currentOperation() {
      if (this.isLogingIn) {
        return "Login";
      } else {
        return "Sign Up";
      }
    },
  },

  methods: {
    switchPasswordVisibility() {
      this.passwordVisibility =
        this.passwordVisibility == "password" ? "text" : "password";
    },

    switchOperation() {
      this.isLogingIn = !this.isLogingIn;
      this.name = "";
      this.email = "";
      this.password = "";
      this.passwordVisibility = "password";
    },

    async signup(data) {
      await axios
        .post("auth/signup", data)
        .then(() => {
          alert("Registred successfully, now go ahead and login !");
          this.switchOperation();
        })
        .catch(() => alert("Email already exist !"));
    },

    async login(data) {
      await axios
        .post("auth/signin", data)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.$store.dispatch("user",response.data.userId)
          this.$router.push("/");
        })
        .catch(() => alert("Incorrect email or password"));
    },

    handleSubmit() {
      if (this.isLogingIn) {
        const data = {
          email: this.email,
          password: this.password,
        };
        this.login(data);
      } else {
        const data = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        this.signup(data);
      }
    },
  },
};
</script>

<style>
.auth_form-container {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 0 2em;
}

form {
  width: 100%;
}

.auth_form-title-container {
  width: 100%;
  text-align: center;
}

.auth_form-title {
  font-size: 1.75rem;
}

.auth_form-info-container {
  display: flex;
  overflow: hidden;
  margin-bottom: 0;
  padding: 15px 15px;
  border-bottom: none;
  position: relative;
  background: #edf2f5;
  border-bottom: 1px solid #e6edf1;
}

.top-border-radius {
  border-top-right-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
}

.bottom-border-radius {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

input {
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  background: transparent;
  border: none;
  padding: 0;
  font-size: 14px;
  border-radius: 0;
  font-weight: 600;
  line-height: 1.5;
  color: #495057;
  overflow: visible;
  cursor: text;
}

.display-eye {
  cursor: pointer;
  height: fit-content;
  margin: auto 0;
}

.auth_goToSignup-btn-container {
  margin-top: 1em;
  font-size: 14px;
}

.auth_goToSignup-btn {
  margin-left: 0.5em;
  color: #002442;
  background-color: transparent;
  cursor: pointer;
  vertical-align: center;
}

.auth_form-submit-btn {
  margin-top: 2em;
  width: 100%;
  height: 54px;
  padding-left: 30px;
  padding-right: 30px;
  cursor: pointer;
  color: #fff;
  background-color: #002442;
  border-color: #002442;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
}

.auth_form-submit-btn:hover {
  background-color: #001325;
  border-color: #001325;
}
</style>
