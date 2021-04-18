<template>
  <div class="vue-tempalte">
    <form>
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          v-model="email"
          class="form-control form-control-lg"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="form-control form-control-lg"
        />
      </div>
      <div class="form-group" v-if="message">
        <label>{{ message }}</label>
      </div>
      <button
        type="button"
        class="btn btn-dark btn-lg btn-block"
        v-on:click="login"
      >
        Sign In
      </button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  data: () => ({
    email: null,
    password: null,
    message: null
  }),
  methods: {
    login() {
      this.message = null;
      api
        .login({
          email: this.email,
          password: this.password,
        })
        .then(({ data }) => {
          this.$store.commit('saveUser', { user: data.user, token: data.tokens.access.token })
          console.log(this.$store.state);
          this.$router.push('routine');
        })
        .catch(({ response }) => {
          this.message = response.data.message;
        });
    },
  }
};
</script>
